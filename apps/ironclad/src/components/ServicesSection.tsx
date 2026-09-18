import { Building2, Paintbrush, Hammer } from 'lucide-react'

const SERVICES = [
  {
    icon: Building2,
    title: 'Architecture',
    image: 'https://picsum.photos/seed/ironclad-arch/400/300',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia',
  },
  {
    icon: Paintbrush,
    title: 'Renovation',
    image: 'https://picsum.photos/seed/ironclad-renov/400/300',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia',
  },
  {
    icon: Hammer,
    title: 'Construction',
    image: 'https://picsum.photos/seed/ironclad-build/400/300',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia',
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-brand-400 font-medium text-sm uppercase tracking-wide">
            Our Services
          </span>
          <h2 className="text-3xl font-bold text-dark mt-2">We Offer Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="w-12 h-12 bg-brand-400/10 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-brand-400" />
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-2">{service.title}</h3>
                  <p className="text-body text-sm leading-relaxed mb-4">{service.description}</p>
                  <a
                    href="#"
                    className="text-brand-400 hover:text-brand-500 font-medium text-sm transition-colors"
                  >
                    Read more →
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
