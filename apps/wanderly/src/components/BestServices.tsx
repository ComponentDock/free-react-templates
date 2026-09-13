import { Plane, Map, Building, Compass } from 'lucide-react'

interface ServiceProps {
  icon: React.ReactNode
  title: string
  description: string
}

const services: ServiceProps[] = [
  {
    icon: <Plane size={40} />,
    title: 'Transportation',
    description: 'All transportation costs we bear',
  },
  { icon: <Map size={40} />, title: 'Guidance', description: 'We offer the best guidance for you' },
  {
    icon: <Building size={40} />,
    title: 'Accommodation',
    description: 'Luxurious and comfortable stays',
  },
  {
    icon: <Compass size={40} />,
    title: 'Discover World',
    description: 'Best tour plan for your next trip',
  },
]

export function BestServices() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">
            We offered best services
          </h2>
          <p className="text-smoke max-w-xl mx-auto">
            From planning to execution, we handle every aspect of your journey with care and
            expertise.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.title} className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary-50 flex items-center justify-center text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">{service.title}</h3>
              <p className="text-smoke text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
