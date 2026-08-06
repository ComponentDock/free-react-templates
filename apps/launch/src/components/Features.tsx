import { Boxes, CalendarCheck, Lightbulb, TrendingUp } from 'lucide-react'

const features = [
  {
    icon: TrendingUp,
    title: 'Grow Your Business',
    blurb:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    icon: Boxes,
    title: 'Build Products',
    blurb:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  },
  {
    icon: CalendarCheck,
    title: 'Success Every Day',
    blurb:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    icon: Lightbulb,
    title: 'Bring Ideas to Life',
    blurb:
      'It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
  },
] as const

export function Features() {
  return (
    <section
      id="features"
      aria-label="Features"
      className="bg-paper py-16 sm:py-24 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl dark:text-white">
            Advantage of using our products
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-gray-600 dark:text-gray-400">
            Thoughtful tools that help your team move faster and ship better products.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-gray-100 bg-white p-8 text-center transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-950"
            >
              <feature.icon className="mx-auto h-10 w-10 text-primary-500" aria-hidden="true" />
              <h3 className="mt-5 font-display text-lg font-semibold text-ink dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {feature.blurb}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
