import { Building2, Zap, Shield } from 'lucide-react'

const heroFeatures = [
  {
    icon: Zap,
    title: 'Creative',
    description: 'Far far away, behind the word mountains, far from the countries.',
    colorClass: 'text-primary-400',
  },
  {
    icon: Shield,
    title: 'Design',
    description: 'Far far away, behind the word mountains, far from the countries.',
    colorClass: 'text-ink dark:text-white',
  },
] as const

export function Hero() {
  return (
    <section id="home" className="flex flex-col lg:flex-row">
      {/* Left text area */}
      <div className="flex flex-1 items-center justify-center px-6 py-16 lg:px-12 lg:py-24">
        <div className="max-w-xl">
          <h1 className="mb-10 text-left font-display text-3xl font-bold leading-tight text-ink dark:text-white sm:text-4xl lg:text-5xl">
            Design is not just what it looks like and how it feels. Design is how it works.
          </h1>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {heroFeatures.map((feature) => (
              <div key={feature.title}>
                <span
                  className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 dark:bg-primary-900/30 ${feature.colorClass}`}
                >
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mb-2 font-display text-lg font-bold text-ink dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-smoke dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right image area */}
      <div className="relative flex-1 overflow-hidden bg-gray-200 dark:bg-gray-800 lg:min-h-[500px]">
        <img
          src="https://picsum.photos/seed/radiant-hero/800/600"
          alt="Modern office workspace"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <div className="mx-6 rounded-lg bg-white/90 p-8 text-center backdrop-blur dark:bg-gray-900/90">
            <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-500 dark:bg-primary-900/30">
              <Building2 className="h-6 w-6" aria-hidden="true" />
            </span>
            <h3 className="mb-2 font-display text-xl font-bold text-ink dark:text-white">
              Modern Design
            </h3>
            <p className="text-sm text-smoke dark:text-gray-400">
              Far far away, behind the word mountains, far from the countries.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
