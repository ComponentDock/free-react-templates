import { Armchair, Bath, BedDouble, Lamp } from 'lucide-react'
import { services, type ServiceIcon } from '../data'
import { SectionHeading } from './SectionHeading'

const icons: Record<ServiceIcon, typeof Lamp> = {
  lamp: Lamp,
  bed: BedDouble,
  armchair: Armchair,
  bath: Bath,
}

/* Four centred features, each with a 90px circular brand-tinted icon chip. */
export function Services() {
  return (
    <section id="services" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="Our Services Includes..." centered />
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = icons[service.icon]
            return (
              <div key={service.icon} className="text-center">
                <span className="mx-auto mb-6 flex h-[90px] w-[90px] items-center justify-center rounded-full bg-brand/10">
                  <Icon aria-hidden="true" className="h-[50px] w-[50px] text-brand" />
                </span>
                <h3 className="font-display text-xl font-bold text-ink">{service.title}</h3>
                <p className="mt-3 text-body">{service.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
