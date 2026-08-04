import { ButtonLink } from '@free-react-templates/ui'
import { Bath, Baby, Dog, Hand, Moon, Scissors, type LucideIcon } from 'lucide-react'

interface Service {
  icon: LucideIcon
  title: string
  copy: string
  duration: string
}

const services: Service[] = [
  {
    icon: Scissors,
    title: 'Full Grooming',
    copy: 'Complete grooming package including bath, haircut, nail trim, ear cleaning, and teeth brushing.',
    duration: '2-3 hours',
  },
  {
    icon: Bath,
    title: 'Bath & Brush',
    copy: 'Refreshing bath with premium shampoo, blow dry, and thorough brushing to keep coat healthy.',
    duration: '1 hour',
  },
  {
    icon: Dog,
    title: 'Daycare',
    copy: 'Safe, supervised playtime with other dogs in our climate-controlled facility with indoor and outdoor areas.',
    duration: 'Full day',
  },
  {
    icon: Moon,
    title: 'Overnight Boarding',
    copy: 'Comfortable overnight stays with cozy bedding, multiple play sessions, and lots of love.',
    duration: 'Per night',
  },
  {
    icon: Hand,
    title: 'Nail Trim',
    copy: 'Quick and stress-free nail trimming by experienced groomers using gentle handling techniques.',
    duration: '15 minutes',
  },
  {
    icon: Baby,
    title: 'Puppy Package',
    copy: 'Special first grooming experience designed to make puppies comfortable with the grooming process.',
    duration: '45 minutes',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-600 dark:text-primary-400">
            What we offer
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            Our Services
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Everything your pet needs for a happy, healthy life — all under one roof.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article
                key={service.title}
                className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-100 text-primary-600 dark:bg-primary-900/40 dark:text-primary-400">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="mt-6 font-serif text-xl font-semibold text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {service.copy}
                </p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-400">
                  Duration: {service.duration}
                </p>
              </article>
            )
          })}
        </div>

        <div className="mt-14 text-center">
          <ButtonLink href="#contact" variant="outline" className="rounded-full px-8 py-4">
            View All Services
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
