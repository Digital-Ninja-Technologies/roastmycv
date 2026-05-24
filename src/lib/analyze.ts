// Simulated AI CV analysis. Replace with real backend call later.
export interface CVReport {
  id: string;
  candidate: string; // inferred name or "Your CV"
  targetRole?: string;
  overall: number;
  clarity: number;
  impact: number;
  formatting: number;
  keywords: number;
  experience: number;
  worksWell: string[];
  problems: string[];
  improvements: string[];
  summaryRewrite: { before: string; after: string };
  bulletRewrite: { before: string; after: string };
  roast: string;
  createdAt: string;
}

const score = (min = 55, max = 92) => Math.floor(min + Math.random() * (max - min));

function inferName(cv: string): string {
  const firstLine = cv.split("\n").map((l) => l.trim()).find(Boolean) ?? "";
  if (firstLine && firstLine.length < 60 && /^[A-Za-z .'-]+$/.test(firstLine)) return firstLine;
  return "Your CV";
}

export function generateMockReport(cvText: string, targetRole?: string): CVReport {
  const id = (typeof crypto !== "undefined" && "randomUUID" in crypto)
    ? crypto.randomUUID()
    : Math.random().toString(36).slice(2);
  return {
    id,
    candidate: inferName(cvText),
    targetRole,
    overall: score(62, 86),
    clarity: score(55, 90),
    impact: score(45, 82),
    formatting: score(60, 92),
    keywords: score(50, 85),
    experience: score(58, 90),
    worksWell: [
      "Clear chronological structure recruiters can skim in 6 seconds",
      "Strong action verbs in the most recent role",
      "Consistent date formatting and clean typography",
    ],
    problems: [
      "Summary reads like a job description, not a value proposition",
      "Bullets describe tasks instead of measurable outcomes",
      "Missing quantified impact — no numbers, %, or $ figures",
      "Skills section is a wall of buzzwords with no proof of use",
      "CV is 3 pages — recruiters cut at page 1.5 for non-execs",
    ],
    improvements: [
      "Rewrite every bullet using the 'Action → Metric → Outcome' formula",
      "Add a 2-line summary tailored to the target role at the top",
      "Cut the CV to 1 page (2 pages max for 10+ years experience)",
      `Mirror keywords from the ${targetRole ?? "target"} job description to beat ATS filters`,
      "Move 'Education' below 'Experience' if you have 2+ years of work",
      "Replace 'Responsible for…' with active verbs: 'Led', 'Shipped', 'Grew'",
    ],
    summaryRewrite: {
      before: "Hard-working professional with experience in various roles seeking new opportunities to grow.",
      after: `${targetRole ?? "Product"}-focused operator with 5+ years shipping revenue features. Cut onboarding drop-off 38% and grew activated users from 12k → 90k in 18 months.`,
    },
    bulletRewrite: {
      before: "Responsible for managing the team and helping with various projects.",
      after: "Led a 6-person cross-functional team to ship 4 product launches, generating $1.2M ARR in the first 6 months.",
    },
    roast: "Your CV reads like a LinkedIn 'About' section written at 2am. It tells me what you did but not why anyone should care. Recruiters spend 6 seconds — give them a reason to keep reading.",
    createdAt: new Date().toISOString(),
  };
}

export async function analyzeCV(cvText: string, targetRole?: string): Promise<CVReport> {
  await new Promise((r) => setTimeout(r, 1800));
  return generateMockReport(cvText, targetRole);
}

const STORAGE_KEY = "roastmycv:reports";

export function saveReport(report: CVReport) {
  if (typeof window === "undefined") return;
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    const map: Record<string, CVReport> = raw ? JSON.parse(raw) : {};
    map[report.id] = report;
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(map));
  } catch {
    /* ignore */
  }
}

export function loadReport(id: string): CVReport | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const map: Record<string, CVReport> = JSON.parse(raw);
    return map[id] ?? null;
  } catch {
    return null;
  }
}
