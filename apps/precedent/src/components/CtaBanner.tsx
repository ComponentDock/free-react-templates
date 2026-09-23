import { Award, Clock, Users } from 'lucide-react'

interface CtaStat {
  icon: React.ComponentType<{ className?: string; 'aria-hidden'?: boolean }>
  label: string
}

const stats: CtaStat[] = [
  { icon: Award, label: 'Award Winning' },
  { icon: Clock, label: '60 Years of Experience' },
  { icon: Users, label: 'Best Attorneys Team' },
]

export function CtaBanner() {
  return (
    <section aria-labelledby="cta-heading" className="relative overflow-hidden py-20">
      {/* Background image */}
      <img
        src="https://picsum.photos/seed/precedent-cta/1920/400"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2
          id="cta-heading"
          className="font-heading mb-10 text-3xl font-bold text-white sm:text-4xl"
        >
          We Have Great Results
        </h2>
        <div className="mb-10 flex flex-wrap items-center justify-center gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="flex items-center gap-3">
                <Icon className="h-6 w-6 text-[#c5a55a]" aria-hidden={true} />
                <span className="text-sm font-medium text-white">{stat.label}</span>
              </div>
            )
          })}
        </div>
        <a
          href="#contact"
          className="inline-block rounded bg-[#c5a55a] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#b8963e]"
        >
          Free Case Consultation
        </a>
      </div>
    </section>
  )
}
