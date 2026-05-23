import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { HeroMockup } from "@/components/site/HeroMockup";
import { DemoAnalyzer } from "@/components/site/DemoAnalyzer";
import {
  ArrowRight, Eye, MousePointerClick, Smartphone, Target, Type,
  Layout, ShieldAlert, Sparkles, Link2, Brain, ListChecks, Star, Check,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RoastMySite AI — AI-powered website audits that improve conversions" },
      { name: "description", content: "Paste a URL and get an instant AI UX, UI, and conversion audit for your startup website." },
    ],
  }),
  component: Landing,
});

const features = [
  { icon: Eye, title: "UX Audit", desc: "Spot friction points in seconds with heuristic + AI scoring." },
  { icon: MousePointerClick, title: "Conversion Analysis", desc: "Find what's killing your funnel and how to fix it." },
  { icon: Smartphone, title: "Mobile Responsiveness", desc: "Tap-target, viewport and layout checks on every breakpoint." },
  { icon: Target, title: "CTA Optimization", desc: "Get rewritten CTAs that match user intent and outcome." },
  { icon: Type, title: "Copywriting Suggestions", desc: "Hero, headline and body rewrites in your brand voice." },
  { icon: Layout, title: "Visual Hierarchy Review", desc: "See exactly where attention goes — and where it should." },
  { icon: ShieldAlert, title: "Dark Pattern Detection", desc: "Flag manipulative UI patterns that hurt long-term trust." },
  { icon: Sparkles, title: "AI Redesign Insights", desc: "Actionable, prioritized fixes — not vague advice." },
];

const steps = [
  { icon: Link2, title: "Paste your URL", desc: "Drop the link to any page — landing, pricing, signup." },
  { icon: Brain, title: "AI scans your site", desc: "We analyze UX, UI, copy, conversion flow and mobile UX." },
  { icon: ListChecks, title: "Get actionable insights", desc: "A prioritized fix-list, rewrites and a redesign brief." },
];

const testimonials = [
  { name: "Maya Chen", role: "Founder, Linearloop", text: "Found 3 hero-copy issues we'd been blind to for months. Conversions up 22% in a week." },
  { name: "Jordan Patel", role: "CEO, Stacksmith", text: "Cheaper than a designer audit, and the rewrites actually shipped." },
  { name: "Sofia Ruiz", role: "Cofounder, Beampay", text: "The mobile audit alone paid for the whole year. Stop guessing." },
];

function Landing() {
  return (
    <div className="min-h-screen relative">
      <Navbar />

      {/* HERO */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center relative">
          <div>
            <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs text-muted-foreground mb-6 animate-fade-in-up">
              <span className="h-1.5 w-1.5 rounded-full bg-neon-pink animate-glow-pulse" />
              AI-powered • Trusted by 10k+ founders
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              Your Website <br />
              <span className="text-gradient">Loses Users</span> in 5 Seconds.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Get an instant AI-powered UX, UI, and conversion audit for your startup website — with prioritized fixes and rewritten copy.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#demo">
                <Button variant="hero" size="lg" className="h-12 px-6 text-base">
                  Roast My Website <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
              <a href="#demo">
                <Button variant="glass" size="lg" className="h-12 px-6 text-base">View Demo</Button>
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-xs text-muted-foreground">
              <span>No credit card</span>
              <span>•</span>
              <span>30-second results</span>
              <span>•</span>
              <span>Free forever plan</span>
            </div>
          </div>
          <HeroMockup />
        </div>
      </section>

      {/* TRUST */}
      <section className="py-12 border-y border-border/50">
        <div className="mx-auto max-w-5xl px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { v: "10k+", l: "websites roasted" },
            { v: "92%", l: "improvement rate" },
            { v: "4.9 / 5", l: "founder rating" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-4xl font-bold text-gradient">{s.v}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-display text-4xl sm:text-5xl font-bold">How it works</h2>
            <p className="mt-4 text-muted-foreground">From URL to actionable redesign brief in under a minute.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <Card key={s.title} className="glass p-6 relative overflow-hidden group">
                <div className="absolute top-4 right-4 font-display text-5xl font-bold text-white/5 group-hover:text-white/10 transition-colors">
                  0{i + 1}
                </div>
                <s.icon className="h-6 w-6 text-neon-pink mb-4" />
                <h3 className="font-display text-xl">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-display text-4xl sm:text-5xl font-bold">Everything you need to <span className="text-gradient">convert</span></h2>
            <p className="mt-4 text-muted-foreground">One audit. Eight expert lenses. Zero fluff.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((f) => (
              <Card key={f.title} className="glass p-5 hover:border-accent/40 transition-all hover:-translate-y-1 group">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 border border-primary/30 mb-4 group-hover:scale-110 transition-transform">
                  <f.icon className="h-5 w-5 text-neon-pink" />
                </div>
                <h3 className="font-medium">{f.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* DEMO */}
      <section id="demo" className="py-24 relative">
        <div className="mx-auto max-w-7xl px-6 relative">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs mb-4">
              <Sparkles className="h-3 w-3 text-neon-pink" /> Live demo
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold">Try it now</h2>
            <p className="mt-4 text-muted-foreground">Paste any URL. Get a full audit dashboard in seconds.</p>
          </div>
          <DemoAnalyzer />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-display text-4xl sm:text-5xl font-bold">Founders who shipped fixes</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <Card key={t.name} className="glass p-6">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-neon-pink text-neon-pink" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">"{t.text}"</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-semibold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING TEASER */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-display text-4xl sm:text-5xl font-bold">Simple pricing</h2>
            <p className="mt-4 text-muted-foreground">Start free. Upgrade when you want unlimited audits.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <PricingCard
              name="Free"
              price="$0"
              tagline="For founders trying it out"
              features={["1 roast per day", "Full UX + UI score", "Top 5 improvements"]}
              cta="Start free"
            />
            <PricingCard
              name="Pro"
              price="$19"
              tagline="For teams shipping weekly"
              features={["Unlimited audits", "Export PDF reports", "Competitor analysis", "AI redesign suggestions"]}
              cta="Upgrade to Pro"
              highlight
            />
          </div>
          <div className="text-center mt-8">
            <Link to="/pricing" className="text-sm text-muted-foreground hover:text-foreground">See full pricing →</Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <Card className="glass-strong relative overflow-hidden p-12 text-center">
            <div className="relative">
              <h2 className="font-display text-5xl sm:text-6xl font-bold">
                Stop <span className="text-gradient">Losing Users.</span>
              </h2>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                Every second you wait, more visitors bounce. Get your audit now.
              </p>
              <div className="mt-8">
                <a href="#demo">
                  <Button variant="hero" size="lg" className="h-12 px-8 text-base">
                    Roast My Website <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function PricingCard({
  name, price, tagline, features, cta, highlight,
}: { name: string; price: string; tagline: string; features: string[]; cta: string; highlight?: boolean }) {
  return (
    <Card className={`relative p-8 ${highlight ? "glass-strong" : "glass"}`}>
      {highlight && <div className="glow-ring rounded-xl" />}
      <div className="relative">
        <div className="flex items-baseline justify-between">
          <h3 className="font-display text-2xl">{name}</h3>
          {highlight && <span className="text-xs px-2 py-1 rounded-full bg-primary text-white">Popular</span>}
        </div>
        <div className="mt-4 flex items-baseline gap-1">
          <span className="font-display text-5xl font-bold">{price}</span>
          <span className="text-muted-foreground text-sm">/ month</span>
        </div>
        <p className="text-sm text-muted-foreground mt-1">{tagline}</p>
        <ul className="mt-6 space-y-3">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-3 text-sm">
              <Check className="h-4 w-4 text-neon-pink" /> {f}
            </li>
          ))}
        </ul>
        <Link to="/signup" className="block mt-8">
          <Button variant={highlight ? "hero" : "glass"} className="w-full h-11">{cta}</Button>
        </Link>
      </div>
    </Card>
  );
}
