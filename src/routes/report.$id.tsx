import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { ReportDashboard } from "@/components/site/ReportDashboard";
import { generateMockReport, loadReport, type CVReport } from "@/lib/analyze";
import { ArrowLeft, Download } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/report/$id")({
  head: () => ({ meta: [{ title: "Your CV Roast — RoastMyCV AI" }] }),
  component: ReportDetail,
});

const sampleCVs: Record<string, string> = {
  "1": "Alex Morgan\nProduct Manager with 6 years experience shipping B2B SaaS.",
  "2": "Priya Shah\nSenior Software Engineer focused on backend systems.",
  "3": "Jordan Lee\nDesigner with 4 years across product and brand work.",
  "4": "Sam Rivera\nMarketing lead, growth and lifecycle.",
};

function ReportDetail() {
  const { id } = Route.useParams();
  const [report, setReport] = useState<CVReport | null>(null);

  useEffect(() => {
    const found = loadReport(id);
    if (found) setReport(found);
    else setReport(generateMockReport(sampleCVs[id] ?? "Your CV — sample preview.", "Product Manager"));
  }, [id]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6 space-y-6">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4" /> Roast another CV
              </Button>
            </Link>
            <Button variant="glass" size="sm" onClick={() => toast("PDF export is a Pro feature ✨")}>
              <Download className="h-4 w-4" /> Export PDF
            </Button>
          </div>
          {report ? (
            <ReportDashboard report={report} />
          ) : (
            <div className="text-center text-muted-foreground py-24">Loading your roast…</div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
