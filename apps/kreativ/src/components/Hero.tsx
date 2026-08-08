import { ArrowRight, ChevronDown } from 'lucide-react'

const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '50+', label: 'Happy Clients' },
  { value: '12', label: 'Team Members' },
  { value: '8', label: 'Years Experience' },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Background glow blobs */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20" aria-hidden="true">
        <div className="absolute -left-4 top-0 h-72 w-72 rounded-full bg-primary-500 blur-[128px]" />
        <div className="absolute -right-4 bottom-0 h-72 w-72 rounded-full bg-accent-500 blur-[128px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 dark:border-primary-800 dark:bg-primary-900/30 dark:text-primary-300">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-500" />
            </span>
            Award-Winning Creative Agency
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
            We Create <span className="text-gradient">Bold Digital</span> Experiences
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400 lg:text-xl">
            We craft bold digital experiences that captivate audiences and drive results.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary-500/25 transition-all hover:bg-primary-600 hover:shadow-xl hover:shadow-primary-500/30"
            >
              View Our Work
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-700 transition-all hover:border-gray-400 hover:bg-gray-50 dark:border-gray-700 dark:bg-transparent dark:text-gray-200 dark:hover:bg-gray-800"
            >
              Start a Project
            </a>
          </div>

          {/* Stats row */}
          <div className="mt-16 grid grid-cols-2 gap-8 border-t border-gray-200 pt-10 sm:grid-cols-4 dark:border-gray-800">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="mt-12 flex flex-col items-center gap-2 text-gray-400">
            <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
            <span
              className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-current pt-2"
              aria-hidden="true"
            >
              <ChevronDown className="h-4 w-4 animate-bounce" />
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
