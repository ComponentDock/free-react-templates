import { Target, TrendingUp, Shield } from 'lucide-react'

const services = [
  {
    icon: Target,
    title: 'Strategic Planning',
    description: 'Expert guidance to define your business direction and achieve long-term goals.',
  },
  {
    icon: TrendingUp,
    title: 'Trades & Stocks',
    description: 'Professional investment advice and market analysis for optimal portfolio growth.',
  },
  {
    icon: Shield,
    title: 'Audit & Assurance',
    description: 'Comprehensive financial auditing services to ensure compliance and transparency.',
  },
]

export function Services() {
  return (
    <section id="services" className="py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="text-center p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#04dbec]/10 rounded-full mb-6">
                <service.icon className="text-[#04dbec]" size={32} />
              </div>
              <h3
                className="text-xl font-semibold text-[#0b1c39] mb-4"
                style={{ fontFamily: 'Josefin Sans, sans-serif' }}
              >
                {service.title}
              </h3>
              <p className="text-[#506172]">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
