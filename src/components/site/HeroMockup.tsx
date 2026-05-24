import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Sparkles, TrendingUp, FileText, Target } from "lucide-react";

export function HeroMockup() {
  return (
    <div className="relative">
      <div className="absolute -inset-8 bg-primary/20 blur-3xl rounded-full animate-glow-pulse" />
      <Card className="glass-strong relative p-5 rounded-2xl animate-float">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.78_0.18_80)]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.78_0.2_160)]" />
            </div>
            <span className="ml-3 text-xs text-muted-foreground">alex-morgan-cv.pdf</span>
          </div>
          <span className="text-xs text-gradient font-medium">LIVE ROAST</span>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="rounded-xl p-4 bg-primary/20 border border-primary/20">
            <div className="text-xs text-muted-foreground">CV Score</div>
            <div className="font-display text-3xl font-bold mt-1">74</div>
            <Progress value={74} className="h-1 mt-2" />
          </div>
          <div className="rounded-xl p-4 bg-neon-pink/20 border border-neon-pink/20">
            <div className="text-xs text-muted-foreground">Impact</div>
            <div className="font-display text-3xl font-bold mt-1">58</div>
            <Progress value={58} className="h-1 mt-2" />
          </div>
        </div>

        <div className="space-y-2">
          {[
            { icon: FileText, label: "Length", val: "1 page ✓" },
            { icon: Target, label: "Keyword match", val: "62%" },
            { icon: TrendingUp, label: "Interview odds", val: "+41%" },
          ].map((r) => (
            <div key={r.label} className="flex items-center justify-between rounded-lg border border-border/70 px-3 py-2 text-xs bg-background/30">
              <span className="flex items-center gap-2 text-muted-foreground">
                <r.icon className="h-3.5 w-3.5" /> {r.label}
              </span>
              <span className="font-medium">{r.val}</span>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-xl p-3 bg-primary/10 border border-border/70">
          <div className="flex items-center gap-2 text-xs font-medium mb-1">
            <Sparkles className="h-3.5 w-3.5 text-neon-pink" />
            AI bullet rewrite
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            <span className="line-through">"Responsible for managing team."</span><br />
            <span className="text-gradient font-medium">"Led 6-person team to ship $1.2M ARR in 6 months."</span>
          </p>
        </div>
      </Card>
    </div>
  );
}
