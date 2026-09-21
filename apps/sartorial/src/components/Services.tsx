import { Ruler, Scissors, RefreshCcw } from 'lucide-react'

const services = [
  {
    icon: Ruler,
    title: 'Perfect Body Measurements',
    description:
      'Every garment begins with precision measurements taken by our master tailors, ensuring an impeccable fit every time.',
  },
  {
    icon: Scissors,
    title: 'Premium Style Cutting',
    description:
      'From classic cuts to contemporary silhouettes, our artisans shape fabric with decades of expertise and an eye for detail.',
  },
  {
    icon: RefreshCcw,
    title: 'Restoration with Sincerity',
    description:
      'We restore and alter garments with the same care and dedication as creating new pieces, honoring every stitch.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <span className="font-script text-3xl text-brand">What we offer</span>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink md:text-4xl">
            What We Offer
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="rounded-sm border border-gray-100 p-8 text-center transition-shadow hover:shadow-lg"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Icon size={32} />
                </div>
                <h3 className="mb-4 font-display text-xl font-bold text-ink">{service.title}</h3>
                <p className="text-mist">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
