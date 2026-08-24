import { Layers, Headphones, Smartphone } from 'lucide-react'

const services = [
  {
    icon: Layers,
    title: 'Unlimited Components',
    description:
      'Combine sections from our vast component library and create beautiful layouts with ease.',
  },
  {
    icon: Headphones,
    title: 'Awesome Support',
    description:
      'Our dedicated support team is available 24/7 to help you resolve any issues quickly.',
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description:
      'Every component is fully responsive and looks great on all devices and screen sizes.',
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-navy mb-4">
            Spruce helps you to showcase your product's features.
          </h2>
          <p className="text-muted font-body text-lg">
            Combine sections from our vast component library and create beautiful.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((s) => (
            <div key={s.title} className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-brand/10 flex items-center justify-center">
                <s.icon className="w-8 h-8 text-brand" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-navy mb-3">{s.title}</h3>
              <p className="text-body font-body leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
