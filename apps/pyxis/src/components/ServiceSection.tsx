import { Monitor, Wand2, Settings, Users, Puzzle, Gift } from 'lucide-react'

const services = [
  { icon: Monitor, title: 'Responsive Framework' },
  { icon: Wand2, title: 'Geniusly Transformable' },
  { icon: Settings, title: 'Powerfully Customizable' },
  { icon: Users, title: 'Industrial Support' },
  { icon: Puzzle, title: 'Extensively Extendable' },
  { icon: Gift, title: 'Beautifully Presented' },
]

export function ServiceSection() {
  return (
    <section id="services" className="py-0">
      <div className="flex flex-col md:flex-row">
        <div className="relative w-full md:w-5/12">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://picsum.photos/seed/pyxis-service/800/600)' }}
          />
          <div className="absolute inset-0 bg-overlay" />
        </div>
        <div className="w-full bg-white px-4 py-12 md:w-7/12 md:py-0">
          <div className="grid grid-cols-2 gap-0">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-col items-center border-b border-r border-gray-100 py-8 text-center last:border-r-0 [&:nth-last-child(-n+2)]:border-b-0"
              >
                <service.icon size={28} className="mb-3 text-brand" />
                <h6 className="text-sm font-semibold text-heading">{service.title}</h6>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
