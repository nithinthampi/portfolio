import MetricCard from '@/components/MetricCard';
import PageHeader from '@/components/PageHeader';

const resourceMetrics = [
  {
    label: 'Total capacity',
    value: '412 FTE',
    change: '+28',
    description: 'Blended workforce across product, engineering, design, data, and change disciplines.',
    accent: 'aurora'
  },
  {
    label: 'Allocation balance',
    value: '68% build / 32% run',
    change: '+4%',
    description: 'Intentional shift toward build capacity to accelerate growth bets.',
    accent: 'mint'
  },
  {
    label: 'Contingent workforce mix',
    value: '14%',
    change: '-2%',
    description: 'Optimized vendor footprint with knowledge transition to internal squads.',
    accent: 'amber',
    positive: false
  },
  {
    label: 'Critical skill coverage',
    value: '91%',
    change: '+6pts',
    description: 'AI, platform engineering, and service design roles staffed across priority initiatives.',
    accent: 'aurora'
  }
] as const;

const capabilityAllocation = [
  {
    capability: 'Product & experience',
    allocation: 32,
    demand: 30,
    narrative: 'Design system leverage enables expansion without net new headcount.'
  },
  {
    capability: 'Engineering & platforms',
    allocation: 41,
    demand: 44,
    narrative: 'Targeted hiring and automation required to close modernization gap.'
  },
  {
    capability: 'Data & AI',
    allocation: 18,
    demand: 16,
    narrative: 'Centralized enablement pod sharing best practices across initiatives.'
  },
  {
    capability: 'Change & enablement',
    allocation: 9,
    demand: 10,
    narrative: 'Surge capacity planned for Q3 to support partner marketplace launch.'
  }
];

const regionalUtilization = [
  { region: 'North America', utilization: 81, variance: '-3pts vs target' },
  { region: 'EMEA', utilization: 76, variance: '+4pts vs target' },
  { region: 'APAC', utilization: 72, variance: '+6pts vs target' }
];

const staffingMoves = [
  {
    title: 'AI platform guild rotation',
    detail: 'Rotating principal engineers into sustainability analytics pods for Q2 experimentation.'
  },
  {
    title: 'Experience design fellowship',
    detail: '12-week program retooling designers on AI co-creation and accessibility frameworks.'
  },
  {
    title: 'Global enablement surge team',
    detail: 'Standing team mobilized to develop playbooks for partner marketplace rollout.'
  }
];

const cadenceFocus = [
  {
    label: 'Platform engineering capacity',
    detail: 'Finalize hiring slate and accelerate onboarding of automation engineers.'
  },
  {
    label: 'Enablement surge planning',
    detail: 'Pre-build assets for partner marketplace launch with local change champions.'
  },
  {
    label: 'Capability resilience',
    detail: 'Expand succession planning and cross-training for high-demand AI roles.'
  }
];

export default function ResourceAllocationPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        badge="Resource Allocation"
        title="Deploying talent against the highest-impact bets"
        subtitle="See how capacity, skills, and regional coverage are orchestrated to deliver the annual operating plan."
      />

      <section>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {resourceMetrics.map((metric) => (
            <MetricCard key={metric.label} {...metric} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr,0.8fr]">
        <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8">
          <h2 className="text-xl font-semibold text-white">Capability allocation vs demand</h2>
          <p className="mt-2 text-sm text-slate-300">Comparing committed squads against roadmap demand signals.</p>
          <div className="mt-6 space-y-5">
            {capabilityAllocation.map((item) => (
              <div key={item.capability} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-white">{item.capability}</p>
                  <span className="text-xs uppercase tracking-[0.35em] text-slate-400">Demand {item.demand}%</span>
                </div>
                <div className="mt-3 h-2 w-full rounded-full bg-white/10">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-aurora via-indigo-500 to-mint"
                    style={{ width: `${item.allocation}%` }}
                  />
                </div>
                <p className="mt-2 text-xs uppercase tracking-[0.35em] text-slate-400">Allocation {item.allocation}%</p>
                <p className="mt-3 text-sm text-slate-300">{item.narrative}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8">
          <h2 className="text-xl font-semibold text-white">Regional utilization</h2>
          <p className="mt-2 text-sm text-slate-300">Workforce engagement compared with target guardrails.</p>
          <div className="mt-6 space-y-4">
            {regionalUtilization.map((region) => (
              <div key={region.region} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-white">{region.region}</p>
                  <span className="text-lg font-semibold text-emerald-200">{region.utilization}%</span>
                </div>
                <div className="mt-3 h-2 w-full rounded-full bg-white/10">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-mint via-aurora to-indigo-500"
                    style={{ width: `${region.utilization}%` }}
                  />
                </div>
                <p className="mt-2 text-xs uppercase tracking-[0.35em] text-slate-400">{region.variance}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.9fr,1.1fr]">
        <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8">
          <h2 className="text-xl font-semibold text-white">Staffing moves & development</h2>
          <p className="mt-2 text-sm text-slate-300">Investments designed to sharpen capabilities and maintain engagement.</p>
          <ul className="mt-6 space-y-4 text-sm text-slate-200">
            {staffingMoves.map((item) => (
              <li key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="font-semibold text-white">{item.title}</p>
                <p className="mt-2 text-slate-300">{item.detail}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/5 to-transparent p-8">
          <h2 className="text-xl font-semibold text-white">Focus for next cadence</h2>
          <p className="mt-2 text-sm text-slate-300">Actions to maintain health and close remaining allocation gaps.</p>
          <div className="mt-6 space-y-4">
            {cadenceFocus.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-semibold text-white">{item.label}</p>
                <p className="mt-2 text-sm text-slate-300">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
