import type { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  badge?: string;
  actions?: ReactNode;
}

export default function PageHeader({ title, subtitle, badge, actions }: PageHeaderProps) {
  return (
    <header className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-3xl space-y-4">
          {badge && (
            <span className="inline-flex items-center rounded-full border border-aurora/40 bg-aurora/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-aurora">
              {badge}
            </span>
          )}
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h1>
          <p className="text-base text-slate-300 sm:text-lg">{subtitle}</p>
        </div>
        {actions && <div className="flex items-center gap-3">{actions}</div>}
      </div>
    </header>
  );
}
