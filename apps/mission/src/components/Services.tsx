import { Droplets, GraduationCap, Pill } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { services } from '../data'

const icons: Record<string, LucideIcon> = {
  droplets: Droplets,
  pill: Pill,
  graduation: GraduationCap,
}

/** Centered "We Serve For Peoples" section with 3 service cards, each with
 *  a circular icon container. */
export function Services() {
  return (
    <section id="impact" aria-label="Services" className="py-20 lg:py-[120px]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-[60px] text-center">
          <p className="mb-2 text-sm tracking-[2px] text-brand">We Work For</p>
          <h2 className="font-serif text-3xl font-normal text-maroon lg:text-[46px] lg:leading-[56px]">
            We Serve For Peoples
          </h2>
        </div>
        <div className="grid gap-10 text-center md:grid-cols-3">
          {services.map((service) => {
            const Icon = icons[service.icon]!
            return (
              <div key={service.title} className="px-[30px]">
                <div className="mx-auto flex h-[98px] w-[98px] items-center justify-center rounded-full bg-rose text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <Icon aria-hidden="true" className="h-[45px] w-[45px]" />
                </div>
                <h3 className="mt-6 mb-[13px] text-2xl font-normal text-maroon">{service.title}</h3>
                <p className="text-base leading-7 text-ink">{service.paragraph}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
