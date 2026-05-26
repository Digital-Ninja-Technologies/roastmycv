// Extract text from a PDF file in the browser using pdfjs-dist.
// Loaded dynamically to avoid SSR (DOMMatrix is not defined on the server).

export async function extractPdfText(file: File): Promise<string> {
  if (typeof window === "undefined") {
    throw new Error("PDF parsing is only available in the browser.");
  }
  const pdfjsLib: any = await import("pdfjs-dist");

  if (!pdfjsLib.GlobalWorkerOptions.workerSrc && !pdfjsLib.GlobalWorkerOptions.workerPort) {
    try {
      // Vite-friendly worker URL
      const workerUrl = new URL(
        "pdfjs-dist/build/pdf.worker.min.mjs",
        import.meta.url,
      ).toString();
      pdfjsLib.GlobalWorkerOptions.workerSrc = workerUrl;
    } catch {
      // Fallback to CDN matching installed version
      const version = pdfjsLib.version ?? "5.7.284";
      pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${version}/build/pdf.worker.min.mjs`;
    }
  }

  const buf = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: new Uint8Array(buf) }).promise;
  let out = "";
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    const strings = content.items
      .map((it: any) => ("str" in it ? it.str : ""))
      .filter(Boolean);
    out += strings.join(" ") + "\n\n";
  }
  return out.trim();
}
