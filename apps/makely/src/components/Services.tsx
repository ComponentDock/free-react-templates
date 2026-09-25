import { Monitor, ShoppingCart, Layout, Palette, Pen, Smartphone } from 'lucide-react'

const services = [
  {
    icon: Monitor,
    title: 'Web Design',
    description:
      'Beautiful, responsive designs that capture your brand essence and engage your audience.',
  },
  {
    icon: ShoppingCart,
    title: 'eCommerce',
    description: 'Custom online stores with seamless checkout experiences that drive conversions.',
  },
  {
    icon: Layout,
    title: 'Web Applications',
    description:
      'Scalable, modern web apps built with cutting-edge technologies for optimal performance.',
  },
  {
    icon: Palette,
    title: 'Branding',
    description:
      'Complete brand identity packages that make your business stand out from the crowd.',
  },
  {
    icon: Pen,
    title: 'Copywriting',
    description: 'Compelling content that tells your story and connects with your target audience.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Applications',
    description: 'Native and cross-platform mobile apps that deliver exceptional user experiences.',
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-lg p-8 shadow-sm border border-makely-border text-center hover:shadow-md transition-shadow"
            >
              <service.icon size={48} className="text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-makely-body mb-4">{service.description}</p>
              <a
                href="#"
                className="text-primary hover:text-primary-dark transition-colors font-medium"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
