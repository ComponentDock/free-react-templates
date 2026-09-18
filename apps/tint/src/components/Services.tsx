import { Clock, Hammer, Paintbrush, Wrench, HardHat, Ruler } from 'lucide-react'

const services = [
  {
    icon: Clock,
    title: 'Flexible Working Hours',
    description:
      'We adapt to your schedule, ensuring minimal disruption while delivering exceptional interior design solutions on your timeline.',
  },
  {
    icon: Hammer,
    title: 'Building Construction',
    description:
      'From structural changes to complete build-outs, our construction team handles every phase with precision and expertise.',
  },
  {
    icon: Paintbrush,
    title: 'Building Renovation',
    description:
      'Transform outdated spaces into modern masterpieces with our comprehensive renovation services and fresh design perspectives.',
  },
  {
    icon: Wrench,
    title: 'Building Maintenance',
    description:
      'Keep your spaces looking their best with our ongoing maintenance programs and rapid-response repair services.',
  },
  {
    icon: HardHat,
    title: 'Interior Styling',
    description:
      'Curated furniture selection, art placement, and accessory styling to bring warmth and personality to every room.',
  },
  {
    icon: Ruler,
    title: 'Space Planning',
    description:
      'Optimize your floor plans for flow, function, and aesthetic harmony with our professional space planning expertise.',
  },
]

export function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <div key={i} className="flex gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center bg-gold-400/10 text-gold-500">
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-navy-800 font-[family-name:var(--font-condensed)]">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-500">{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
