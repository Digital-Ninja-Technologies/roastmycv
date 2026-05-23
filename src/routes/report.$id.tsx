import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { ReportDashboard } from "@/components/site/ReportDashboard";
import { generateMockReport } from "@/lib/analyze";
import { ArrowLeft, Download } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/report/$id")({
  head: () => ({ meta: [{ title: "Report — RoastMySite AI" }] }),
  component: ReportDetail,
});

function ReportDetail() {
  const { id } = Route.useParams();
  // Mock: deterministic-ish report per id
  const urls: Record<string, string> = {
    "1": "https://acme.io",
    "2": "https://stackflow.app",
    "3": "https://beampay.com",
    "4": "https://linearloop.dev",
  };
  const report = generateMockReport(urls[id] ?? "https://yourstartup.com");

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6 space-y-6">
          <div className="flex items-center justify-between">
            <Link to="/dashboard">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4" /> Back to dashboard
              </Button>
            </Link>
            <Button variant="glass" size="sm" onClick={() => toast("PDF export is a Pro feature ✨")}>
              <Download className="h-4 w-4" /> Export PDF
            </Button>
          </div>
          <ReportDashboard report={report} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
