import { Sunrise, Users, BookOpen, Heart, HeartHandshake, Calendar } from 'lucide-react'
import { services } from '../data'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Sunrise,
  Users,
  BookOpen,
  Heart,
  HeartHandshake,
  Calendar,
}

export function ChurchServices() {
  return (
    <section id="ministries" className="bg-warm-off py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-ink">Our Ministries</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon]
            return (
              <div
                key={service.title}
                className="rounded-none bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                {Icon && (
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <Icon className="h-8 w-8" />
                  </div>
                )}
                <h3 className="mb-3 text-lg font-bold text-ink">{service.title}</h3>
                <p className="text-sm leading-relaxed text-body">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
