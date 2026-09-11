import { Briefcase, BarChart3, Users, Shield, TrendingUp, PiggyBank } from 'lucide-react'
import type { ReactNode } from 'react'

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="text-primary-300 mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-ink mb-2">{title}</h3>
      <p className="text-smoke text-sm leading-relaxed">{description}</p>
    </div>
  )
}

const services = [
  {
    icon: <Briefcase size={32} />,
    title: 'Business Consulting',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
  },
  {
    icon: <BarChart3 size={32} />,
    title: 'Market Analysis',
    description: 'Separated they live in Bookmarksgrove right at the coast of the Semantics.',
  },
  {
    icon: <Users size={32} />,
    title: 'User Monitoring',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    icon: <Shield size={32} />,
    title: 'Insurance Consulting',
    description:
      'It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
  },
  {
    icon: <TrendingUp size={32} />,
    title: 'Financial Investment',
    description: 'Even the all-powerful Pointing has no control about the blind texts.',
  },
  {
    icon: <PiggyBank size={32} />,
    title: 'Financial Management',
    description: 'It is an almost unorthographic life one day however a small line.',
  },
]

export function Services() {
  return (
    <section id="services-section" className="py-20 border-b border-gray-200 bg-mist">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary-300 font-semibold text-sm uppercase tracking-wider">
            Services
          </span>
          <h2 className="text-3xl font-bold text-ink mt-2">Our Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
