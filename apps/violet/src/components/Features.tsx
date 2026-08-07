import { ArrowRight, Megaphone, Palette, Share2 } from 'lucide-react'

const features = [
  {
    title: 'Brand Identity',
    blurb:
      'Etiam nec odio vestibulum est mattis efficitur ut magna. Pellentesque ultricies tellus a felis tincidunt.',
    icon: Palette,
  },
  {
    title: 'Online Marketing',
    blurb:
      'Etiam nec odio vestibulum est mattis efficitur ut magna. Pellentesque ultricies tellus a felis tincidunt.',
    icon: Megaphone,
  },
  {
    title: 'Social Media',
    blurb:
      'Etiam nec odio vestibulum est mattis efficitur ut magna. Pellentesque ultricies tellus a felis tincidunt.',
    icon: Share2,
  },
] as const

export function Features() {
  return (
    <section id="features" aria-label="Features" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-ink dark:text-gray-100">
            Discover the features
          </h2>
          <p className="mt-4 text-smoke dark:text-gray-400">We are young but bold</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border-t-4 border-transparent bg-gray-50 p-8 transition-all hover:-translate-y-1 hover:border-primary-400 hover:bg-white hover:shadow-xl dark:border-gray-800 dark:bg-gray-900 dark:hover:bg-gray-900"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-accent-400 to-primary-400 text-white">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-6 font-display text-xl font-semibold text-ink dark:text-gray-100">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-smoke dark:text-gray-400">
                {feature.blurb}
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-400 transition-colors hover:text-primary-600"
              >
                Read More
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
