type PdfJsModule = {
  GlobalWorkerOptions: {
    workerSrc?: string;
    workerPort?: Worker;
  };
  getDocument: (src: { data: Uint8Array; useWorkerFetch?: boolean; isEvalSupported?: boolean }) => {
    promise: Promise<{
      numPages: number;
      getPage: (pageNumber: number) => Promise<{
        getTextContent: () => Promise<{
          items: Array<{ str?: string }>;
        }>;
      }>;
    }>;
  };
  version?: string;
};

let pdfjsModulePromise: Promise<PdfJsModule> | undefined;

async function getPdfJs(): Promise<PdfJsModule> {
  if (typeof window === "undefined") {
    throw new Error("PDF parsing is only available in the browser.");
  }

  if (!pdfjsModulePromise) {
    pdfjsModulePromise = import("pdfjs-dist/legacy/build/pdf.mjs") as Promise<PdfJsModule>;
  }

  const pdfjsLib = await pdfjsModulePromise;

  if (!pdfjsLib.GlobalWorkerOptions.workerSrc && !pdfjsLib.GlobalWorkerOptions.workerPort) {
    try {
      pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
        "../node_modules/pdfjs-dist/legacy/build/pdf.worker.min.mjs",
        import.meta.url,
      ).toString();
    } catch {
      const version = pdfjsLib.version ?? "5.7.284";
      pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${version}/legacy/build/pdf.worker.min.mjs`;
    }
  }

  return pdfjsLib;
}

export async function extractPdfText(file: File): Promise<string> {
  const pdfjsLib = await getPdfJs();
  const buf = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({
    data: new Uint8Array(buf),
    useWorkerFetch: true,
    isEvalSupported: false,
  }).promise;

  let out = "";
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    const strings = content.items.map((it) => it.str ?? "").filter(Boolean);
    out += strings.join(" ") + "\n\n";
  }

  return out.trim();
}
