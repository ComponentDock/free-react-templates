import { Mail, Monitor, Smartphone, Search } from 'lucide-react'

const services = [
  {
    icon: Mail,
    title: 'Email Design',
    description:
      'Crafting compelling email campaigns that engage audiences and drive conversions through thoughtful design.',
  },
  {
    icon: Monitor,
    title: 'Web Design',
    description:
      'Building stunning, responsive websites that captivate visitors and elevate your digital presence.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Design',
    description:
      'Creating intuitive mobile experiences that delight users across every platform and device.',
  },
  {
    icon: Search,
    title: 'Research',
    description:
      'Deep user research and analytics to inform strategies that deliver measurable results.',
  },
] as const

export function Services() {
  return (
    <section id="services" className="py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, description }) => (
            <div key={title} className="text-center">
              <Icon className="mx-auto mb-4 text-brand" size={48} strokeWidth={1.5} />
              <h3 className="mb-2 font-sans text-lg">{title}</h3>
              <p className="text-sm leading-relaxed text-body-text">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
