import { Scale, Building2, ShieldCheck, Fingerprint, Landmark, BookOpen } from 'lucide-react'
import type { ReactNode } from 'react'

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="group rounded-lg bg-gray-50 p-8 transition-all duration-300 hover:bg-brand hover:text-white">
      <div className="mb-4 text-brand transition-colors group-hover:text-white">{icon}</div>
      <h4 className="mb-3 text-lg font-bold">{title}</h4>
      <p className="text-sm leading-relaxed text-gray-600 transition-colors group-hover:text-white/80">
        {description}
      </p>
    </div>
  )
}

const services = [
  {
    icon: <Scale size={32} />,
    title: 'Counsel',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    icon: <Building2 size={32} />,
    title: 'Legal Dept',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    icon: <ShieldCheck size={32} />,
    title: 'Compliance',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    icon: <Fingerprint size={32} />,
    title: 'Identity',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    icon: <Landmark size={32} />,
    title: 'Hall of Justice',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    icon: <BookOpen size={32} />,
    title: 'Law Abiding',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-charcoal">Our Services</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
