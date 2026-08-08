import { Building2, FileText, Gavel, Heart, Landmark, Shield } from 'lucide-react'

const areas = [
  {
    title: 'Corporate Law',
    blurb: 'Comprehensive legal solutions for businesses of all sizes.',
    icon: Building2,
  },
  {
    title: 'Litigation',
    blurb: 'Aggressive representation in complex civil disputes.',
    icon: Gavel,
  },
  {
    title: 'Real Estate',
    blurb: 'Expert guidance in all real estate matters.',
    icon: Landmark,
  },
  {
    title: 'Family Law',
    blurb: 'Compassionate advocacy in family legal matters.',
    icon: Heart,
  },
  {
    title: 'Estate Planning',
    blurb: 'Protecting your legacy for future generations.',
    icon: FileText,
  },
  {
    title: 'Criminal Defense',
    blurb: 'Vigorous defense of your rights and freedom.',
    icon: Shield,
  },
]

export function PracticeAreas() {
  return (
    <section id="services" className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <p className="text-center text-sm font-bold uppercase tracking-widest text-accent-600 dark:text-accent-400">
          What We Do
        </p>
        <h2 className="font-display mt-3 text-center text-3xl font-bold text-primary-900 sm:text-4xl lg:text-5xl dark:text-white">
          Practice Areas
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-600 dark:text-gray-300">
          Our attorneys bring decades of combined experience across diverse legal disciplines to
          serve your needs.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <div
              key={area.title}
              className="group rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-400/15 text-accent-600 transition-colors group-hover:bg-accent-500 group-hover:text-primary-950 dark:text-accent-400">
                <area.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="font-display mt-5 text-xl font-bold text-primary-900 dark:text-white">
                {area.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {area.blurb}
              </p>
              <a
                href="#services"
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent-600 transition-colors group-hover:text-accent-700 dark:text-accent-400"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-gray-600 dark:text-gray-300">
          Not sure which practice area fits your needs?{' '}
          <a
            href="#home"
            className="font-semibold text-accent-600 underline-offset-4 hover:underline dark:text-accent-400"
          >
            Talk to our team
          </a>
          .
        </p>
      </div>
    </section>
  )
}
