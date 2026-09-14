import { Droplets, Wind, Smartphone, Shield } from 'lucide-react'

interface ServiceItem {
  icon: React.ReactNode
  title: string
  description: string
}

const services: ServiceItem[] = [
  {
    icon: <Droplets className="h-8 w-8 text-brand" aria-hidden="true" />,
    title: 'Car wash 100% without detergents',
    description:
      'Our eco-friendly car wash process uses advanced water technology to clean your vehicle thoroughly without any harsh detergents or chemicals.',
  },
  {
    icon: <Wind className="h-8 w-8 text-brand" aria-hidden="true" />,
    title: 'Efficient surface drying machines',
    description:
      'State-of-the-art drying machines ensure a spotless, streak-free finish every time. No water marks, no hassle.',
  },
  {
    icon: <Smartphone className="h-8 w-8 text-brand" aria-hidden="true" />,
    title: 'We have an application',
    description:
      'Book your wash, track your service, and manage your account — all from our easy-to-use mobile app available on iOS and Android.',
  },
  {
    icon: <Shield className="h-8 w-8 text-brand" aria-hidden="true" />,
    title: 'Safe lacquer protection',
    description:
      'Our premium lacquer protection shields your paint from UV damage, scratches, and environmental contaminants for a lasting shine.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Services</span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-ink">Our Services</h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand/10">
                {service.icon}
              </div>
              <h3 className="mt-4 font-heading text-base font-bold text-ink">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
