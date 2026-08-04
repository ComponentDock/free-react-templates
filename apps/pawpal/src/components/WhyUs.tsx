import { BadgeCheck, Heart, Snowflake, Sparkles, type LucideIcon } from 'lucide-react'

interface Feature {
  icon: LucideIcon
  title: string
  copy: string
}

const features: Feature[] = [
  {
    icon: BadgeCheck,
    title: 'Certified Staff',
    copy: 'All groomers are nationally certified with ongoing education requirements.',
  },
  {
    icon: Heart,
    title: 'Fear-Free Certified',
    copy: 'We use fear-free handling techniques to minimize stress and anxiety.',
  },
  {
    icon: Sparkles,
    title: 'Premium Products',
    copy: 'Only the highest quality, pet-safe shampoos and grooming products.',
  },
  {
    icon: Snowflake,
    title: 'Climate Controlled',
    copy: 'Temperature-controlled facility for year-round comfort.',
  },
]

export function WhyUs() {
  return (
    <section id="about" className="bg-primary-50 py-20 dark:bg-gray-900">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-600 dark:text-primary-400">
            Why choose us
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            A Place Where Pets Come First
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            From the moment your pet walks through our doors, they are treated like family by a team
            that genuinely loves animals.
          </p>
          <img
            src="https://picsum.photos/seed/pawpal-why/800/600"
            alt="Our climate-controlled pet care facility"
            className="mt-8 w-full rounded-3xl object-cover shadow-lg"
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <article
                key={feature.title}
                className="rounded-3xl bg-white p-7 shadow-sm dark:bg-gray-800"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/40 dark:text-primary-400">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-serif text-lg font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{feature.copy}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
