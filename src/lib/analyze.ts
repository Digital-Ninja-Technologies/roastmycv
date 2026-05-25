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
  atsKeywords: {
    matchScore: number;
    present: string[];
    missing: string[];
    recommended: string[];
  };
  skillsSection: {
    coreCompetencies: string[];
    technical: string[];
    tools: string[];
    soft: string[];
  };
  createdAt: string;
}

const score = (min = 55, max = 92) => Math.floor(min + Math.random() * (max - min));

function inferName(cv: string): string {
  const firstLine = cv.split("\n").map((l) => l.trim()).find(Boolean) ?? "";
  if (firstLine && firstLine.length < 60 && /^[A-Za-z .'-]+$/.test(firstLine)) return firstLine;
  return "Your CV";
}

// Role-tailored keyword library (lightweight, no backend). Falls back to a
// generic professional set when the target role doesn't match a known family.
const ROLE_LIBRARY: Record<string, {
  core: string[];
  technical: string[];
  tools: string[];
  soft: string[];
}> = {
  product: {
    core: ["Product Strategy", "Roadmapping", "Discovery", "Prioritization", "Go-to-Market", "OKRs", "Stakeholder Management", "A/B Testing"],
    technical: ["SQL", "Analytics", "Experimentation", "User Research", "API Design", "Agile / Scrum"],
    tools: ["Jira", "Linear", "Figma", "Amplitude", "Mixpanel", "Looker", "Notion"],
    soft: ["Cross-functional Leadership", "Executive Communication", "Customer Empathy", "Decision-making"],
  },
  engineer: {
    core: ["System Design", "API Development", "Microservices", "CI/CD", "Code Review", "Performance Optimization", "Scalability", "Testing"],
    technical: ["TypeScript", "Node.js", "React", "Python", "PostgreSQL", "AWS", "Docker", "Kubernetes", "REST", "GraphQL"],
    tools: ["Git", "GitHub Actions", "Datadog", "Sentry", "Terraform", "Jest"],
    soft: ["Technical Leadership", "Mentorship", "Collaboration", "Problem-solving"],
  },
  designer: {
    core: ["Design Systems", "User Research", "Prototyping", "Information Architecture", "Interaction Design", "Visual Design", "Accessibility (WCAG)"],
    technical: ["Wireframing", "Usability Testing", "Heuristic Evaluation", "Design Tokens"],
    tools: ["Figma", "Sketch", "Framer", "Adobe Creative Suite", "Maze", "Notion"],
    soft: ["Cross-functional Collaboration", "Storytelling", "Stakeholder Alignment"],
  },
  marketing: {
    core: ["Growth Marketing", "Lifecycle", "SEO", "SEM", "Content Strategy", "Brand Positioning", "Funnel Optimization", "Attribution"],
    technical: ["A/B Testing", "Segmentation", "Email Automation", "Analytics"],
    tools: ["HubSpot", "Marketo", "Google Analytics", "Mixpanel", "Webflow", "Ahrefs"],
    soft: ["Storytelling", "Cross-functional Collaboration", "Data-driven Decisions"],
  },
  data: {
    core: ["Data Modeling", "ETL / ELT", "Experimentation", "Statistical Analysis", "Forecasting", "Dashboarding"],
    technical: ["SQL", "Python", "Pandas", "dbt", "Airflow", "Spark", "BigQuery", "Snowflake"],
    tools: ["Looker", "Tableau", "Mode", "Hex", "Git"],
    soft: ["Storytelling with Data", "Stakeholder Communication", "Rigor"],
  },
  sales: {
    core: ["Pipeline Management", "Prospecting", "Discovery", "Negotiation", "Closing", "Account Planning", "Quota Attainment"],
    technical: ["MEDDIC", "SPIN", "Forecasting", "Territory Planning"],
    tools: ["Salesforce", "HubSpot", "Outreach", "Gong", "LinkedIn Sales Navigator"],
    soft: ["Active Listening", "Executive Presence", "Resilience"],
  },
  generic: {
    core: ["Project Management", "Strategic Planning", "Stakeholder Management", "Process Improvement", "Cross-functional Collaboration"],
    technical: ["Data Analysis", "Reporting", "Budgeting", "Forecasting"],
    tools: ["Excel", "Google Workspace", "Notion", "Slack", "Jira"],
    soft: ["Communication", "Leadership", "Adaptability", "Problem-solving"],
  },
};

function roleFamily(role?: string): keyof typeof ROLE_LIBRARY {
  const r = (role ?? "").toLowerCase();
  if (!r) return "generic";
  if (/(product manager|product owner|\bpm\b|product)/.test(r)) return "product";
  if (/(engineer|developer|software|swe|backend|frontend|full[- ]?stack|devops|sre)/.test(r)) return "engineer";
  if (/(design|ux|ui|product designer)/.test(r)) return "designer";
  if (/(market|growth|seo|content|brand|lifecycle)/.test(r)) return "marketing";
  if (/(data|analytics|analyst|scientist|ml|machine learning)/.test(r)) return "data";
  if (/(sales|account executive|\bae\b|bdr|sdr|account manager)/.test(r)) return "sales";
  return "generic";
}

function buildAts(cvText: string, role?: string) {
  const lib = ROLE_LIBRARY[roleFamily(role)];
  const haystack = cvText.toLowerCase();
  const all = [...lib.core, ...lib.technical, ...lib.tools];
  const present: string[] = [];
  const missing: string[] = [];
  for (const kw of all) {
    if (haystack.includes(kw.toLowerCase())) present.push(kw);
    else missing.push(kw);
  }
  const matchScore = Math.round((present.length / Math.max(all.length, 1)) * 100);
  // Recommended = top missing, prioritising core then technical then tools
  const prioritised = [
    ...lib.core.filter((k) => missing.includes(k)),
    ...lib.technical.filter((k) => missing.includes(k)),
    ...lib.tools.filter((k) => missing.includes(k)),
  ];
  return {
    matchScore,
    present: present.slice(0, 12),
    missing: missing.slice(0, 12),
    recommended: prioritised.slice(0, 8),
  };
}

function buildSkillsSection(role?: string) {
  const lib = ROLE_LIBRARY[roleFamily(role)];
  return {
    coreCompetencies: lib.core.slice(0, 8),
    technical: lib.technical.slice(0, 8),
    tools: lib.tools.slice(0, 8),
    soft: lib.soft.slice(0, 6),
  };
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
    atsKeywords: buildAts(cvText, targetRole),
    skillsSection: buildSkillsSection(targetRole),
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
