import { Droplets, Wind, Smartphone, Shield } from 'lucide-react'

interface ServiceItem {
  icon: typeof Droplets
  title: string
  description: string
}

const SERVICES: ServiceItem[] = [
  {
    icon: Droplets,
    title: 'Car wash 100% without detergents',
    description:
      'Eco-friendly water-based cleaning that protects your paint while delivering a spotless finish every time.',
  },
  {
    icon: Wind,
    title: 'Efficient surface drying machines',
    description:
      'High-velocity air dryers eliminate water spots and streaks, leaving your vehicle perfectly dry and polished.',
  },
  {
    icon: Smartphone,
    title: 'We have an application',
    description:
      'Book your wash, track progress, and earn rewards — all from our convenient mobile app available on iOS and Android.',
  },
  {
    icon: Shield,
    title: 'Safe lacquer protection',
    description:
      'Premium ceramic and wax coatings that shield your paint from UV rays, dirt, and environmental contaminants.',
  },
]

export function Services() {
  return (
    <section className="py-20 lg:py-28 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2
            className="text-3xl sm:text-4xl font-bold font-[Work_Sans] mb-4"
            style={{ color: '#010A44' }}
          >
            Why take our services?
          </h2>
          <p style={{ color: '#10285d' }}>
            We combine cutting-edge technology with experienced professionals to deliver exceptional
            car care. Every service is tailored to your vehicle&apos;s specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => {
            const Icon = service.icon
            return (
              <div key={service.title} className="text-center lg:text-left">
                <div className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center mx-auto lg:mx-0 mb-4">
                  <Icon size={28} className="text-brand" />
                </div>
                <h3
                  className="text-lg font-bold mb-2 font-[Work_Sans]"
                  style={{ color: '#010A44' }}
                >
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#10285d' }}>
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
