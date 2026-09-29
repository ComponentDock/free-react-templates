import { Search, TrendingUp, Share2 } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'SEO/SEM',
    description:
      'Esteem spirit temper too say adieus who direct esteem. It esteems luckily or picture placing drawing.',
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description:
      'Esteem spirit temper too say adieus who direct esteem. It esteems luckily or picture placing drawing.',
  },
  {
    icon: Share2,
    title: 'Social Media',
    description:
      'Esteem spirit temper too say adieus who direct esteem. It esteems luckily or picture placing drawing.',
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service) => (
            <div key={service.title} className="text-center">
              <div className="w-16 h-16 mx-auto mb-5 bg-brand-purple rounded-full flex items-center justify-center">
                <service.icon className="w-8 h-8 text-brand-pink" />
              </div>
              <h3 className="text-xl font-semibold text-brand-navy mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
              <a
                href="#"
                className="text-brand-pink font-medium hover:text-pink-600 transition-colors inline-flex items-center gap-1"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
