import { Camera, Heart, Music, Sparkles } from 'lucide-react'

const services = [
  {
    title: 'Wedding Planning',
    blurb: 'From the first consultation to the last dance, we design every moment around you.',
    icon: Heart,
  },
  {
    title: 'Event Styling',
    blurb: 'Florals, lighting and decor that turn your venue into a storybook setting.',
    icon: Sparkles,
  },
  {
    title: 'Photography',
    blurb: 'Documentary-style photographers who capture every glance and every tear.',
    icon: Camera,
  },
  {
    title: 'Music & Dance',
    blurb: 'Live bands, DJs and choreography that keep your guests on the floor all night.',
    icon: Music,
  },
]

export function Services() {
  return (
    <section id="story" className="bg-cream-100 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h3 className="font-serif text-2xl font-semibold text-magenta-500 italic">
          We make any idea and wish come true
        </h3>
        <h1 className="mt-4 font-serif text-4xl font-bold text-ink-900 sm:text-5xl">
          We arrange the perfect weddings
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-700">
          A dedicated team of planners, stylists and artists who treat your wedding as the
          once-in-a-lifetime celebration it is — thoughtfully planned, beautifully styled, and
          flawlessly delivered.
        </p>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="group rounded-lg border border-stone-200 bg-white p-8 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-accent-500/40 hover:shadow-lg"
              >
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent-500/10 text-accent-500 transition-colors group-hover:bg-accent-500 group-hover:text-white">
                  <Icon className="h-8 w-8" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <h2 className="mt-6 font-serif text-xl font-semibold text-ink-900">
                  {service.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-700">{service.blurb}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
