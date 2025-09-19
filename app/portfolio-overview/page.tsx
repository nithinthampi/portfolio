import PageHeader from '@/components/PageHeader';

const planningCycles = [
  { label: 'FY24 Planning Cycle', active: true },
  { label: 'FY25 Horizon', active: false },
  { label: '2024 Planning Cycle', active: false }
] as const;

const quickFilters = [
  { label: 'High ROI (300%+)', active: true },
  { label: 'High confidence', active: false },
  { label: 'Large budget ($1M+)', active: false },
  { label: 'Requires board review', active: false }
] as const;

const filterGroups = [
  {
    label: 'ROI threshold',
    helper: 'Guardrail: ≥300%',
    options: [
      { label: 'No threshold' },
      { label: '200%+' },
      { label: '300%+', active: true },
      { label: '400%+' }
    ]
  },
  {
    label: 'Budget range',
    helper: 'All budget ranges',
    options: [
      { label: 'All budget ranges', active: true },
      { label: '$0-500K' },
      { label: '$500K-$1M' },
      { label: '$1M+' }
    ]
  },
  {
    label: 'Status',
    helper: 'Showing all statuses',
    options: [
      { label: 'All statuses', active: true },
      { label: 'Green' },
      { label: 'Amber' },
      { label: 'Red' }
    ]
  },
  {
    label: 'Focus areas',
    helper: 'Theme alignment',
    options: [
      { label: 'All focus areas' },
      { label: 'Digital transformation', active: true },
      { label: 'Customer experience' },
      { label: 'Operational resilience' }
    ]
  },
  {
    label: 'Value levers',
    helper: 'Impact vector',
    options: [
      { label: 'All value levers', active: true },
      { label: 'Revenue lift' },
      { label: 'Cost efficiency' },
      { label: 'Risk mitigation' }
    ]
  },
  {
    label: 'Owners',
    helper: 'Leadership coverage',
    options: [
      { label: 'All owners', active: true },
      { label: 'Product' },
      { label: 'Technology' },
      { label: 'Operations' }
    ]
  }
] as const;

const businessThemes = [
  {
    name: 'Digital transformation',
    owner: 'Sarah Johnson',
    investment: '$26.8M',
    roi: '4.3x ROI',
    change: '+$2.1M vs plan',
    changeTone: 'positive',
    progress: 78,
    status: 'On track',
    focus: 'Cloud migration, AI copilots, and unified data plane across channels.'
  },
  {
    name: 'Customer experience',
    owner: 'Miguel Chen',
    investment: '$18.4M',
    roi: '3.1x ROI',
    change: '+$0.8M vs plan',
    changeTone: 'positive',
    progress: 64,
    status: 'Slightly behind',
    focus: 'Personalized journeys, digital self-service, and double-digit NPS lift.'
  },
  {
    name: 'Operational resilience',
    owner: 'Priya Patel',
    investment: '$12.2M',
    roi: '2.4x ROI',
    change: '-$0.5M vs plan',
    changeTone: 'negative',
    progress: 71,
    status: 'Back on track',
    focus: 'Automation, incident readiness, and regulatory alignment across markets.'
  }
] as const;

const overviewTabs = ['ROI Distribution', 'Budget Allocation', 'Status Overview', 'Trend Analysis'] as const;

const roiDistribution = [
  { label: '0-100%', value: 8 },
  { label: '100-200%', value: 14 },
  { label: '200-300%', value: 34, highlight: true },
  { label: '300-400%', value: 26 },
  { label: '400%+', value: 18 }
] as const;

const themeMetrics = [
  { label: 'Portfolio ROI', value: '285%', change: '+32% vs FY23', accent: 'aurora' },
  { label: 'Benefit realization', value: '$84M', change: '+$5.4M YoY', accent: 'mint' },
  { label: 'Confidence index', value: '92 / 100', change: '+4pts month-over-month', accent: 'amber' }
] as const;

const topInitiatives = [
  {
    name: 'Cloud migration program',
    owner: 'Magda Perez',
    progress: 86,
    roi: '3.9x ROI',
    status: 'Green',
    detail: 'Production workloads moved, resilience tests passed, and benefits trending +11%.'
  },
  {
    name: 'Digital care transformation',
    owner: 'Elliot Shaw',
    progress: 72,
    roi: '3.4x ROI',
    status: 'Green',
    detail: 'Self-service adoption at 64%, contact center deflection ahead of the FY24 target.'
  },
  {
    name: 'AI sales copilot rollout',
    owner: 'Nina Brooks',
    progress: 68,
    roi: '4.1x ROI',
    status: 'Amber',
    detail: 'Enablement pace improving; final regional adoption sprint planned for early Q3.'
  }
] as const;

const watchlist = [
  {
    label: 'Data privacy harmonization',
    owner: 'Legal & Security',
    timeline: 'Q3 review',
    detail: 'Awaiting regulator feedback; contingency playbook ready with alternate sequencing.'
  },
  {
    label: 'Field enablement coverage',
    owner: 'Commercial Ops',
    timeline: 'Q2 gating',
    detail: 'Accelerate training cadence to reach 85% coverage prior to major FY24 releases.'
  }
] as const;

const healthSignals = [
  {
    label: 'Investment balance',
    description: '44% transform / 35% grow / 21% run — aligned to AOP guardrails and ambition.'
  },
  {
    label: 'Experience KPIs',
    description: 'Customer and colleague journeys sustain double-digit NPS uplift where live.'
  },
  {
    label: 'Capability evolution',
    description: 'Design system, AI platform, and governance foundations enable faster reuse.'
  }
] as const;

const steeringNotes = [
  {
    title: 'Board focus',
    detail: 'Showcase ROI concentration in the 200-400% bands and the three approvals queued for Q3.'
  },
  {
    title: 'Readiness pulse',
    detail: 'Enablement factory covers 68% of field leaders; target 85% prior to the next release train.'
  },
  {
    title: 'Dependency outlook',
    detail: 'Security remediation and data harmonization remain amber but have mitigation aligned with owners.'
  }
] as const;

const activeFilters = ['ROI ≥ 300%', 'Digital transformation', 'FY24 plan'] as const;

type ChangeTone = typeof businessThemes[number]['changeTone'];

type InitiativeStatus = typeof topInitiatives[number]['status'];

type ThemeMetricAccent = typeof themeMetrics[number]['accent'];

const accentClasses: Record<ThemeMetricAccent, string> = {
  aurora: 'from-aurora/80 via-indigo-500/80 to-sky-500/70',
  mint: 'from-mint/80 via-emerald-400/80 to-teal-300/70',
  amber: 'from-amber/80 via-orange-400/80 to-pink-400/70'
};

function getChangeToneClass(tone: ChangeTone) {
  switch (tone) {
    case 'positive':
      return 'text-emerald-200';
    case 'negative':
      return 'text-rose-300';
    default:
      return 'text-slate-300';
  }
}

function getThemeProgressClass(status: typeof businessThemes[number]['status']) {
  switch (status) {
    case 'On track':
      return 'bg-emerald-400';
    case 'Slightly behind':
      return 'bg-amber-400';
    case 'Back on track':
      return 'bg-sky-400';
    default:
      return 'bg-aurora';
  }
}

function getThemeBadgeClass(status: typeof businessThemes[number]['status']) {
  switch (status) {
    case 'On track':
      return 'border border-emerald-400/40 bg-emerald-500/10 text-emerald-200';
    case 'Slightly behind':
      return 'border border-amber-400/40 bg-amber-500/10 text-amber-200';
    case 'Back on track':
      return 'border border-sky-400/40 bg-sky-500/10 text-sky-200';
    default:
      return 'border border-white/20 bg-white/10 text-white';
  }
}

function getInitiativeBadge(status: InitiativeStatus) {
  switch (status) {
    case 'Green':
      return 'border border-emerald-400/40 bg-emerald-500/10 text-emerald-200';
    case 'Amber':
      return 'border border-amber-400/40 bg-amber-500/10 text-amber-200';
    default:
      return 'border border-white/20 bg-white/10 text-white';
  }
}

export default function PortfolioOverviewPage() {
  const maxDistributionValue = Math.max(...roiDistribution.map((item) => item.value));

  return (
    <div className="space-y-12">
      <PageHeader
        badge="Portfolio overview"
        title="Portfolio health and composition"
        subtitle="Focused view of value, guardrails, and readiness signals for the FY24 annual operating plan."
      />

      <section className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 shadow-[0_20px_70px_rgba(8,15,35,0.45)]">
        <div className="grid gap-8 xl:grid-cols-[minmax(0,1.8fr),minmax(0,1fr)]">
          <div className="space-y-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400">Portfolio filters</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">Focus the FY24 portfolio lens</h2>
                <p className="mt-2 max-w-2xl text-sm text-slate-300">
                  Apply guardrails and focus areas to curate the executive-ready view ahead of the steering committee prep.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 shadow-[0_10px_25px_rgba(8,15,35,0.35)]">
                {planningCycles.map((cycle) => (
                  <button
                    key={cycle.label}
                    type="button"
                    className={`rounded-full px-4 py-1.5 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aurora ${
                      cycle.active
                        ? 'bg-white text-slate-900 shadow shadow-white/20'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {cycle.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Quick filters</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {quickFilters.map((filter) => (
                  <button
                    key={filter.label}
                    type="button"
                    className={`rounded-full border px-4 py-2 text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aurora ${
                      filter.active
                        ? 'border-aurora/40 bg-aurora/15 text-white shadow-[0_0_30px_rgba(99,102,241,0.25)]'
                        : 'border-white/10 text-slate-300 hover:border-white/25 hover:text-white'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {filterGroups.map((group) => (
                <div key={group.label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sm font-semibold text-white">{group.label}</p>
                    <span className="text-xs text-slate-400">{group.helper}</span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.options.map((option) => (
                      <button
                        key={option.label}
                        type="button"
                        className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aurora ${
                          option.active
                            ? 'border-aurora/40 bg-aurora/15 text-white shadow-[0_0_25px_rgba(99,102,241,0.2)]'
                            : 'border-white/10 text-slate-300 hover:border-white/25 hover:text-white'
                        }`}
                        aria-pressed={option.active}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-2 text-xs text-slate-300">
                {activeFilters.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-slate-300 transition hover:border-white/25 hover:text-white"
                >
                  More filters
                </button>
                <button
                  type="button"
                  className="rounded-full border border-rose-400/40 px-4 py-2 text-xs font-medium text-rose-200 transition hover:border-rose-300 hover:text-rose-100"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-5 rounded-2xl border border-white/10 bg-slate-950/70 p-6">
            <div>
              <label
                htmlFor="initiative-search"
                className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400"
              >
                Search initiatives
              </label>
              <div className="mt-3 flex items-center gap-3 rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 shadow-[0_12px_35px_rgba(8,15,35,0.45)]">
                <svg
                  aria-hidden="true"
                  className="h-4 w-4 text-slate-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="11" cy="11" r="6" />
                  <path d="m20 20-2.6-2.6" strokeLinecap="round" />
                </svg>
                <input
                  id="initiative-search"
                  type="search"
                  placeholder="Search initiatives, owners, or themes"
                  className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
                  readOnly
                />
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Active view</p>
              <p className="mt-2 text-sm text-slate-300">
                Portfolio filtered to high-confidence initiatives within the digital transformation theme and FY24 plan.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-300">
                {['Confidence ≥ 80%', 'Capacity ≤ 85%', 'Risk ≤ Medium'].map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-slate-900/60 px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-aurora/40 bg-aurora/10 p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-aurora">Guardrail alert</p>
                  <p className="mt-2 text-sm text-white">
                    ROI distribution comfortably above the 300% threshold; continue to prioritize execution confidence.
                  </p>
                </div>
                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
                  FY24
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,2fr),minmax(0,1fr)]">
        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 shadow-[0_20px_70px_rgba(8,15,35,0.45)]">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr),minmax(0,1fr)]">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Business themes</p>
                    <h2 className="mt-2 text-xl font-semibold text-white">Theme contribution and progress</h2>
                  </div>
                  <button
                    type="button"
                    className="rounded-full border border-white/10 px-3.5 py-1.5 text-xs font-medium text-slate-300 transition hover:border-white/25 hover:text-white"
                  >
                    View theme maps
                  </button>
                </div>
                <div className="mt-5 space-y-4">
                  {businessThemes.map((theme, index) => (
                    <div key={theme.name} className="card-sheen rounded-2xl border border-white/10 bg-white/5 p-5">
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div className="flex items-start gap-3">
                          <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-aurora/15 text-sm font-semibold text-aurora">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <div>
                            <p className="text-sm font-semibold text-white capitalize">{theme.name}</p>
                            <p className="mt-1 text-xs text-slate-400">Owner: {theme.owner}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-semibold text-white">{theme.investment}</p>
                          <p className="mt-1 text-xs text-slate-400">{theme.roi}</p>
                          <p className={`mt-1 text-xs font-medium ${getChangeToneClass(theme.changeTone as ChangeTone)}`}>
                            {theme.change}
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 h-2 w-full rounded-full bg-white/10">
                        <div
                          className={`h-2 rounded-full ${getThemeProgressClass(theme.status)}`}
                          style={{ width: `${theme.progress}%` }}
                        />
                      </div>
                      <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
                        <span>{theme.progress}% complete</span>
                        <span className={`rounded-full px-3 py-1 font-medium ${getThemeBadgeClass(theme.status)}`}>
                          {theme.status}
                        </span>
                      </div>
                      <p className="mt-4 text-sm text-slate-300">{theme.focus}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Portfolio overview</p>
                    <h3 className="mt-2 text-lg font-semibold text-white">ROI distribution by initiative count</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {overviewTabs.map((tab, index) => (
                      <button
                        key={tab}
                        type="button"
                        className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aurora ${
                          index === 0
                            ? 'border-white/30 bg-white text-slate-900 shadow shadow-white/20'
                            : 'border-white/10 text-slate-300 hover:border-white/25 hover:text-white'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mt-6 h-px w-full bg-white/10" />
                <div className="mt-6 grid h-64 grid-cols-5 items-end gap-4">
                  {roiDistribution.map((band) => {
                    const height = Math.max((band.value / maxDistributionValue) * 100, 12);
                    return (
                      <div key={band.label} className="flex flex-col items-center gap-3">
                        <span className="text-sm font-semibold text-white">{band.value}%</span>
                        <div className="flex h-full w-full items-end justify-center rounded-2xl bg-white/5 p-1.5">
                          <div
                            className={`w-full rounded-t-xl bg-gradient-to-t ${
                              band.highlight
                                ? 'from-mint/80 via-emerald-400/80 to-aurora/80'
                                : 'from-slate-600/60 via-aurora/70 to-indigo-400/80'
                            }`}
                            style={{ height: `${height}%` }}
                          />
                        </div>
                        <p className="text-xs font-medium text-slate-400">{band.label}</p>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    <span>Digital transformation concentration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-indigo-400" />
                    <span>Broader portfolio mix</span>
                  </div>
                </div>
                <p className="mt-4 text-sm text-slate-300">
                  46% of initiatives deliver ROI between 200-400%, underpinning the FY24 benefit realization outlook.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 shadow-[0_20px_70px_rgba(8,15,35,0.45)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Digital transformation theme</p>
                <h2 className="mt-2 text-xl font-semibold text-white">Portfolio performance snapshot</h2>
              </div>
              <button
                type="button"
                className="rounded-full border border-white/10 px-3.5 py-1.5 text-xs font-medium text-slate-300 transition hover:border-white/25 hover:text-white"
              >
                Switch theme
              </button>
            </div>
            <div className="mt-6 grid gap-4">
              {themeMetrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className={`h-1.5 w-16 rounded-full bg-gradient-to-r ${accentClasses[metric.accent]}`} />
                  <p className="mt-4 text-xs uppercase tracking-[0.35em] text-slate-400">{metric.label}</p>
                  <p className="mt-2 text-3xl font-semibold text-white">{metric.value}</p>
                  <p className="mt-1 text-sm text-slate-300">{metric.change}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/70 p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-white">Active guardrails</p>
                  <p className="mt-1 text-xs text-slate-400">ROI ≥ 300% • Capacity ≤ 85% • Risk ≤ Medium</p>
                </div>
                <span className="rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-200">
                  Aligned
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-[0_20px_70px_rgba(8,15,35,0.45)]">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Top performing initiatives</p>
                <h2 className="mt-2 text-xl font-semibold text-white">Execution momentum</h2>
              </div>
              <button
                type="button"
                className="rounded-full border border-white/10 px-3.5 py-1.5 text-xs font-medium text-slate-300 transition hover:border-white/25 hover:text-white"
              >
                View all initiatives
              </button>
            </div>
            <div className="mt-6 space-y-4">
              {topInitiatives.map((initiative) => (
                <div key={initiative.name} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-white">{initiative.name}</p>
                      <p className="mt-1 text-xs text-slate-400">Owner: {initiative.owner}</p>
                    </div>
                    <span className={`rounded-full px-3 py-1 text-xs font-medium ${getInitiativeBadge(initiative.status)}`}>
                      {initiative.status}
                    </span>
                  </div>
                  <div className="mt-4 h-2 w-full rounded-full bg-white/10">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-aurora via-indigo-500 to-mint"
                      style={{ width: `${initiative.progress}%` }}
                    />
                  </div>
                  <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
                    <span>{initiative.progress}% complete</span>
                    <span>{initiative.roi}</span>
                  </div>
                  <p className="mt-3 text-sm text-slate-300">{initiative.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 shadow-[0_20px_70px_rgba(8,15,35,0.45)]">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Strategic watchlist</p>
                <h2 className="mt-2 text-xl font-semibold text-white">Upcoming attention points</h2>
              </div>
              <button
                type="button"
                className="rounded-full border border-white/10 px-3.5 py-1.5 text-xs font-medium text-slate-300 transition hover:border-white/25 hover:text-white"
              >
                Add note
              </button>
            </div>
            <div className="mt-6 space-y-4">
              {watchlist.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-white">{item.label}</p>
                      <p className="mt-1 text-xs text-slate-400">Owner: {item.owner}</p>
                    </div>
                    <span className="rounded-full border border-amber-400/40 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-200">
                      {item.timeline}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-slate-300">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 shadow-[0_20px_70px_rgba(8,15,35,0.45)]">
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-xl font-semibold text-white">Health signals</h2>
              <span className="rounded-full border border-mint/40 bg-mint/10 px-3 py-1 text-xs font-medium text-mint">
                Stable
              </span>
            </div>
            <ul className="mt-5 space-y-4">
              {healthSignals.map((signal) => (
                <li key={signal.label} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-slate-200">
                  <p className="font-semibold text-white">{signal.label}</p>
                  <p className="mt-2 text-slate-300">{signal.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-6">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Steering commentary</p>
            <div className="mt-4 space-y-4 text-sm text-slate-200">
              {steeringNotes.map((note) => (
                <div key={note.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="font-semibold text-white">{note.title}</p>
                  <p className="mt-2 text-slate-300">{note.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

