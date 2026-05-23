// Simulated AI website analysis. Replace with real backend call later.
export interface AuditReport {
  url: string;
  overall: number;
  ux: number;
  ui: number;
  conversion: number;
  trust: number;
  mobile: number;
  worksWell: string[];
  problems: string[];
  improvements: string[];
  ctaRewrite: { before: string; after: string };
  heroRewrite: { before: string; after: string };
  createdAt: string;
}

const score = (min = 55, max = 92) => Math.floor(min + Math.random() * (max - min));

export function generateMockReport(url: string): AuditReport {
  return {
    url,
    overall: score(62, 84),
    ux: score(55, 88),
    ui: score(60, 92),
    conversion: score(45, 80),
    trust: score(58, 90),
    mobile: score(60, 95),
    worksWell: [
      "Clean above-the-fold hierarchy with a single primary CTA",
      "Fast initial load (< 1.5s LCP on tested viewport)",
      "Consistent brand palette and typography",
    ],
    problems: [
      "Hero copy is feature-focused, not outcome-focused — users bounce in 5s",
      "Primary CTA blends into the background (low contrast)",
      "No social proof above the fold",
      "Mobile nav hides key destinations behind two taps",
      "Pricing page lacks a comparison table",
    ],
    improvements: [
      "Rewrite hero to lead with the customer's pain, then the outcome",
      "Add 3 trust logos directly below the headline",
      "Move pricing CTA above the fold on mobile",
      "Increase tap targets to 44px minimum",
      "Add an FAQ section to handle objections",
    ],
    ctaRewrite: {
      before: "Get Started",
      after: "Audit My Site in 30 Seconds — Free",
    },
    heroRewrite: {
      before: "The all-in-one platform for modern teams.",
      after: "Stop losing 70% of visitors in the first 5 seconds. Get a free AI audit and a prioritized fix-list today.",
    },
    createdAt: new Date().toISOString(),
  };
}

export async function analyzeWebsite(url: string): Promise<AuditReport> {
  await new Promise((r) => setTimeout(r, 1800));
  return generateMockReport(url);
}
