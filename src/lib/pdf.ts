// Extract text from a PDF file in the browser using pdfjs-dist.
// Loaded dynamically to avoid SSR (DOMMatrix is not defined on the server).

export async function extractPdfText(file: File): Promise<string> {
  if (typeof window === "undefined") {
    throw new Error("PDF parsing is only available in the browser.");
  }
  const pdfjsLib = await import("pdfjs-dist");
  // @ts-ignore - vite worker import
  const PdfWorker = (await import("pdfjs-dist/build/pdf.worker.min.mjs?worker")).default;
  if (!pdfjsLib.GlobalWorkerOptions.workerPort) {
    pdfjsLib.GlobalWorkerOptions.workerPort = new PdfWorker();
  }

  const buf = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: buf }).promise;
  let out = "";
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    const strings = content.items.map((it: any) => ("str" in it ? it.str : "")).filter(Boolean);
    out += strings.join(" ") + "\n\n";
  }
  return out.trim();
}
