import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink, Plus, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard — RoastMySite AI" }] }),
  component: Dashboard,
});

const mockReports = [
  { id: "1", url: "https://acme.io", score: 78, date: "2 hours ago", delta: +12 },
  { id: "2", url: "https://stackflow.app", score: 64, date: "Yesterday", delta: -3 },
  { id: "3", url: "https://beampay.com", score: 82, date: "3 days ago", delta: +8 },
  { id: "4", url: "https://linearloop.dev", score: 71, date: "Last week", delta: +5 },
];

function Dashboard() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h1 className="font-display text-4xl font-bold">Your <span className="text-gradient">roasts</span></h1>
              <p className="mt-2 text-muted-foreground text-sm">All your saved AI audits in one place.</p>
            </div>
            <Link to="/">
              <Button variant="hero">
                <Plus className="h-4 w-4" /> New audit
              </Button>
            </Link>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {[
              { label: "Total audits", value: "12" },
              { label: "Avg. score", value: "74" },
              { label: "Avg. improvement", value: "+18%" },
            ].map((s) => (
              <Card key={s.label} className="glass p-5">
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{s.label}</div>
                <div className="mt-2 font-display text-3xl font-bold">{s.value}</div>
              </Card>
            ))}
          </div>

          <div className="space-y-3">
            {mockReports.map((r) => (
              <Link key={r.id} to="/report/$id" params={{ id: r.id }}>
                <Card className="glass p-5 flex items-center gap-6 hover:border-accent/40 transition-all group">
                  <div className="h-12 w-12 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center font-display font-bold text-lg">
                    {r.score}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 truncate">
                      <span className="font-medium truncate">{r.url}</span>
                      <ExternalLink className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">{r.date}</div>
                  </div>
                  <Badge variant="outline" className={`gap-1 ${r.delta > 0 ? "border-[oklch(0.78_0.2_160)]/40 text-[oklch(0.78_0.2_160)]" : "border-destructive/40 text-destructive"}`}>
                    <TrendingUp className="h-3 w-3" />
                    {r.delta > 0 ? `+${r.delta}` : r.delta}%
                  </Badge>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 group-hover:text-foreground transition-all" />
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
