import { Monitor, Camera, BarChart3, Smartphone, Lightbulb, Search } from 'lucide-react'
import type { ReactNode } from 'react'

interface Service {
  icon: ReactNode
  title: string
  description: string
}

const SERVICES: Service[] = [
  {
    icon: <Monitor size={28} />,
    title: 'Web Design',
    description: 'Crafting beautiful, responsive websites that engage users and drive results.',
  },
  {
    icon: <Camera size={28} />,
    title: 'Photography',
    description: 'Professional photography services to capture your brand essence and story.',
  },
  {
    icon: <BarChart3 size={28} />,
    title: 'Marketing',
    description:
      'Strategic marketing campaigns that connect with your audience and grow your brand.',
  },
  {
    icon: <Smartphone size={28} />,
    title: 'App Development',
    description: 'Building intuitive mobile applications that users love and keep coming back to.',
  },
  {
    icon: <Lightbulb size={28} />,
    title: 'Branding',
    description: 'Creating memorable brand identities that stand out in a crowded marketplace.',
  },
  {
    icon: <Search size={28} />,
    title: 'Search Ranking',
    description: 'Optimizing your online presence to rank higher and attract more organic traffic.',
  },
]

export function Services() {
  return (
    <section id="services-section" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="font-mulish mb-2 text-4xl font-bold text-ink">Services</h2>
          <p className="font-roboto-mono text-muted">The skills to pay the bills.</p>
          <svg
            viewBox="0 0 100 12"
            preserveAspectRatio="none"
            className="mx-auto mt-4 h-3 w-24 text-primary"
          >
            <path
              d="M0,6 Q12,0 25,6 T50,6 T75,6 T100,6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div key={service.title} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                {service.icon}
              </div>
              <h3 className="font-mulish mb-2 text-xl font-bold text-ink">{service.title}</h3>
              <p className="font-roboto-mono text-sm text-muted">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
