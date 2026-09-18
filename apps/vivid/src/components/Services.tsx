import { Gem, Rocket, Settings, PenTool, Beaker, Layers } from 'lucide-react'

const services = [
  {
    icon: Gem,
    title: 'App Development',
    description: 'Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero.',
  },
  {
    icon: Rocket,
    title: 'Graphic Design',
    description: 'Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero.',
  },
  {
    icon: Settings,
    title: 'Creative Idea',
    description: 'Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero.',
  },
  {
    icon: Layers,
    title: 'Marketing',
    description: 'Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero.',
  },
  {
    icon: PenTool,
    title: 'Awesome Support',
    description: 'Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero.',
  },
  {
    icon: Beaker,
    title: 'Brand Design',
    description: 'Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero.',
  },
]

export function Services() {
  return (
    <section id="services" className="py-32">
      <div className="mx-auto max-w-6xl px-4">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="inline-block text-4xl font-bold text-heading">What we offer</h2>
          <div className="mx-auto mt-5 h-1 w-10 bg-primary" />
        </div>

        {/* Service grid */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="text-center">
              <service.icon className="mx-auto mb-5 text-4xl text-primary" size={40} />
              <h3 className="mb-3 text-xl font-bold text-heading">{service.title}</h3>
              <p className="leading-relaxed text-body">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
