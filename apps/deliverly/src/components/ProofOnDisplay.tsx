import type { LucideIcon } from 'lucide-react'
import { aboutImage, proofLead, proofStats, proofTitle } from '../data'

function StatIcon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="relative inline-flex h-[50px] w-[50px] items-center justify-center">
      <span
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[30px] w-[30px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-soft-strong"
      />
      <Icon aria-hidden="true" className="relative h-[34px] w-[34px] text-brand" />
    </span>
  )
}

export function ProofOnDisplay() {
  return (
    <section id="about" aria-label="Proof On Display" className="py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12">
        <div className="relative lg:col-span-7">
          <svg
            aria-hidden="true"
            viewBox="0 0 300 300"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="absolute -right-10 -top-10 h-64 w-64 -rotate-6 text-brand/30"
          >
            <path d="M10 240 C 60 120, 150 40, 290 10" />
            <path d="M40 260 C 90 140, 180 60, 290 30" />
          </svg>
          <img
            src={aboutImage}
            alt=""
            className="relative w-full object-cover shadow-[0_15px_30px_0_rgba(0,0,0,0.2)]"
          />
        </div>
        <div className="lg:col-span-4 lg:col-start-9">
          <div aria-hidden="true" className="mb-4 h-[2px] w-[50px] bg-brand" />
          <h2 className="font-serif text-[40px] font-bold leading-tight text-ink">{proofTitle}</h2>
          <p className="mt-4 text-lg text-muted">{proofLead}</p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {proofStats.map((stat) => (
              <div key={stat.label}>
                <StatIcon icon={stat.icon} />
                <span className="mt-3 block text-sm font-semibold text-ink">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
