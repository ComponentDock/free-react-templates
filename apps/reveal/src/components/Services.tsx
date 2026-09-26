import { Settings, MessageCircle, BookOpen, Code, Globe, Palette } from 'lucide-react'

const services = [
  {
    icon: Settings,
    title: 'Digital Strategy',
    description: 'Strategic digital solutions tailored to your business goals and market position.',
  },
  {
    icon: MessageCircle,
    title: 'Web Design',
    description: 'Beautiful, responsive designs that captivate users and drive engagement.',
  },
  {
    icon: BookOpen,
    title: 'User Experience',
    description:
      'Intuitive interfaces crafted through research and user-centered design principles.',
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Robust, scalable web applications built with modern technologies.',
  },
  {
    icon: Globe,
    title: 'WordPress Solutions',
    description: 'Custom WordPress themes and plugins for content-driven websites.',
  },
  {
    icon: Palette,
    title: 'Branding',
    description: 'Complete brand identity systems that communicate your unique value.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-light-bg py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-3xl font-bold">My Services</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="text-center">
              <service.icon className="mx-auto mb-4 text-brand" size={40} />
              <h3 className="mb-3 text-lg font-bold">{service.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
