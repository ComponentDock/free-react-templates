import { ArrowRight } from 'lucide-react'

const services = [
  { title: 'Special Rooms', image: 'roxyglow-service1' },
  { title: 'Swimming Pool', image: 'roxyglow-service2' },
  { title: 'Restaurant', image: 'roxyglow-service3' },
  { title: 'Suites & Rooms', image: 'roxyglow-service4', dark: true },
]

export function ServicesGrid() {
  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="group relative h-64 overflow-hidden">
              <img
                src={`https://picsum.photos/seed/${service.image}/600/400`}
                alt={service.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              {service.dark && <div className="absolute inset-0 bg-ink/70" />}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <h3 className="mb-3 font-heading text-xl font-bold text-white">{service.title}</h3>
                {service.dark && (
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 border-b-2 border-brand pb-1 text-sm font-medium text-white transition-colors hover:text-brand"
                  >
                    Learn More <ArrowRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
