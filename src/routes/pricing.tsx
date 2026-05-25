import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — RoastMyCV AI" },
      { name: "description", content: "Simple, founder-friendly pricing for AI website audits." },
    ],
  }),
  component: Pricing,
});

const plans = [
  {
    name: "Free", price: "$0", tagline: "For job seekers just trying it out",
    features: ["1 roast per day", "Full CV scorecard", "Top 5 improvements", "Keyword match check"],
    cta: "Start free", highlight: false,
  },
  {
    name: "Pro", price: "$20", tagline: "For active job hunters",
    features: ["Unlimited roasts", "Tailor to any job description", "Export PDF reports", "Cover letter rewrites", "Saved roast history", "Priority AI model"],
    cta: "Upgrade to Pro", highlight: true,
  },
];

function Pricing() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-36 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h1 className="font-display text-5xl sm:text-6xl font-bold">Simple <span className="text-gradient">pricing</span></h1>
            <p className="mt-4 text-muted-foreground">Start free, upgrade when you need unlimited audits.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {plans.map((p) => (
              <Card key={p.name} className={`relative p-8 ${p.highlight ? "glass-strong" : "glass"}`}>
                {p.highlight && <div className="glow-ring rounded-xl" />}
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-2xl">{p.name}</h3>
                    {p.highlight && <span className="text-xs px-2 py-1 rounded-full bg-primary text-white">Popular</span>}
                  </div>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="font-display text-5xl font-bold">{p.price}</span>
                    <span className="text-muted-foreground text-sm">/ mo</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{p.tagline}</p>
                  <ul className="mt-6 space-y-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-sm">
                        <Check className="h-4 w-4 text-neon-pink" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/signup" className="block mt-8">
                    <Button variant={p.highlight ? "hero" : "glass"} className="w-full h-11">{p.cta}</Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
