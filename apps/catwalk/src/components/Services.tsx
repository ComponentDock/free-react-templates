import { Briefcase, Handshake, Search, Sparkles, type LucideIcon } from 'lucide-react'

interface Service {
  title: string
  icon: LucideIcon
  blurb: string
}

const services: Service[] = [
  {
    title: 'Finding Agency',
    icon: Handshake,
    blurb:
      'We connect aspiring talents with the right agencies and casting directors around the world.',
  },
  {
    title: 'Types of Modeling',
    icon: Sparkles,
    blurb: 'From runway to editorial, discover which modeling path fits your look and personality.',
  },
  {
    title: 'Freelance',
    icon: Briefcase,
    blurb: 'Flexible freelance bookings with transparent contracts and fair compensation.',
  },
  {
    title: 'Search Models',
    icon: Search,
    blurb: 'Brands can browse and book vetted professional models by measurement and look.',
  },
]

export function Services() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-sm font-medium uppercase tracking-[0.35em] text-brand">
          Our Services
        </p>
        <h2 className="mt-2 text-center text-3xl font-semibold text-ink dark:text-white lg:text-4xl">
          What we do
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-sm font-light leading-relaxed text-mist dark:text-gray-400">
          Even the all-powerful Pointing has no control about the blind texts it is an almost
          unorthographic life.
        </p>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, icon: Icon, blurb }) => (
            <div key={title} className="text-center">
              <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-paper dark:bg-gray-800">
                <Icon className="h-9 w-9 text-brand" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-ink dark:text-white">{title}</h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-mist dark:text-gray-400">
                {blurb}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
