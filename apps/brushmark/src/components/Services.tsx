import { Code, Palette, Globe } from 'lucide-react'
import type { ReactNode } from 'react'

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="group rounded-lg bg-white p-8 text-center shadow-sm transition-all duration-300 hover:bg-brand-purple hover:text-white">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-paper text-brand-blue transition-colors group-hover:bg-white/20 group-hover:text-white">
        {icon}
      </div>
      <h3 className="mb-3 text-lg font-bold text-ink transition-colors group-hover:text-white">
        {title}
      </h3>
      <p className="mb-4 text-sm leading-relaxed text-mist transition-colors group-hover:text-white/80">
        {description}
      </p>
      <a
        href="#"
        className="text-sm font-semibold text-brand-blue transition-colors group-hover:text-white"
      >
        Learn More
      </a>
    </div>
  )
}

const services = [
  {
    icon: <Code size={28} />,
    title: 'Web Development',
    description:
      'Building fast, responsive, and scalable web applications using modern frameworks and best practices.',
  },
  {
    icon: <Palette size={28} />,
    title: 'UX/UI Design',
    description:
      'Crafting intuitive and beautiful user interfaces that delight users and drive engagement.',
  },
  {
    icon: <Globe size={28} />,
    title: 'WP Developing',
    description:
      'Custom WordPress themes and plugins tailored to your business needs with clean, maintainable code.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-paper py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-brand-pink">
            Our Service
          </p>
          <h2 className="text-3xl font-bold text-ink md:text-4xl">What Service We Offer For You</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
