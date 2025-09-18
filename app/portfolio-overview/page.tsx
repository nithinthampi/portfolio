import MetricCard from '@/components/MetricCard';
import PageHeader from '@/components/PageHeader';

const headlineMetrics = [
  {
    label: 'Active value streams',
    value: '11',
    change: '+2',
    description: 'Annual plan anchored in customer journeys, automation, resilience, and sustainability outcomes.',
    accent: 'aurora'
  },
  {
    label: 'Plan value FY24-FY26',
    value: '$128M',
    change: '+$8M',
    description: 'Incremental impact validated by finance across revenue, efficiency, and risk levers.',
    accent: 'mint'
  },
  {
    label: 'Health index',
    value: '87 / 100',
    change: '+3',
    description: 'Composite of schedule adherence, benefit realization, and stakeholder sentiment.',
    accent: 'amber'
  },
  {
    label: 'Executive confidence',
    value: '93%',
    change: '+5pts',
    description: 'Steering committee readiness pulse from the May operating cadence.',
    accent: 'aurora'
  }
] as const;

const valueMix = [
  {
    name: 'Transform the business',
    share: 44,
    narrative: 'Flagship bets unlocking new digital revenue channels and signature experiences.'
  },
  {
    name: 'Grow the business',
    share: 35,
    narrative: 'Expansion programs focused on attach rates, adoption, and customer lifetime value.'
  },
  {
    name: 'Run the business',
    share: 21,
    narrative: 'Modernization and resilience investments protecting the core operating model.'
  }
];

const regionMaturity = [
  {
    region: 'North America',
    maturity: 'Scaled',
    coverage: 92,
    signal: 'Customer and colleague journeys fully aligned to FY24 roadmap priorities.'
  },
  {
    region: 'EMEA',
    maturity: 'Emerging',
    coverage: 68,
    signal: 'Regulatory sequencing influences timeline and requires localized change support.'
  },
  {
    region: 'APAC',
    maturity: 'Accelerating',
    coverage: 74,
    signal: 'Partner ecosystems fuelling experimentation and faster adoption rates.'
  }
];

const healthSummary = [
  {
    title: 'Portfolio guardrails',
    detail: 'Operating within financial, capacity, and risk tolerances defined for the annual plan.'
  },
  {
    title: 'Dependencies',
    detail: 'Critical path consolidated to five initiatives with joint leadership oversight.'
  },
  {
    title: 'Change readiness',
    detail: 'Enablement factory delivering assets with 4.7 / 5 satisfaction from field leaders.'
  }
];

const trajectoryHighlights = [
  {
    label: 'Financial impact',
    value: '$128M cumulative by FY26',
    detail: 'Finance-endorsed scenario factoring a 15% contingency reserve.'
  },
  {
    label: 'Customer experience',
    value: '+14 NPS uplift',
    detail: 'Personalized journeys and automation improving recovery and loyalty metrics.'
  },
  {
    label: 'Operational efficiency',
    value: '18% cost-to-serve reduction',
    detail: 'AI copilots and platform consolidation reducing manual effort enterprise-wide.'
  }
];

const healthSignals = [
  {
    label: 'Investment balance',
    description: '44% transform / 35% grow / 21% run — within AOP guardrail thresholds.'
  },
  {
    label: 'Experience KPIs',
    description: 'Service and sales journeys showing sustained uplift where AOP workstreams are live.'
  },
  {
    label: 'Capability evolution',
    description: 'Design system, AI platform, and governance foundations enabling reuse across streams.'
  }
];

export default function PortfolioOverviewPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        badge="Portfolio Overview"
        title="Portfolio health and composition"
        subtitle="Synthesis of portfolio value, geographic coverage, and guardrails for the FY24 annual operating plan."
      />

      <section>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {headlineMetrics.map((metric) => (
            <MetricCard key={metric.label} {...metric} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8">
          <h2 className="text-xl font-semibold text-white">Value mix</h2>
          <p className="mt-2 text-sm text-slate-300">Balanced distribution across horizon investments supporting the AOP outcomes.</p>
          <div className="mt-8 space-y-6">
            {valueMix.map((slice) => (
              <div key={slice.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-white">{slice.name}</p>
                  <span className="text-2xl font-semibold text-emerald-200">{slice.share}%</span>
                </div>
                <div className="mt-3 h-2 w-full rounded-full bg-white/10">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-aurora via-indigo-500 to-mint"
                    style={{ width: `${slice.share}%` }}
                  />
                </div>
                <p className="mt-4 text-sm text-slate-300">{slice.narrative}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8">
          <h2 className="text-xl font-semibold text-white">Regional maturity</h2>
          <p className="mt-2 text-sm text-slate-300">Adoption and readiness across key geographies in the annual plan.</p>
          <div className="mt-6 space-y-5">
            {regionMaturity.map((region) => (
              <div key={region.region} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-white">{region.region}</p>
                    <p className="text-xs uppercase tracking-[0.35em] text-slate-400">{region.maturity}</p>
                  </div>
                  <span className="text-xl font-semibold text-aurora">{region.coverage}% coverage</span>
                </div>
                <p className="mt-3 text-sm text-slate-300">{region.signal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr,0.8fr]">
        <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8">
          <h2 className="text-xl font-semibold text-white">Value delivery trajectory</h2>
          <p className="mt-2 text-sm text-slate-300">Rolling four-quarter outlook blending financial and experience performance.</p>
          <div className="mt-6 grid gap-4 text-sm text-slate-200">
            {trajectoryHighlights.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-xs uppercase tracking-[0.35em] text-slate-400">{item.label}</p>
                <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
                <p className="mt-2 text-slate-300">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/5 to-transparent p-8">
          <h2 className="text-xl font-semibold text-white">Health signals</h2>
          <p className="mt-2 text-sm text-slate-300">Observations curated for the steering committee readiness review.</p>
          <ul className="mt-6 space-y-4 text-sm text-slate-200">
            {healthSignals.map((item) => (
              <li key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="font-semibold text-white">{item.label}</p>
                <p className="mt-2 text-slate-300">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-slate-900/60 p-8">
        <h2 className="text-xl font-semibold text-white">Steering commentary</h2>
        <p className="mt-2 text-sm text-slate-300">Key takeaways shaping upcoming board and executive readouts.</p>
        <div className="mt-6 space-y-4 text-sm text-slate-200">
          {healthSummary.map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="font-semibold text-white">{item.title}</p>
              <p className="mt-2 text-slate-300">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
