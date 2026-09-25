import { Play } from 'lucide-react'

interface AboutProps {
  className?: string
}

interface Stat {
  value: number
  suffix: string
  label: string
}

const stats: Stat[] = [
  { value: 15, suffix: '+', label: 'Years Experience' },
  { value: 200, suffix: '+', label: 'Skaters Trained' },
  { value: 50, suffix: '+', label: 'Events Hosted' },
  { value: 10, suffix: 'K+', label: 'Community Members' },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  return (
    <span className="text-4xl md:text-5xl font-bold text-brand font-oswald">
      {target}
      {suffix}
    </span>
  )
}

export function About({ className = '' }: AboutProps) {
  return (
    <section id="about" className={`py-20 bg-bg-dark ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-10 lg:flex-row">
          {/* Video placeholder */}
          <div className="relative lg:w-1/2">
            <img
              src="https://picsum.photos/seed/ollie-7/800/500"
              alt="Skateboarding video"
              className="w-full rounded-lg object-cover"
            />
            <button
              className="absolute inset-0 flex items-center justify-center bg-bg-dark/40 transition-colors hover:bg-bg-dark/60 rounded-lg"
              aria-label="Play video"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand text-white shadow-lg">
                <Play size={36} fill="currentColor" />
              </div>
            </button>
          </div>

          {/* Stats */}
          <div className="lg:w-1/2">
            <h2 className="font-oswald text-3xl md:text-4xl font-bold uppercase tracking-wider text-white mb-4">
              About Ollie
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              Founded by passionate skaters, Ollie is dedicated to advancing skateboarding culture
              through education, community, and style. We believe every skater deserves access to
              world-class coaching and resources.
            </p>
            <div className="grid grid-cols-2 gap-8">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <Counter target={s.value} suffix={s.suffix} />
                  <p className="mt-2 text-sm text-muted uppercase tracking-wider font-oswald">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
