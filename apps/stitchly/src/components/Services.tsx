import { Scissors, Ruler, Shirt, Sparkles } from 'lucide-react'

const services = [
  {
    icon: Scissors,
    title: 'Tailor Sewing',
    description: 'Precision stitching and handcrafted tailoring for garments that fit perfectly.',
  },
  {
    icon: Ruler,
    title: 'Measurements',
    description: 'Accurate body measurements taken by experienced professionals for the ideal fit.',
  },
  {
    icon: Shirt,
    title: 'Bespoke Suits',
    description: 'Custom-tailored suits crafted from premium fabrics to your exact specifications.',
  },
  {
    icon: Sparkles,
    title: 'Alterations',
    description: 'Expert alterations to refresh, resize, or restore your favorite garments.',
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl dark:text-white">
            Why use our service?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-mist">
            Quality craftsmanship, attention to detail, and a commitment to making you look your
            best.
          </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-paper dark:bg-gray-900">
                <service.icon className="h-8 w-8 text-brand" aria-hidden="true" />
              </div>
              <h3 className="mb-3 font-display text-lg font-bold text-ink dark:text-white">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-mist">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
