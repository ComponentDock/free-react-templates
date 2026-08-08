import {
  Cake,
  CalendarCheck,
  ClipboardList,
  MapPin,
  Music,
  Palette,
  type LucideIcon,
} from 'lucide-react'

interface Service {
  title: string
  description: string
  icon: LucideIcon
}

const services: Service[] = [
  {
    title: 'Full Planning',
    description:
      'End-to-end planning from concept to celebration, so you can savor every moment without the stress.',
    icon: ClipboardList,
  },
  {
    title: 'Day-of Coordination',
    description:
      'A dedicated coordinator ensures your timeline runs flawlessly from the first look to the last dance.',
    icon: CalendarCheck,
  },
  {
    title: 'Design & Decor',
    description:
      'Floral, lighting, and styling concepts that transform any space into your dream setting.',
    icon: Palette,
  },
  {
    title: 'Venue Selection',
    description:
      'Handpicked venues matched to your vision, budget, and guest count — with site visits arranged.',
    icon: MapPin,
  },
  {
    title: 'Catering & Cake',
    description:
      'Curated menus and stunning cakes from our trusted partners, tailored to your taste.',
    icon: Cake,
  },
  {
    title: 'Entertainment',
    description:
      'Bands, DJs, and live acts that keep the celebration moving from ceremony to after-party.',
    icon: Music,
  },
]

export function Services() {
  return (
    <section id="services" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary-500">
            What We Do
          </p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            From intimate elopements to grand celebrations, we offer comprehensive wedding planning
            services tailored to bring your unique vision to life.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-gray-100 bg-white p-8 transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-900/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                <service.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-6 font-serif text-xl font-semibold text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-gray-600 dark:text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
