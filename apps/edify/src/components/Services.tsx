import { BookOpen, Clock, Users } from 'lucide-react'

const SERVICES = [
  {
    title: '60+ UX courses',
    blurb: 'Curated, hands-on courses that take you from beginner to confident practitioner.',
    icon: BookOpen,
  },
  {
    title: 'Expert instructors',
    blurb: 'Learn directly from industry professionals with years of real-world experience.',
    icon: Users,
  },
  {
    title: 'Life time access',
    blurb: 'Pay once and keep your courses forever, with all future updates included.',
    icon: Clock,
  },
] as const

/* Services recreated from the source's services-area: three white rounded
   cards (radius 20px, lavender shadow) with an icon, title, and blurb. */

export function Services() {
  return (
    <section className="bg-lavender py-20 dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
        {SERVICES.map((service) => (
          <article
            key={service.title}
            className="flex items-start gap-5 rounded-[20px] bg-white p-7 shadow-[0_25px_60px_rgba(66,85,164,0.06)] dark:bg-gray-900"
          >
            <service.icon className="h-12 w-12 shrink-0 text-brand" aria-hidden="true" />
            <div>
              <h3 className="font-display text-lg font-semibold text-indigo dark:text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{service.blurb}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
