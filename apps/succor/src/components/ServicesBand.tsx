import { cn } from '@free-react-templates/ui'
import { BookOpen, HandHeart, HeartHandshake, Users, type LucideIcon } from 'lucide-react'
import { SERVICES, type ServiceIconName } from '../data'

/* Source flaticon icon fonts → lucide equivalents (60px, rgba(0,0,0,0.2)):
   flaticon-charity → HandHeart · flaticon-adoption → Users ·
   flaticon-volunteer → HeartHandshake · flaticon-open-book → BookOpen. */
const serviceIcons: Record<ServiceIconName, LucideIcon> = {
  help: HandHeart,
  adoption: Users,
  volunteering: HeartHandshake,
  education: BookOpen,
}

export function ServicesBand() {
  return (
    /* section.services-section — light gray #f8f9fa band of 4 equal cards
       (2-col tablet, 1-col mobile); the "Volunteering" card (.active) gets
       a #ffb400 background on desktop. */
    <section aria-label="Services" className="bg-mist py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service) => {
          const Icon = serviceIcons[service.icon]
          return (
            <div
              key={service.title}
              className={cn('p-[40px_25px] transition-colors', service.active && 'lg:bg-brand')}
            >
              <Icon aria-hidden="true" className="h-[60px] w-[60px] text-black/20" />
              <h3 className="mb-3 mt-4 text-[22px] font-black text-black">{service.title}</h3>
              <p className="text-[16px] leading-relaxed text-gray-600">{service.blurb}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
