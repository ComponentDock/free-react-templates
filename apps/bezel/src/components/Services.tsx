import { User, Shield, Headphones, Zap, Star, MessageCircle } from 'lucide-react'
import { services } from '../data'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  User,
  Shield,
  Headphones,
  Zap,
  Star,
  MessageCircle,
}

export function Services() {
  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold text-body">Services We Provide</h2>
          <p className="text-muted">Comprehensive solutions for all your needs</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon]
            return (
              <div key={service.title} className="rounded-xl bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  {Icon && <Icon className="h-5 w-5" />}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-body">{service.title}</h3>
                <p className="text-sm text-muted">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
