import { BadgeCheck, GraduationCap, Headphones, Star, ThumbsUp, Wrench } from 'lucide-react'

const features = [
  {
    title: 'Expert Technicians',
    text: 'Usage of the Internet is becoming more common due to rapid advancement of technology and power.',
    icon: Wrench,
  },
  {
    title: 'Professional Service',
    text: 'Usage of the Internet is becoming more common due to rapid advancement of technology and power.',
    icon: BadgeCheck,
  },
  {
    title: 'Great Support',
    text: 'Usage of the Internet is becoming more common due to rapid advancement of technology and power.',
    icon: Headphones,
  },
  {
    title: 'Technical Skills',
    text: 'Usage of the Internet is becoming more common due to rapid advancement of technology and power.',
    icon: GraduationCap,
  },
  {
    title: 'Highly Recommended',
    text: 'Usage of the Internet is becoming more common due to rapid advancement of technology and power.',
    icon: Star,
  },
  {
    title: 'Positive Reviews',
    text: 'Usage of the Internet is becoming more common due to rapid advancement of technology and power.',
    icon: ThumbsUp,
  },
] as const

export function Features() {
  return (
    <section className="bg-paper py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-sm font-bold uppercase tracking-[0.3em] text-brand">
            Why choose us
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-ink dark:text-white sm:text-4xl">
            Some Features that Made us Unique
          </h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <article
                key={feature.title}
                className="flex gap-6 rounded-[10px] bg-white p-10 dark:bg-gray-800"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[10px] bg-brand text-charcoal">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-ink dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist dark:text-gray-400">
                    {feature.text}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
