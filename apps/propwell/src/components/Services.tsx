import { Home, Building, Key } from 'lucide-react'

const SERVICES = [
  {
    icon: Home,
    title: 'Property Management',
    description: 'We manage your properties with care and attention to detail.',
  },
  {
    icon: Building,
    title: 'Real Estate Consulting',
    description: 'Expert advice for all your real estate needs.',
  },
  {
    icon: Key,
    title: 'Rental Services',
    description: 'Find the perfect rental property for your needs.',
  },
]

export function Services() {
  return (
    <section
      className="relative py-20 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('https://picsum.photos/seed/propwell-services/1600/800')" }}
      aria-label="Our services"
    >
      <div className="absolute inset-0 bg-bg-dark/90" />
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left image */}
          <div className="hidden lg:block">
            <img
              src="https://picsum.photos/seed/propwell-service-img/600/400"
              alt="Our team"
              className="w-full object-cover"
            />
          </div>
          {/* Right services */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Our Services</h2>
            <div className="space-y-6">
              {SERVICES.map((service) => (
                <div key={service.title} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{service.title}</h3>
                    <p className="mt-1 text-white/70">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
