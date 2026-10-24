import { ButtonLink } from '@free-react-templates/ui'
import { services } from '../data'
import type { ServiceVariant } from '../data'
import { SectionHeading } from './SectionHeading'

const servicesImage = 'https://picsum.photos/seed/amberline-services/900/1200'

const cardClasses: Record<ServiceVariant, string> = {
  ink: 'bg-ink text-white/80',
  brand: 'bg-brand text-ink/80',
  plain: 'bg-white text-body',
}

const titleClasses: Record<ServiceVariant, string> = {
  ink: 'text-white',
  brand: 'text-ink',
  plain: 'text-black/80',
}

const chipClasses: Record<ServiceVariant, string> = {
  ink: 'text-brand',
  brand: 'text-ink',
  plain: 'text-deep-amber',
}

export function Services() {
  return (
    <section id="services" className="bg-page py-24 lg:py-32">
      <div className="mx-auto max-w-[1320px] px-4">
        <SectionHeading eyebrow="What We Do" title="Services" />
        <div className="mt-14 grid items-start gap-8 md:grid-cols-2">
          <img
            src={servicesImage}
            alt="Steel frame rising behind scaffolding"
            loading="lazy"
            className="h-[420px] w-full object-cover md:h-[720px]"
          />
          <ul className="space-y-5">
            {services.map((service) => (
              <li key={service.title} className={`p-[30px] ${cardClasses[service.variant]}`}>
                <service.icon aria-hidden="true" className="size-[60px]" />
                <h3 className={`mt-4 text-[26px] font-medium ${titleClasses[service.variant]}`}>
                  {service.title}
                </h3>
                <p className="mt-3">{service.body}</p>
                <ButtonLink
                  href="#contact"
                  className={`mt-5 h-auto rounded-[2px] border-none bg-transparent px-[10px] py-1 text-[13px] font-bold uppercase ${chipClasses[service.variant]} hover:bg-transparent hover:opacity-80`}
                >
                  Learn more
                </ButtonLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
