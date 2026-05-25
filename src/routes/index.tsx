import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { HeroMockup } from "@/components/site/HeroMockup";
import { DemoAnalyzer } from "@/components/site/DemoAnalyzer";
import {
  ArrowRight, FileSearch, Target, Type, Layout, Sparkles,
  FileText, Brain, ListChecks, Star, Check, ShieldCheck, Briefcase,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RoastMyCV AI — AI-powered CV roasts that land interviews" },
      { name: "description", content: "Paste your CV and get an instant AI roast with brutally honest feedback, rewrites, and prioritized tips that get you interviews." },
    ],
  }),
  component: Landing,
});

const features = [
  { icon: FileSearch, title: "Clarity Audit", desc: "Spot vague language, jargon, and filler in seconds." },
  { icon: Target, title: "Impact Scoring", desc: "Measure outcomes vs. tasks — recruiters care about results." },
  { icon: Type, title: "Bullet Rewrites", desc: "Get every bullet rewritten as Action → Metric → Outcome." },
  { icon: Layout, title: "Formatting Review", desc: "Length, hierarchy, dates, and scan-ability checks." },
  { icon: ShieldCheck, title: "ATS Keyword Match", desc: "See if your CV beats applicant tracking systems." },
  { icon: Briefcase, title: "Role Tailoring", desc: "Tune your CV to a specific target job in one click." },
  { icon: Sparkles, title: "AI Summary Rewrite", desc: "A 2-line summary that hooks a recruiter in 6 seconds." },
  { icon: ListChecks, title: "Prioritized Fix List", desc: "What to fix first, second, third — no vague advice." },
];

const steps = [
  { icon: FileText, title: "Paste your CV", desc: "Drop in the full text of your CV — or upload a .txt file." },
  { icon: Brain, title: "AI roasts it", desc: "We score clarity, impact, formatting, keywords and experience." },
  { icon: ListChecks, title: "Get the fix list", desc: "Brutally honest feedback and rewritten bullets you can paste back in." },
];

const testimonials = [
  { name: "Maya Chen", role: "Landed PM role at Linear", text: "Three rewrites and I had 4 interviews the next week. Brutally honest in the best way." },
  { name: "Jordan Patel", role: "Senior Engineer, Stripe", text: "I'd been getting ghosted for months. The keyword match score alone fixed it." },
  { name: "Sofia Ruiz", role: "Designer, Figma", text: "It told me my CV read like a job description. It was right. Rewrote it that night." },
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
              AI-powered • Trusted by 25k+ job seekers
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              Your CV <br />
              <span className="text-gradient">Gets Ghosted</span> in 6 Seconds.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Get an instant AI roast of your CV — with brutally honest feedback, rewritten bullets, and a prioritized fix list that gets you interviews.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#demo">
                <Button variant="hero" size="lg" className="h-12 px-6 text-base">
                  Roast My CV <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
              <a href="#demo">
                <Button variant="glass" size="lg" className="h-12 px-6 text-base">See sample roast</Button>
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-xs text-muted-foreground">
              <span>No credit card</span>
              <span>•</span>
              <span>30-second results</span>
              <span>•</span>
              <span>Stays in your browser</span>
            </div>
          </div>
          <HeroMockup />
        </div>
      </section>

      {/* TRUST */}
      <section className="py-12 border-y border-border/50">
        <div className="mx-auto max-w-5xl px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { v: "25k+", l: "CVs roasted" },
            { v: "3.4x", l: "more interview callbacks" },
            { v: "4.9 / 5", l: "candidate rating" },
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
            <p className="mt-4 text-muted-foreground">From paste to interview-ready in under a minute.</p>
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
            <h2 className="font-display text-4xl sm:text-5xl font-bold">Everything you need to <span className="text-gradient">get hired</span></h2>
            <p className="mt-4 text-muted-foreground">One roast. Eight expert lenses. Zero fluff.</p>
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
              <Sparkles className="h-3 w-3 text-neon-pink" /> Live roast
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold">Try it now</h2>
            <p className="mt-4 text-muted-foreground">Paste your CV. Get your full roast on the next page.</p>
          </div>
          <DemoAnalyzer />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-display text-4xl sm:text-5xl font-bold">Job seekers who landed offers</h2>
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
            <p className="mt-4 text-muted-foreground">Start free. Upgrade for unlimited roasts and PDF exports.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <PricingCard
              name="Free"
              price="$0"
              tagline="For job seekers trying it out"
              features={["1 roast per day", "Full CV scorecard", "Top 5 improvements"]}
              cta="Start free"
            />
            <PricingCard
              name="Pro"
              price="$20"
              tagline="For active job hunters"
              features={["Unlimited roasts", "Tailor to any job description", "Export PDF reports", "Cover letter rewrites"]}
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
                Stop <span className="text-gradient">Getting Ghosted.</span>
              </h2>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                Every week you wait, more interviews go to someone else. Roast your CV now.
              </p>
              <div className="mt-8">
                <a href="#demo">
                  <Button variant="hero" size="lg" className="h-12 px-8 text-base">
                    Roast My CV <ArrowRight className="h-4 w-4" />
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
