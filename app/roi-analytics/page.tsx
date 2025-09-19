import MetricCard from '@/components/MetricCard';
import PageHeader from '@/components/PageHeader';

const roiMetrics = [
  {
    label: 'Portfolio ROI',
    value: '162%',
    change: '+18pts',
    description: 'Risk-adjusted ROI inclusive of contingency buffers and realized run-rate efficiencies.',
    accent: 'aurora'
  },
  {
    label: 'Payback period',
    value: '18 months',
    change: '-3',
    description: 'Improved through accelerated benefit harvesting and staged investments.',
    accent: 'mint'
  },
  {
    label: 'Realized benefit YTD',
    value: '$24.6M',
    change: '+$5.2M',
    description: 'Validated by finance partners and tracked through enterprise ledger.',
    accent: 'amber'
  },
  {
    label: 'Efficiency uplift',
    value: '19%',
    change: '+4pts',
    description: 'Operational cost reduction through automation, platform consolidation, and AI copilots.',
    accent: 'aurora'
  }
] as const;

const valueStreams = [
  {
    name: 'Revenue acceleration',
    contribution: 47,
    description: 'Personalized digital journeys, partner marketplace, and cross-sell intelligence.',
    trend: '+9% vs plan'
  },
  {
    name: 'Cost efficiency',
    contribution: 33,
    description: 'Automation of fulfillment, AI operations, and legacy system retirements.',
    trend: '+5% vs plan'
  },
  {
    name: 'Risk reduction',
    contribution: 20,
    description: 'Data governance, regulatory compliance, and resilience initiatives.',
    trend: '+2% vs plan'
  }
];

const scenarioAnalysis = [
  {
    name: 'Base plan',
    roi: '162%',
    drivers: 'Benefits realized per roadmap, contingency at 12%.',
    notes: 'Aligned to approved FY24 investment envelope.'
  },
  {
    name: 'Upside',
    roi: '189%',
    drivers: 'Accelerated partner monetization and reduced attrition in key markets.',
    notes: 'Requires incremental $3M GTM investment and automation fast-track.'
  },
  {
    name: 'Downside',
    roi: '128%',
    drivers: 'Delayed regulatory approval pushes carbon ledger rollout by two quarters.',
    notes: 'Mitigation through phased deployment and targeted stakeholder engagement.'
  }
];

const leadingIndicators = [
  {
    title: 'Subscription revenue uplift',
    detail: 'Pilot markets show +14% ARPU with digital marketplace activated.'
  },
  {
    title: 'Automation-driven savings',
    detail: 'Supply chain bots eliminated 36K manual hours, reinvested into innovation pods.'
  },
  {
    title: 'Experience differentiation',
    detail: 'NPS uplift of +8 with AI support orchestrator reducing time-to-resolution.'
  }
];

const governanceNotes = [
  {
    label: 'Benefit certification',
    detail: 'Finance partners validate realized savings quarterly with supporting evidence packs.'
  },
  {
    label: 'Capital deployment',
    detail: 'Stage-gated funding draws aligned to initiative health and scenario triggers.'
  },
  {
    label: 'Performance cadence',
    detail: 'Monthly ROI councils reviewing forecasts, risks, and reinvestment options.'
  }
];

export default function RoiAnalyticsPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        badge="ROI Analytics"
        title="Quantifying the value trajectory of the transformation portfolio"
        subtitle="Executive-ready analytics detailing realized benefits, forecast scenarios, and leading indicators."
      />

      <section>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {roiMetrics.map((metric) => (
            <MetricCard key={metric.label} {...metric} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr,0.8fr]">
        <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8">
          <h2 className="text-xl font-semibold text-white">Value contribution mix</h2>
          <p className="mt-2 text-sm text-slate-300">Illustrates how value streams ladder into the overall ROI story.</p>
          <div className="mt-6 space-y-5">
            {valueStreams.map((stream) => (
              <div key={stream.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-white">{stream.name}</p>
                  <span className="text-lg font-semibold text-emerald-200">{stream.contribution}%</span>
                </div>
                <div className="mt-3 h-2 w-full rounded-full bg-white/10">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-aurora via-indigo-500 to-mint"
                    style={{ width: `${stream.contribution}%` }}
                  />
                </div>
                <p className="mt-3 text-sm text-slate-300">{stream.description}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.35em] text-slate-400">{stream.trend}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8">
          <h2 className="text-xl font-semibold text-white">Scenario lens</h2>
          <p className="mt-2 text-sm text-slate-300">Comparative ROI outlook to guide capital planning conversations.</p>
          <ul className="mt-6 space-y-4 text-sm text-slate-200">
            {scenarioAnalysis.map((scenario) => (
              <li key={scenario.name} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="font-semibold text-white">{scenario.name}</p>
                  <span className="rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-[0.35em] text-slate-300">
                    {scenario.roi}
                  </span>
                </div>
                <p className="mt-2 text-slate-300">{scenario.drivers}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.35em] text-slate-400">{scenario.notes}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.9fr,1.1fr]">
        <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8">
          <h2 className="text-xl font-semibold text-white">Leading indicators</h2>
          <p className="mt-2 text-sm text-slate-300">Signals that value is materializing ahead of full financial capture.</p>
          <ul className="mt-6 space-y-4 text-sm text-slate-200">
            {leadingIndicators.map((item) => (
              <li key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="font-semibold text-white">{item.title}</p>
                <p className="mt-2 text-slate-300">{item.detail}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/5 to-transparent p-8">
          <h2 className="text-xl font-semibold text-white">Financial governance notes</h2>
          <p className="mt-2 text-sm text-slate-300">Controls and practices sustaining a disciplined investment thesis.</p>
          <div className="mt-6 space-y-4">
            {governanceNotes.map((item) => (
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
