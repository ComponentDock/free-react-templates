import { Building2, Paintbrush, Lightbulb } from 'lucide-react'

const services = [
  {
    icon: Building2,
    title: 'Architecture',
    description:
      'If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $17 each.',
  },
  {
    icon: Paintbrush,
    title: 'Interior Design',
    description:
      'If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $17 each.',
  },
  {
    icon: Lightbulb,
    title: 'Concept Design',
    description:
      'If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $17 each.',
  },
  {
    icon: Building2,
    title: 'Architecture',
    description:
      'If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $17 each.',
  },
  {
    icon: Paintbrush,
    title: 'Interior Design',
    description:
      'If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $17 each.',
  },
  {
    icon: Lightbulb,
    title: 'Concept Design',
    description:
      'If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $17 each.',
  },
]

export function Features() {
  return (
    <section id="services" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold uppercase text-gray-900 font-[family-name:var(--font-heading)]">
            Offerings to my clients
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-gray-500">
            If you are looking at blank cassettes on the web, you may be very confused at the
            difference in price. You may see some for as low as $.17 each.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }, i) => (
            <div
              key={`${title}-${i}`}
              className="rounded-lg bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <Icon className="mx-auto mb-4 h-10 w-10 text-periwinkle-400" aria-hidden="true" />
              <h3 className="text-lg font-bold text-gray-900 font-[family-name:var(--font-heading)]">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
