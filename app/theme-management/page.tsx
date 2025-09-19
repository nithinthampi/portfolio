import MetricCard from '@/components/MetricCard';
import PageHeader from '@/components/PageHeader';

const themeMetrics = [
  {
    label: 'Strategic themes in flight',
    value: '6',
    change: '+1',
    description: 'Customer, automation, resilience, and sustainability pillars advancing across the plan.',
    accent: 'aurora'
  },
  {
    label: 'Alignment score',
    value: '96%',
    change: '+2pts',
    description: 'Every initiative mapped to FY24 strategic imperatives and OKRs.',
    accent: 'mint'
  },
  {
    label: 'Experiment cadence',
    value: '18 experiments',
    change: '+4',
    description: 'Validated learning cycles completed per quarter across theme sandboxes.',
    accent: 'amber'
  },
  {
    label: 'Customer reach',
    value: '12.6M users',
    change: '+11%',
    description: 'Touchpoints influenced by theme-led experiences and capability launches.',
    accent: 'aurora'
  }
] as const;

const focusThemes = [
  {
    name: 'Digital journey reinvention',
    owner: 'Chief Customer Office',
    objective: 'Deliver adaptive personalization and seamless service orchestration across channels.',
    confidence: 92,
    sentiment: 'Strong champion energy with all regions aligned on roadmap commitments.'
  },
  {
    name: 'Operational autonomy',
    owner: 'COO Transformation Office',
    objective: 'Automate fulfillment, elevate human work, and embed AI copilots into operations.',
    confidence: 88,
    sentiment: 'Automation backlog prioritized; co-creation squads staffed and mobilized.'
  },
  {
    name: 'Data trust & compliance',
    owner: 'Chief Risk Office',
    objective: 'Institutionalize privacy, lineage, and responsible AI guardrails enterprise-wide.',
    confidence: 74,
    sentiment: 'Regulatory reviews drive focus; targeted enablement underway for high-risk markets.'
  }
];

const experimentBacklog = [
  {
    title: 'Service recovery prediction',
    theme: 'Digital journey reinvention',
    hypothesis: 'Proactive outreach reduces churn by 5% in priority markets.',
    stage: 'Pilot',
    duration: '6 weeks'
  },
  {
    title: 'Autonomous replenishment bot',
    theme: 'Operational autonomy',
    hypothesis: 'Automated negotiations unlock 12% margin expansion across suppliers.',
    stage: 'Discovery',
    duration: '4 weeks'
  },
  {
    title: 'Zero-trust analytics exchange',
    theme: 'Data trust & compliance',
    hypothesis: 'Secure clean rooms accelerate partner integrations by 30%.',
    stage: 'Design',
    duration: '5 weeks'
  }
];

const guardrails = [
  {
    title: 'Theme investment guardrails',
    detail: 'Funding thresholds and mix reviewed quarterly to maintain balance across value horizons.'
  },
  {
    title: 'Experience north star',
    detail: 'Unified journey map ensures every theme is anchored to measurable customer outcomes.'
  },
  {
    title: 'Governance rhythm',
    detail: 'Monthly theme reviews with accountable executives and data-driven scorecards.'
  }
];

const themeSignals = [
  {
    label: 'Investment balance',
    description: '44% transform / 33% grow / 23% run — aligned to strategic ambition bands.'
  },
  {
    label: 'Experience KPIs',
    description: 'Customer satisfaction trending +7 points where theme solutions are live.'
  },
  {
    label: 'Capability evolution',
    description: 'Design system, AI platform, and governance kits enabling reuse across themes.'
  }
];

export default function ThemeManagementPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        badge="Theme Management"
        title="Curating the themes powering the annual plan"
        subtitle="Keep each strategic theme vibrant with clear ownership, investment guardrails, and continual experimentation."
      />

      <section>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {themeMetrics.map((metric) => (
            <MetricCard key={metric.label} {...metric} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr,0.8fr]">
        <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8">
          <h2 className="text-xl font-semibold text-white">Theme focus areas</h2>
          <p className="mt-2 text-sm text-slate-300">Executive sponsors shaping outcomes and the confidence trajectory.</p>
          <div className="mt-6 space-y-5">
            {focusThemes.map((theme) => (
              <div key={theme.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-white">{theme.name}</p>
                    <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Sponsor: {theme.owner}</p>
                  </div>
                  <span className="text-lg font-semibold text-emerald-200">Confidence {theme.confidence}%</span>
                </div>
                <p className="mt-3 text-sm text-slate-300">{theme.objective}</p>
                <div className="mt-4 h-2 w-full rounded-full bg-white/10">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-mint via-aurora to-indigo-500"
                    style={{ width: `${theme.confidence}%` }}
                  />
                </div>
                <p className="mt-2 text-xs uppercase tracking-[0.35em] text-slate-400">Sentiment: {theme.sentiment}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8">
          <h2 className="text-xl font-semibold text-white">Experiment backlog</h2>
          <p className="mt-2 text-sm text-slate-300">Learning agenda aligned to themed bets with rapid iteration cycles.</p>
          <ul className="mt-6 space-y-4 text-sm text-slate-200">
            {experimentBacklog.map((item) => (
              <li key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="font-semibold text-white">{item.title}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.35em] text-slate-400">Theme: {item.theme}</p>
                <p className="mt-2 text-slate-300">{item.hypothesis}</p>
                <div className="mt-3 flex flex-wrap gap-3 text-xs uppercase tracking-[0.35em] text-slate-400">
                  <span className="rounded-full border border-white/15 px-3 py-1">{item.stage}</span>
                  <span className="rounded-full border border-white/15 px-3 py-1">{item.duration}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.9fr,1.1fr]">
        <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8">
          <h2 className="text-xl font-semibold text-white">Theme health signals</h2>
          <p className="mt-2 text-sm text-slate-300">Leading indicators used to maintain investment balance across the plan.</p>
          <div className="mt-6 space-y-4">
            {themeSignals.map((signal) => (
              <div key={signal.label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-semibold text-white">{signal.label}</p>
                <p className="mt-2 text-sm text-slate-300">{signal.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/5 to-transparent p-8">
          <h2 className="text-xl font-semibold text-white">Governance guardrails</h2>
          <p className="mt-2 text-sm text-slate-300">Principles keeping themes tightly aligned to strategy and customer outcomes.</p>
          <ul className="mt-6 space-y-4 text-sm text-slate-200">
            {guardrails.map((item) => (
              <li key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="font-semibold text-white">{item.title}</p>
                <p className="mt-2 text-slate-300">{item.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
