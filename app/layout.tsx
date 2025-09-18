import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Navigation from '@/components/Navigation';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AOP Portfolio Command Center',
  description:
    'Executive-grade dashboard for the FY24 annual operating plan with insights across themes, initiatives, resources, and ROI.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.className} bg-slate-950 text-slate-100 antialiased`}>
        <div className="relative min-h-screen overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.18),transparent_55%),radial-gradient(circle_at_80%_0,rgba(56,189,248,0.12),transparent_60%),radial-gradient(circle_at_40%_100%,rgba(16,185,129,0.14),transparent_60%)]"
            aria-hidden="true"
          />
          <div className="pointer-events-none absolute -top-40 right-0 h-[30rem] w-[30rem] rounded-full bg-aurora/20 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute bottom-[-12rem] left-[-6rem] h-[32rem] w-[32rem] rounded-full bg-mint/15 blur-3xl" aria-hidden="true" />

          <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col gap-12 px-6 pb-16 pt-12 md:px-10 lg:px-12">
            <Navigation />
            <main className="flex-1 space-y-12">{children}</main>
            <footer className="border-t border-white/10 pt-6 text-xs text-slate-400">
              <p>Annual Operating Plan control tower. Crafted for the Strategy &amp; Transformation office.</p>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
