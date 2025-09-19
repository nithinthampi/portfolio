import MetricCard from '@/components/MetricCard';
import PageHeader from '@/components/PageHeader';

const planPulse = [
  {
    label: 'Plan Health Score',
    value: '92',
    change: '+4',
    description: 'Composite readiness index spanning scope, schedule, benefits, and change adoption.',
    accent: 'aurora'
  },
  {
    label: 'Value Realized YTD',
    value: '$48.7M',
    change: '+$6.4M',
    description: 'Benefits validated with finance across revenue acceleration and efficiency levers.',
    accent: 'mint'
  },
  {
    label: 'Budget Burn',
    value: '41%',
    change: '-3%',
    description: 'Disciplined spend pace preserves capacity for upside plays and contingency.',
    accent: 'amber',
    positive: false
  },
  {
    label: 'Confidence Index',
    value: '8.9 / 10',
    change: '+0.4',
    description: 'Executive sentiment from the May steering committee cadence.',
    accent: 'aurora'
  }
] as const;

const executionScorecard = [
  {
    stage: 'Discover',
    description: 'Opportunity framing and hypothesis validation across priority journeys.',
    progress: 78,
    owners: 'Portfolio design studio'
  },
  {
    stage: 'Validate',
    description: 'Pilot experiments with lighthouse markets to prove feasibility and desirability.',
    progress: 64,
    owners: 'Product + data guild'
  },
  {
    stage: 'Launch',
    description: 'Coordinated activation with change enablement, GTM, and partner teams.',
    progress: 52,
    owners: 'Transformation PMO'
  },
  {
    stage: 'Scale',
    description: 'Global rollout and automation guardrails across enterprise platforms.',
    progress: 36,
    owners: 'Run-state transition office'
  }
];

const strategicAlerts = [
  {
    name: 'Customer 360 rollout',
    status: 'Watch',
    impact: 'High',
    next: 'Resolve data residency commitments before EMEA launch.'
  },
  {
    name: 'Automation pod expansion',
    status: 'Accelerating',
    impact: 'Medium',
    next: 'Stand up LATAM fulfillment squad by June 10.'
  },
  {
    name: 'Sustainability ledger',
    status: 'Stable',
    impact: 'High',
    next: 'Hand over to run-state operations after July close.'
  }
];

const decisionCalendar = [
  {
    title: 'Approve partner marketplace incentives',
    description: 'Align GTM funding to capture Q3 upside scenario.',
    due: 'Decision by May 24',
    owner: 'CFO + Growth office'
  },
  {
    title: 'Data governance sign-off',
    description: 'Ratify privacy framework enabling the unified identity platform.',
    due: 'Review May 29',
    owner: 'Risk council'
  }
];

const workstreamMomentum = [
  { workstream: 'Digital journey reinvention', velocity: 93, trend: '+6%' },
  { workstream: 'Operational autonomy', velocity: 88, trend: '+4%' },
  { workstream: 'Data trust & compliance', velocity: 72, trend: '+2%' },
  { workstream: 'Sustainable enterprise', velocity: 68, trend: '+3%' }
];

const operatingRhythm = [
  {
    title: 'North America experience upgrade live',
    detail: 'Unified support workspace rolled out to 28K agents with +12 CSAT uplift.'
  },
  {
    title: 'Automation guardrails in production',
    detail: 'Federated AI controls now cover 82% of high-risk workflows with observability.'
  },
  {
    title: 'Focus item: LATAM onboarding',
    detail: 'Need additional change champions ahead of marketplace preview in June.'
  }
];

const statusStyles: Record<string, string> = {
  Accelerating: 'bg-mint/15 text-emerald-200 border border-mint/40',
  Watch: 'bg-amber/10 text-amber/80 border border-amber/40',
  Stable: 'bg-aurora/10 text-aurora border border-aurora/30'
};

export default function HomePage() {
  return (
    <div className="space-y-12">
      <PageHeader
        badge="FY24 Plan Pulse"
        title="AOP Portfolio Command Center"
        subtitle="Unified visibility into plan health, value realization, and risk posture for the annual operating plan."
      />

      <section>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {planPulse.map((metric) => (
            <MetricCard key={metric.label} {...metric} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[2fr,1fr]">
        <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-white">Execution Scorecard</h2>
              <p className="text-sm text-slate-300">Stage progression of initiatives flowing through the annual operating plan.</p>
            </div>
            <span className="rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-[0.35em] text-slate-300">
              Synced 8 minutes ago
            </span>
          </div>
          <div className="mt-8 space-y-6">
            {executionScorecard.map((stage) => (
              <div key={stage.stage} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-white">{stage.stage}</p>
                    <p className="text-sm text-slate-300">{stage.description}</p>
                  </div>
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-400">{stage.owners}</p>
                </div>
                <div className="mt-4 h-2 w-full rounded-full bg-white/10">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-aurora via-indigo-400 to-mint"
                    style={{ width: `${stage.progress}%` }}
                  />
                </div>
                <div className="mt-2 text-xs text-slate-400">{stage.progress}% of FY24 portfolio throughput</div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8">
            <h3 className="text-lg font-semibold text-white">Strategic Alerts</h3>
            <p className="mt-2 text-sm text-slate-300">Signals for leadership attention in the upcoming operating cadence.</p>
            <ul className="mt-6 space-y-5">
              {strategicAlerts.map((signal) => (
                <li key={signal.name} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-sm font-semibold text-white">{signal.name}</p>
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[signal.status]}`}>
                      {signal.status}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-slate-300">{signal.next}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.35em] text-slate-400">Impact: {signal.impact}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8">
            <h3 className="text-lg font-semibold text-white">Decision Calendar</h3>
            <p className="mt-2 text-sm text-slate-300">Upcoming approvals and checkpoints requiring leadership alignment.</p>
            <ul className="mt-6 space-y-4 text-sm text-slate-200">
              {decisionCalendar.map((item) => (
                <li key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="font-semibold text-white">{item.title}</p>
                  <p className="mt-2 text-slate-300">{item.description}</p>
                  <div className="mt-4 flex flex-wrap gap-3 text-xs uppercase tracking-[0.35em] text-slate-400">
                    <span className="rounded-full border border-white/15 px-3 py-1">{item.due}</span>
                    <span className="rounded-full border border-white/15 px-3 py-1">Owner: {item.owner}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">Workstream Momentum</h3>
            <span className="text-xs uppercase tracking-[0.35em] text-slate-400">12-week trend</span>
          </div>
          <div className="mt-6 grid gap-4">
            {workstreamMomentum.map((item) => (
              <div key={item.workstream} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-white">{item.workstream}</p>
                  <span className={`text-xs font-semibold ${item.trend.startsWith('-') ? 'text-rose-200' : 'text-emerald-200'}`}>
                    {item.trend}
                  </span>
                </div>
                <div className="mt-3 h-2 w-full rounded-full bg-white/10">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-mint via-aurora to-indigo-500"
                    style={{ width: `${item.velocity}%` }}
                  />
                </div>
                <p className="mt-2 text-xs uppercase tracking-[0.35em] text-slate-400">Momentum index {item.velocity}/100</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/10 to-transparent p-8">
          <h3 className="text-lg font-semibold text-white">Operating Rhythm</h3>
          <p className="mt-2 text-sm text-slate-300">Highlights and watchpoints curated for the steering committee brief.</p>
          <div className="mt-6 space-y-5 text-sm text-slate-200">
            {operatingRhythm.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="font-semibold text-white">{item.title}</p>
                <p className="mt-2 text-slate-300">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
