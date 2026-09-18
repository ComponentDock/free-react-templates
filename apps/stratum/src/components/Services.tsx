import { Check } from 'lucide-react'

const services = [
  {
    title: 'Land & Property',
    description:
      'Comprehensive land survey and property assessment services backed by decades of geological expertise.',
    bullets: [
      'Accurate land surveys',
      'Property valuation',
      'Geological mapping',
      'Site preparation',
    ],
    image: 'https://picsum.photos/seed/stratum-service1/600/400',
    reversed: false,
  },
  {
    title: 'Surface Mining',
    description:
      'Advanced surface mining techniques that maximize yield while minimizing environmental impact.',
    bullets: [
      'Open-pit extraction',
      'Blasting operations',
      'Material hauling',
      'Environmental compliance',
    ],
    image: 'https://picsum.photos/seed/stratum-service2/600/400',
    reversed: true,
  },
]

export function Services() {
  return (
    <section id="services" className="py-16 md:py-20">
      {services.map((service) => (
        <div key={service.title} className="container mx-auto px-4">
          <div
            className={`flex flex-col ${service.reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 mb-16 last:mb-0`}
          >
            <div className="w-full lg:w-1/2">
              <div
                className="h-64 md:h-80 bg-cover bg-center rounded"
                style={{ backgroundImage: `url(${service.image})` }}
              />
            </div>
            <div className="w-full lg:w-5/12 lg:ml-auto">
              <h2 className="text-2xl font-heading uppercase text-black mb-4">{service.title}</h2>
              <p className="text-[#939393] mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2 text-[#939393]">
                    <Check className="w-5 h-5 text-[#ff8b00] mt-0.5 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
