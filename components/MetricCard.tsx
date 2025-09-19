interface MetricCardProps {
  label: string;
  value: string;
  change?: string;
  positive?: boolean;
  description?: string;
  accent?: 'aurora' | 'mint' | 'amber';
}

const accentMap: Record<NonNullable<MetricCardProps['accent']>, string> = {
  aurora: 'from-aurora/60 via-aurora/40 to-indigo-500/30',
  mint: 'from-mint/70 via-emerald-500/40 to-sky-400/30',
  amber: 'from-amber/70 via-orange-500/40 to-rose-400/30'
};

export default function MetricCard({ label, value, change, positive = true, description, accent = 'aurora' }: MetricCardProps) {
  const accentStyles = accentMap[accent];

  return (
    <div className="card-sheen rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-lg shadow-black/25 backdrop-blur">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.3em] text-slate-400">{label}</p>
          <p className="mt-3 text-3xl font-semibold text-white">{value}</p>
        </div>
        <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${accentStyles}`}>
          {change ? (
            <span className={`text-sm font-semibold ${positive ? 'text-emerald-200' : 'text-rose-200'}`}>{change}</span>
          ) : (
            <span className="text-sm font-semibold text-slate-200">--</span>
          )}
        </div>
      </div>
      {description && <p className="mt-4 text-sm leading-relaxed text-slate-300">{description}</p>}
    </div>
  );
}
