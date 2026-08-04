import { Headset, Palette, ShieldCheck, Sliders, type LucideIcon } from 'lucide-react'

interface Feature {
  icon: LucideIcon
  title: string
  copy: string
}

const features: Feature[] = [
  {
    icon: Sliders,
    title: 'Easy to Costomize',
    copy: 'Fully customizable layouts and themes so the app matches your brand out of the box.',
  },
  {
    icon: ShieldCheck,
    title: 'Extreme Security',
    copy: 'Bank-grade encryption and continuous monitoring keep your data safe at all times.',
  },
  {
    icon: Headset,
    title: 'Customer Support',
    copy: 'Friendly 24/7 support from real humans whenever you need a helping hand.',
  },
  {
    icon: Palette,
    title: 'Creative Design',
    copy: 'A modern, pixel-perfect design crafted to delight your users on every screen.',
  },
]

export function Features() {
  return (
    <section id="features" className="bg-paper py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-600 dark:text-primary-400">
            Features
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-ink dark:text-white sm:text-4xl lg:text-5xl">
            Some of the best features Of Our App!
          </h2>
          <p className="mt-4 text-mist dark:text-gray-400">
            Everything you need to run your work, your team, and your life — beautifully simple.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <article
                key={feature.title}
                className="rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-100 text-primary-600 dark:bg-primary-900/40 dark:text-primary-400">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="mt-6 font-display text-lg font-bold text-ink dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist dark:text-gray-400">
                  {feature.copy}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
