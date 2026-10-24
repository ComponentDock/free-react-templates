import type { ReactElement } from 'react'
import { Activity, Bike, Dumbbell, Wind } from 'lucide-react'
import { ButtonLink, cn } from '@free-react-templates/ui'
import { SectionHeading } from './SectionHeading'
import { btn } from './action'
import {
  services,
  servicesCta,
  servicesHref,
  servicesHeading,
  servicesLabel,
  type ServiceIcon,
} from '../data'

const icons: Record<ServiceIcon, ReactElement> = {
  pilates: <Activity className="h-[38px] w-[38px]" aria-hidden="true" />,
  lifting: <Dumbbell className="h-[38px] w-[38px]" aria-hidden="true" />,
  yoga: <Wind className="h-[38px] w-[38px]" aria-hidden="true" />,
  spinning: <Bike className="h-[38px] w-[38px]" aria-hidden="true" />,
}

export function Services() {
  return (
    <section id="services" aria-label="Our services" className="bg-ink pb-[90px] pt-[95px]">
      <div className="mx-auto max-w-[1170px] px-4">
        <SectionHeading label={servicesLabel} title={servicesHeading} />

        <div className="grid gap-[40px] sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article key={service.title}>
              <div className="mb-[50px] text-brand">{icons[service.icon]}</div>
              <h3 className="mb-[22px] text-[18px] font-bold uppercase tracking-[1.5px] text-white">
                {service.title}
              </h3>
              <p className="text-[14.5px] leading-[30px] text-body">{service.copy}</p>
            </article>
          ))}
        </div>

        <div className="pt-[70px] text-center">
          <ButtonLink href={servicesHref} className={cn(btn.base, btn.filled)}>
            {servicesCta}
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
