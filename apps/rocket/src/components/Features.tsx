import { BookOpen, Headphones, Wrench, type LucideIcon } from 'lucide-react'

interface Feature {
  icon: LucideIcon
  title: string
  copy: string
}

const features: Feature[] = [
  {
    icon: BookOpen,
    title: 'Expert Technicians',
    copy: 'Certified specialists handle setup, tuning, and maintenance end to end.',
  },
  {
    icon: Wrench,
    title: 'Professional Service',
    copy: 'White-glove service from onboarding through every update and release.',
  },
  {
    icon: Headphones,
    title: 'Great Support',
    copy: 'Friendly experts are a message away whenever you need them.',
  },
] as const

export function Features() {
  return (
    <section id="features" className="relative overflow-hidden bg-paper py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            Unique Features
          </h2>
          <p className="mt-4 leading-relaxed text-muted dark:text-gray-400">
            Everything you need to launch, grow, and support your app — designed to convert visitors
            into loyal users.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <article
                key={feature.title}
                className="bg-white px-8 py-12 text-center shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-transform hover:-translate-y-1 dark:bg-gray-900"
              >
                <div className="mx-auto flex h-[84px] w-[84px] items-center justify-center bg-gradient-to-b from-azure to-primary-600">
                  <Icon className="h-9 w-9 text-white" aria-hidden="true" />
                </div>
                <h3 className="mt-10 font-display text-[21px] font-semibold text-ink dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-5 leading-relaxed text-muted dark:text-gray-400">{feature.copy}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
