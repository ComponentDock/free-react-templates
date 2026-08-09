import { Brush, Building2, Home, Recycle, Ruler, Sofa } from 'lucide-react'
import { Reveal } from './Reveal'

const services = [
  {
    title: 'Regular Cleaning',
    blurb:
      'Weekly, bi-weekly, or monthly visits to keep your home consistently fresh, tidy, and welcoming for your family.',
    Icon: Home,
  },
  {
    title: 'Deep Cleaning',
    blurb:
      'An intensive top-to-bottom clean that reaches every corner, baseboard, and hidden surface for a like-new feeling.',
    Icon: Brush,
  },
  {
    title: 'Move-In/Out Cleaning',
    blurb:
      'Comprehensive cleaning before you settle in or after you move out, helping you get your full deposit back.',
    Icon: Sofa,
  },
  {
    title: 'Commercial Cleaning',
    blurb:
      'Flexible office and retail cleaning schedules tailored to your business hours and specific requirements.',
    Icon: Building2,
  },
  {
    title: 'Post-Construction',
    blurb:
      'Dust, debris, and residue removal after renovations or new construction, making your space move-in ready.',
    Icon: Ruler,
  },
  {
    title: 'Green Cleaning',
    blurb:
      '100% eco-friendly products that are safe for children, pets, and the environment without sacrificing cleaning power.',
    Icon: Recycle,
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-gray-50 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
        <Reveal>
          <p className="text-center text-sm font-bold uppercase tracking-wider text-primary-600">
            Our Services
          </p>
          <h2 className="mt-2 text-center text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Cleaning Services for Every Need
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-base text-gray-600 dark:text-gray-400">
            From weekly home cleanings to large-scale commercial projects, we have the team and
            expertise to handle it all.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, blurb, Icon }, index) => (
            <Reveal key={title} delay={index * 100}>
              <div className="h-full rounded-2xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600 dark:bg-primary-900/60 dark:text-primary-300">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-gray-900 dark:text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {blurb}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
