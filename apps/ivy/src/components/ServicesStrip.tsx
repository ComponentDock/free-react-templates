import { BookOpen, GraduationCap, Library, Trophy, type LucideIcon } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { SERVICES, type Service } from '../data'

const SERVICE_ICONS: Record<Service['icon'], LucideIcon> = {
  teachers: GraduationCap,
  education: BookOpen,
  library: Library,
  sports: Trophy,
}

/**
 * ServicesStrip — four full-width service cards alternating orange
 * (#fd5f00) and navy (#0d1128) backgrounds, each with a white circular
 * icon chip, a white title and a muted-white blurb. Stacks on mobile.
 */
export function ServicesStrip() {
  return (
    <section aria-label="University services" className="grid md:grid-cols-4">
      {SERVICES.map((service) => {
        const Icon = SERVICE_ICONS[service.icon]
        return (
          <div
            key={service.title}
            className={cn(
              'p-10 text-center',
              service.tone === 'primary' ? 'bg-primary' : 'bg-navy',
            )}
          >
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-primary">
              <Icon className="h-8 w-8" aria-hidden="true" />
            </span>
            <h2 className="mt-4 font-semibold uppercase text-white">{service.title}</h2>
            <p className="mt-2 text-sm text-white/80">{service.blurb}</p>
          </div>
        )
      })}
    </section>
  )
}
