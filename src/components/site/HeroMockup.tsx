import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Sparkles, TrendingUp, Smartphone, Zap } from "lucide-react";

export function HeroMockup() {
  return (
    <div className="relative">
      <div className="absolute -inset-8 bg-gradient-to-tr from-neon-purple/30 via-neon-blue/20 to-neon-pink/30 blur-3xl rounded-full animate-glow-pulse" />
      <Card className="glass-strong relative p-5 rounded-2xl animate-float">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.78_0.18_80)]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.78_0.2_160)]" />
            </div>
            <span className="ml-3 text-xs text-muted-foreground">yourstartup.com</span>
          </div>
          <span className="text-xs text-gradient font-medium">LIVE AUDIT</span>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="rounded-xl p-4 bg-gradient-to-br from-neon-purple/20 to-transparent border border-neon-purple/20">
            <div className="text-xs text-muted-foreground">UX Score</div>
            <div className="font-display text-3xl font-bold mt-1">78</div>
            <Progress value={78} className="h-1 mt-2" />
          </div>
          <div className="rounded-xl p-4 bg-gradient-to-br from-neon-pink/20 to-transparent border border-neon-pink/20">
            <div className="text-xs text-muted-foreground">Conversion</div>
            <div className="font-display text-3xl font-bold mt-1">62</div>
            <Progress value={62} className="h-1 mt-2" />
          </div>
        </div>

        <div className="space-y-2">
          {[
            { icon: Smartphone, label: "Mobile responsive", val: "92%" },
            { icon: Zap, label: "First paint", val: "1.2s" },
            { icon: TrendingUp, label: "Conv. potential", val: "+34%" },
          ].map((r) => (
            <div key={r.label} className="flex items-center justify-between rounded-lg border border-border/70 px-3 py-2 text-xs bg-background/30">
              <span className="flex items-center gap-2 text-muted-foreground">
                <r.icon className="h-3.5 w-3.5" /> {r.label}
              </span>
              <span className="font-medium">{r.val}</span>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-xl p-3 bg-gradient-to-br from-neon-purple/10 to-neon-pink/10 border border-border/70">
          <div className="flex items-center gap-2 text-xs font-medium mb-1">
            <Sparkles className="h-3.5 w-3.5 text-neon-pink" />
            AI suggestion
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Rewrite hero CTA: <span className="text-gradient font-medium">"Audit My Site in 30 Seconds — Free"</span>
          </p>
        </div>
      </Card>
    </div>
  );
}
