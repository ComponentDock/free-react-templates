import { Check } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const services = [
  {
    title: 'Land & Property',
    description:
      'We provide comprehensive land and property development services, from initial surveys to final construction. Our team ensures every project meets the highest standards of quality and safety.',
    imageSeed: 'digger-land',
    checks: [
      'Professional Surveying',
      'Property Assessment',
      'Development Planning',
      'Quality Assurance',
    ],
  },
  {
    title: 'Surface Mining',
    description:
      'Our surface mining operations utilize cutting-edge technology to extract resources efficiently and responsibly. We prioritize environmental stewardship in every project.',
    imageSeed: 'digger-mining',
    checks: ['Modern Equipment', 'Environmental Safety', 'Efficient Extraction', '24/7 Operations'],
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center text-heading mb-16">
          Our Services
        </h2>

        <div className="space-y-20">
          {services.map((service, i) => {
            const reversed = i % 2 === 1
            return (
              <div
                key={service.title}
                className={cn(
                  'flex flex-col gap-8 items-center',
                  reversed ? 'md:flex-row-reverse' : 'md:flex-row',
                )}
              >
                <div className="md:w-1/2">
                  <img
                    src={`https://picsum.photos/seed/${service.imageSeed}/600/400`}
                    alt={service.title}
                    className="rounded-lg w-full h-64 object-cover"
                  />
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold font-heading text-heading mb-4">
                    {service.title}
                  </h3>
                  <p className="text-body leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.checks.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <Check size={18} className="text-green-accent flex-shrink-0" />
                        <span className="text-sm text-heading">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
