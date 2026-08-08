import { Bone, Smile, Siren, Sparkles, Stethoscope, Sun } from 'lucide-react'

const services = [
  {
    title: 'General Dentistry',
    description:
      'Comprehensive exams, cleanings, fillings, and preventive care to maintain your oral health and catch issues early.',
    icon: Stethoscope,
  },
  {
    title: 'Cosmetic Dentistry',
    description:
      'Veneers, bonding, and smile makeovers designed to enhance your natural beauty and boost your confidence.',
    icon: Sparkles,
  },
  {
    title: 'Dental Implants',
    description:
      'Permanent tooth replacement solutions that look, feel, and function like natural teeth for a lifetime of smiles.',
    icon: Bone,
  },
  {
    title: 'Orthodontics',
    description:
      'Traditional braces and clear aligners to straighten teeth and correct bite issues for patients of all ages.',
    icon: Smile,
  },
  {
    title: 'Teeth Whitening',
    description:
      'Professional in-office and take-home whitening treatments to brighten your smile by several shades safely.',
    icon: Sun,
  },
  {
    title: 'Emergency Care',
    description:
      'Same-day emergency appointments for toothaches, broken teeth, and other urgent dental needs when you need us most.',
    icon: Siren,
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
            Services
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Comprehensive Dental Care
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            From routine checkups to complete smile makeovers, we offer everything your smile needs
            under one roof.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-800"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
                <service.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
