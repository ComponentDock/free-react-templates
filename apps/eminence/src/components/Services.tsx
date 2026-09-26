import { Building2, Paintbrush, Lightbulb } from 'lucide-react'

const services = [
  {
    icon: Building2,
    title: 'Architecture',
    description:
      'Creating innovative architectural designs that blend form and function, delivering spaces that inspire and endure.',
  },
  {
    icon: Paintbrush,
    title: 'Interior Design',
    description:
      'Transforming interiors into beautiful, functional environments that reflect personal style and maximize comfort.',
  },
  {
    icon: Lightbulb,
    title: 'Concept Design',
    description:
      'Developing creative concepts from initial ideation to polished presentations, bringing visionary ideas to life.',
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 font-[var(--font-heebo)]">
            Offerings to My Clients
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Delivering high-quality creative services across design disciplines, tailored to bring
            your vision to reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="text-center p-8 rounded-lg hover:shadow-md transition-shadow"
            >
              <Icon size={40} className="mx-auto mb-4 text-brand" />
              <h3 className="text-xl font-bold mb-3 font-[var(--font-heebo)]">{title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
