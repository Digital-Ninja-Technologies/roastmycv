import { ScoreRing } from "./ScoreRing";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, AlertTriangle, Sparkles, ArrowRight, Flame } from "lucide-react";
import type { CVReport } from "@/lib/analyze";

export function ReportDashboard({ report }: { report: CVReport }) {
  const breakdown = [
    { label: "Clarity", value: report.clarity },
    { label: "Impact", value: report.impact },
    { label: "Formatting", value: report.formatting },
    { label: "Keywords", value: report.keywords },
    { label: "Experience", value: report.experience },
  ];

  return (
    <div className="space-y-6 animate-fade-in-up">
      <Card className="glass-strong relative overflow-hidden p-6 sm:p-8">
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-neon-purple/30 blur-3xl pointer-events-none" />
        <div className="grid gap-8 md:grid-cols-[auto_1fr] items-center relative">
          <div className="flex items-center justify-center">
            <ScoreRing value={report.overall} label="CV Score" size={160} />
          </div>
          <div className="space-y-4">
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Roast for</div>
              <div className="font-display text-xl truncate">{report.candidate}</div>
              {report.targetRole && (
                <div className="text-xs text-muted-foreground mt-1">Target role: {report.targetRole}</div>
              )}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
              {breakdown.map((b) => (
                <div key={b.label}>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-muted-foreground">{b.label}</span>
                    <span className="font-medium">{b.value}</span>
                  </div>
                  <Progress value={b.value} className="h-1.5" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      <Card className="glass p-6">
        <div className="flex items-center gap-2 mb-3">
          <Flame className="h-5 w-5 text-neon-pink" />
          <h3 className="font-display text-lg">The roast</h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed italic">"{report.roast}"</p>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="glass p-6">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle2 className="h-5 w-5 text-[oklch(0.78_0.2_160)]" />
            <h3 className="font-display text-lg">What works well</h3>
          </div>
          <ul className="space-y-3">
            {report.worksWell.map((w, i) => (
              <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[oklch(0.78_0.2_160)] shrink-0" />
                {w}
              </li>
            ))}
          </ul>
        </Card>

        <Card className="glass p-6">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="h-5 w-5 text-[oklch(0.75_0.22_30)]" />
            <h3 className="font-display text-lg">Critical CV problems</h3>
          </div>
          <ul className="space-y-3">
            {report.problems.map((p, i) => (
              <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                <Badge variant="outline" className="h-5 shrink-0 text-[10px] border-destructive/40 text-destructive">
                  #{i + 1}
                </Badge>
                {p}
              </li>
            ))}
          </ul>
        </Card>

        <Card className="glass p-6 md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="h-5 w-5 text-neon-pink" />
            <h3 className="font-display text-lg">How to fix it</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {report.improvements.map((s, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-lg border border-border/70 bg-background/30">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-primary text-xs font-semibold text-white">
                  {i + 1}
                </span>
                <span className="text-sm text-muted-foreground">{s}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="glass p-6">
          <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Suggested summary rewrite</div>
          <div className="space-y-2">
            <div className="text-sm line-through text-muted-foreground">{report.summaryRewrite.before}</div>
            <div className="text-sm font-medium">{report.summaryRewrite.after}</div>
          </div>
        </Card>

        <Card className="glass p-6">
          <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Bullet rewrite example</div>
          <div className="space-y-2">
            <div className="text-sm line-through text-muted-foreground">{report.bulletRewrite.before}</div>
            <div className="flex items-start gap-2 text-sm font-medium">
              <ArrowRight className="h-4 w-4 text-neon-pink mt-0.5 shrink-0" />
              <span className="text-gradient">{report.bulletRewrite.after}</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
