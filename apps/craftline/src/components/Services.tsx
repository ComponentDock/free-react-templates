import { Lightbulb, Database, Smartphone, Layers, PenTool, Globe } from 'lucide-react'

const services = [
  {
    icon: Lightbulb,
    title: 'Innovative Ideas',
    description: 'Separated they live in Bookmarksgrove right at the coast of the Semantics.',
    color: 'text-brand',
  },
  {
    icon: Database,
    title: 'Software',
    description: 'Separated they live in Bookmarksgrove right at the coast of the Semantics.',
    color: 'text-emerald-500',
  },
  {
    icon: Smartphone,
    title: 'Application',
    description: 'Separated they live in Bookmarksgrove right at the coast of the Semantics.',
    color: 'text-violet-500',
  },
  {
    icon: Layers,
    title: 'Graphic Design',
    description: 'Separated they live in Bookmarksgrove right at the coast of the Semantics.',
    color: 'text-amber-500',
  },
  {
    icon: PenTool,
    title: 'Branding',
    description: 'Separated they live in Bookmarksgrove right at the coast of the Semantics.',
    color: 'text-rose-500',
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Separated they live in Bookmarksgrove right at the coast of the Semantics.',
    color: 'text-cyan-500',
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-bg-secondary">
      <div className="max-w-4xl mx-auto">
        <span className="text-sm font-medium text-brand uppercase tracking-wider">What I do?</span>
        <h2 className="text-3xl font-bold text-text-primary mt-2 mb-10">
          Here are some of my expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="text-center p-6">
              <service.icon className={`w-10 h-10 ${service.color} mx-auto mb-4`} />
              <h3 className="text-lg font-semibold text-text-primary mb-2">{service.title}</h3>
              <p className="text-sm text-text-secondary">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
