import { Map, Shield, Clock, Smile } from 'lucide-react'

interface ServiceItem {
  icon: React.ReactNode
  title: string
}

const SERVICES: ServiceItem[] = [
  {
    icon: <Map size={40} className="text-brand" />,
    title: '8000+ Our Local Guides',
  },
  {
    icon: <Shield size={40} className="text-brand" />,
    title: '100% Trusted Tour Agency',
  },
  {
    icon: <Clock size={40} className="text-brand" />,
    title: '28+ Years of Travel Experience',
  },
  {
    icon: <Smile size={40} className="text-brand" />,
    title: '98% Our Travelers are Happy',
  },
]

export function Services() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="border border-card-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="font-heading text-lg font-semibold text-heading">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
