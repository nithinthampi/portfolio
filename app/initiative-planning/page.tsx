import MetricCard from '@/components/MetricCard';
import PageHeader from '@/components/PageHeader';

const planningMetrics = [
  {
    label: 'Kickoffs this quarter',
    value: '11',
    change: '+3 vs plan',
    description: 'Front-loaded to sustain momentum and balance capacity across the AOP roadmap.',
    accent: 'aurora'
  },
  {
    label: 'Mobilization lead time',
    value: '7.5 weeks',
    change: '-1.2',
    description: 'Time from charter approval to staffed squads trending down for the third consecutive quarter.',
    accent: 'mint'
  },
  {
    label: 'Dependencies cleared',
    value: '86%',
    change: '+9pts',
    description: 'Critical upstream decisions resolved through integrated planning forums.',
    accent: 'amber'
  },
  {
    label: 'Capital ready',
    value: '$18.6M',
    change: '+$2.1M',
    description: 'Funding aligned to roadmap priorities and board-approved guardrails.',
    accent: 'aurora'
  }
] as const;

const quarterlyHorizon = [
  {
    quarter: 'Q2 FY24',
    focus: 'Launch AI-enabled service recovery and scale unified identity foundation.',
    readiness: 92,
    anchor: 'All squads staffed; change enablement ready for frontline teams.'
  },
  {
    quarter: 'Q3 FY24',
    focus: 'Expand automation pods to LATAM and pilot carbon ledger analytics.',
    readiness: 78,
    anchor: 'Pending regulatory alignment and partner enablement materials.'
  },
  {
    quarter: 'Q4 FY24',
    focus: 'Global partner marketplace and sustainability scorecard rollout.',
    readiness: 64,
    anchor: 'Sequencing dependency on data governance sign-off and run-state transitions.'
  }
];

const stageGates = [
  {
    gate: 'Opportunity framing',
    status: 'Complete',
    detail: 'Strategic narrative, KPIs, and investment thesis aligned with the steering committee.'
  },
  {
    gate: 'Solution validation',
    status: 'On track',
    detail: 'Customer labs and partner pilots confirming desirability and feasibility.'
  },
  {
    gate: 'Delivery orchestration',
    status: 'Attention',
    detail: 'Sequencing with enterprise platforms to avoid overlapping migrations.'
  }
];

const initiativeRoster = [
  {
    name: 'AI support orchestrator',
    theme: 'Digital journey reinvention',
    kickoff: 'May 6',
    readiness: 'Green',
    squad: 'CX acceleration pod',
    note: 'Finalizing automation guardrails with legal and compliance partners.'
  },
  {
    name: 'Autonomous inventory nerve center',
    theme: 'Operational autonomy',
    kickoff: 'May 20',
    readiness: 'Amber',
    squad: 'Supply chain studio',
    note: 'Awaiting vendor sandbox access across three priority markets.'
  },
  {
    name: 'Zero trust partner exchange',
    theme: 'Data trust & compliance',
    kickoff: 'June 3',
    readiness: 'Green',
    squad: 'Security guild',
    note: 'Technical architecture approved; change champions engaged.'
  }
];

const readinessStyles: Record<string, string> = {
  Green: 'bg-mint/15 text-emerald-200 border border-mint/40',
  Amber: 'bg-amber/10 text-amber/80 border border-amber/40',
  Red: 'bg-rose-500/10 text-rose-200 border border-rose-400/40'
};

export default function InitiativePlanningPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        badge="Initiative Planning"
        title="Mobilizing the next wave of strategic initiatives"
        subtitle="Runway view of launch cadence, stage-gate readiness, and squad mobilization across the AOP."
      />

      <section>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {planningMetrics.map((metric) => (
            <MetricCard key={metric.label} {...metric} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.3fr,0.7fr]">
        <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8">
          <h2 className="text-xl font-semibold text-white">Quarterly horizon</h2>
          <p className="mt-2 text-sm text-slate-300">Sequenced milestones with readiness outlook and focus narratives.</p>
          <div className="mt-6 space-y-5">
            {quarterlyHorizon.map((item) => (
              <div key={item.quarter} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-white">{item.quarter}</p>
                  <span className="text-lg font-semibold text-emerald-200">{item.readiness}% ready</span>
                </div>
                <p className="mt-3 text-sm text-slate-300">{item.focus}</p>
                <div className="mt-4 h-2 w-full rounded-full bg-white/10">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-aurora via-indigo-500 to-mint"
                    style={{ width: `${item.readiness}%` }}
                  />
                </div>
                <p className="mt-2 text-xs uppercase tracking-[0.35em] text-slate-400">{item.anchor}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8">
          <h2 className="text-xl font-semibold text-white">Stage gate pulse</h2>
          <p className="mt-2 text-sm text-slate-300">Confidence levels across the planning lifecycle.</p>
          <div className="mt-6 space-y-4">
            {stageGates.map((gate) => (
              <div key={gate.gate} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-white">{gate.gate}</p>
                  <span className="rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-[0.35em] text-slate-300">
                    {gate.status}
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-300">{gate.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-slate-900/60 p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-white">Initiative launch roster</h2>
            <p className="text-sm text-slate-300">Upcoming go-live sequencing, readiness posture, and notes for leadership.</p>
          </div>
          <span className="text-xs uppercase tracking-[0.35em] text-slate-400">Updated 4 hours ago</span>
        </div>
        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full divide-y divide-white/10 text-left text-sm text-slate-200">
            <thead className="text-xs uppercase tracking-[0.35em] text-slate-400">
              <tr>
                <th className="px-4 py-3">Initiative</th>
                <th className="px-4 py-3">Theme</th>
                <th className="px-4 py-3">Kickoff</th>
                <th className="px-4 py-3">Readiness</th>
                <th className="px-4 py-3">Squad</th>
                <th className="px-4 py-3">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {initiativeRoster.map((initiative) => (
                <tr key={initiative.name} className="transition hover:bg-white/5">
                  <td className="px-4 py-4 font-semibold text-white">{initiative.name}</td>
                  <td className="px-4 py-4 text-slate-300">{initiative.theme}</td>
                  <td className="px-4 py-4 text-slate-300">{initiative.kickoff}</td>
                  <td className="px-4 py-4">
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${readinessStyles[initiative.readiness]}`}>
                      {initiative.readiness}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-slate-300">{initiative.squad}</td>
                  <td className="px-4 py-4 text-slate-300">{initiative.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
