import { Globe, Palette, Users, Code, Smartphone, Layout } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Digital Strategy',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    icon: Palette,
    title: 'Web Design',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    icon: Users,
    title: 'User Experience',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    icon: Code,
    title: 'Web Development',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    icon: Layout,
    title: 'WordPress Solutions',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Applications',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-dark-section">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-white mb-12">
          My Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="bg-dark-card p-8 rounded-lg text-center hover:bg-dark-bg transition-colors"
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-brand/20 rounded-full flex items-center justify-center">
                  <Icon size={24} className="text-brand" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
