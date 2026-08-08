import { Play } from 'lucide-react'

const stats = [
  { value: '5,000+', label: 'Members' },
  { value: '50+', label: 'Classes/Week' },
  { value: '15+', label: 'Expert Trainers' },
  { value: '24/7', label: 'Access' },
]

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gray-950 py-24 pt-36 lg:py-36">
      {/* Dark gym photo with heavy gradient overlay */}
      <img
        src="https://picsum.photos/seed/forgefit-1/1920/1080"
        alt=""
        aria-hidden="true"
        loading="eager"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950/70 via-gray-950/80 to-gray-950" />

      <div className="relative mx-auto max-w-7xl px-4 text-center lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary-500/40 bg-primary-600/15 px-4 py-1.5 text-sm font-semibold text-primary-400">
          <span className="h-2 w-2 animate-pulse rounded-full bg-primary-500" aria-hidden="true" />
          Now Open 24/7
        </span>

        <h1 className="font-display mx-auto mt-6 max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          Push Beyond Your <span className="text-primary-500">Limits</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
          World-class equipment, expert trainers, and a community that pushes you further. Start
          your transformation today.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center rounded-full bg-primary-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-primary-600/25 transition-colors hover:bg-primary-700"
          >
            Start Free Trial
          </a>
          <a
            href="#programs"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-bold text-gray-900 transition-colors hover:bg-gray-100"
          >
            View Programs
          </a>
          <a
            href="#trainers"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-700 px-8 py-4 text-base font-bold text-white transition-colors hover:border-primary-500 hover:text-primary-400"
          >
            <Play className="h-5 w-5" aria-hidden="true" />
            Watch Demo
          </a>
        </div>

        <div className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl font-bold text-primary-500">{stat.value}</p>
              <p className="mt-1 text-sm font-medium text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
