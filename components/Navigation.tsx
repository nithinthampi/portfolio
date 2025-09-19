'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Dashboard', href: '/' },
  { label: 'Portfolio Overview', href: '/portfolio-overview' },
  { label: 'Theme Management', href: '/theme-management' },
  { label: 'Initiative Planning', href: '/initiative-planning' },
  { label: 'Resource Allocation', href: '/resource-allocation' },
  { label: 'ROI Analytics', href: '/roi-analytics' }
];

function linkStyles(isActive: boolean) {
  const base = 'rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200';
  const active = 'border-aurora/50 bg-aurora/15 text-white shadow-[0_0_1.75rem_-1rem_rgba(99,102,241,0.9)]';
  const inactive = 'border-transparent text-slate-300 hover:border-white/20 hover:bg-white/10 hover:text-white';
  return `${base} ${isActive ? active : inactive}`;
}

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="rounded-3xl border border-white/10 bg-slate-900/60 px-6 py-6 shadow-[0_25px_60px_-35px_rgba(15,23,42,0.9)] backdrop-blur-xl">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-aurora/70 via-aurora/40 to-sky-400/40 text-lg font-semibold text-white shadow-glow">
            AOP
          </div>
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.35em] text-slate-400">Annual Operating Plan</p>
            <p className="text-xl font-semibold text-white">Portfolio Command Center</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-[0.65rem] uppercase tracking-[0.3em] text-slate-300">
          {['FY24 plan', 'Cadence week 18', 'Updated 8m ago'].map((badge) => (
            <span key={badge} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              {badge}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-2">
        {navItems.map((item) => {
          const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
          return (
            <Link key={item.href} href={item.href} className={linkStyles(isActive)}>
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
