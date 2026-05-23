import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { analyzeWebsite, type AuditReport } from "@/lib/analyze";
import { ReportDashboard } from "./ReportDashboard";

const STEPS = [
  "Analyzing UX…",
  "Checking conversion flow…",
  "Reviewing mobile experience…",
  "Drafting redesign suggestions…",
];

export function DemoAnalyzer() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [stepIdx, setStepIdx] = useState(0);
  const [report, setReport] = useState<AuditReport | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const clean = url.trim();
    if (!clean) {
      toast.error("Please enter a URL to analyze");
      return;
    }
    const normalized = clean.startsWith("http") ? clean : `https://${clean}`;
    setLoading(true);
    setReport(null);
    setStepIdx(0);
    const interval = setInterval(() => {
      setStepIdx((i) => Math.min(i + 1, STEPS.length - 1));
    }, 600);
    try {
      const r = await analyzeWebsite(normalized);
      clearInterval(interval);
      setReport(r);
      toast.success("Roast ready! Scroll down for your full report.");
    } catch {
      toast.error("Something went wrong. Try again.");
    } finally {
      clearInterval(interval);
      setLoading(false);
    }
  }

  return (
    <div className="space-y-8">
      <form onSubmit={onSubmit} className="glass-strong rounded-2xl p-2 flex flex-col sm:flex-row gap-2 max-w-2xl mx-auto">
        <Input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://yourstartup.com"
          className="border-0 bg-transparent text-base h-12 focus-visible:ring-0"
          disabled={loading}
        />
        <Button type="submit" variant="hero" size="lg" disabled={loading} className="h-12 px-6">
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
          {loading ? "Analyzing…" : "Analyze Website"}
        </Button>
      </form>

      {loading && (
        <div className="glass rounded-2xl p-6 max-w-2xl mx-auto space-y-3">
          {STEPS.map((s, i) => (
            <div key={s} className={`flex items-center gap-3 text-sm transition-opacity ${i <= stepIdx ? "opacity-100" : "opacity-30"}`}>
              {i < stepIdx ? (
                <span className="h-4 w-4 rounded-full bg-primary" />
              ) : i === stepIdx ? (
                <Loader2 className="h-4 w-4 animate-spin text-neon-pink" />
              ) : (
                <span className="h-4 w-4 rounded-full border border-border" />
              )}
              <span>{s}</span>
            </div>
          ))}
        </div>
      )}

      {report && <ReportDashboard report={report} />}
    </div>
  );
}
