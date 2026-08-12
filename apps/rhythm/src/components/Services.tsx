import { Briefcase, GraduationCap, Heart, Music2, Play } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { services, servicesLeftImage, serviceVideoUrl, type ServiceItem } from '../data'

const serviceIcons = {
  wedding: Heart,
  clubs: Music2,
  lessons: GraduationCap,
  corporate: Briefcase,
} as const

// Full-bleed services band: photo column with a circular play button and a
// 2x2 grid of purple tiles with alternating brand / deep-bg backgrounds.
export function Services() {
  return (
    <section className="bg-paper">
      <div className="grid lg:grid-cols-2">
        <div
          className="relative min-h-[420px] bg-cover bg-center"
          style={{ backgroundImage: `url(${servicesLeftImage})` }}
        >
          <a
            href={serviceVideoUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Watch the DJ set video"
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="inline-flex h-[90px] w-[90px] items-center justify-center rounded-full bg-white/30 text-brand transition hover:bg-white/50">
              <Play className="h-7 w-7" />
            </span>
          </a>
        </div>
        <div className="grid sm:grid-cols-2">
          {services.map((service, index) => (
            <ServiceTile key={service.title} service={service} deep={index % 2 === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceTile({ service, deep }: { service: ServiceItem; deep: boolean }) {
  const Icon = serviceIcons[service.icon]
  return (
    <div
      className={cn(
        'flex h-[320px] flex-col justify-start gap-4 p-[70px_40px_40px_70px]',
        deep ? 'bg-brand-deep' : 'bg-brand',
      )}
    >
      <Icon className="h-10 w-10 text-white" />
      <h4 className="font-display text-[24px] font-bold uppercase text-white">{service.title}</h4>
      <p className="text-sm leading-relaxed text-white/80">{service.blurb}</p>
    </div>
  )
}
