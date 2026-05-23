interface Props {
  value: number;
  label: string;
  size?: number;
}

export function ScoreRing({ value, label, size = 120 }: Props) {
  const stroke = 8;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (value / 100) * c;
  const color = value >= 80 ? "oklch(0.78 0.2 160)" : value >= 60 ? "oklch(0.78 0.22 80)" : "oklch(0.7 0.25 25)";

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <defs>
            <linearGradient id={`grad-${label}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="oklch(0.7 0.28 300)" />
              <stop offset="100%" stopColor="oklch(0.72 0.26 350)" />
            </linearGradient>
          </defs>
          <circle cx={size / 2} cy={size / 2} r={r} stroke="oklch(1 0 0 / 0.08)" strokeWidth={stroke} fill="none" />
          <circle
            cx={size / 2} cy={size / 2} r={r}
            stroke={value >= 70 ? `url(#grad-${label})` : color}
            strokeWidth={stroke} fill="none"
            strokeDasharray={c} strokeDashoffset={offset}
            strokeLinecap="round"
            style={{ transition: "stroke-dashoffset 1.2s ease-out" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-display text-2xl font-bold">{value}</span>
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground">/ 100</span>
        </div>
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}
