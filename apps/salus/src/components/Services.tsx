import { HeartPulse, Ambulance, Stethoscope } from 'lucide-react'
import { services } from '../data'

interface ServicesProps {
  onOpenAppointment: () => void
}

const icons = [HeartPulse, Ambulance, Stethoscope]

export function Services({ onOpenAppointment }: ServicesProps) {
  return (
    <section id="services" aria-label="Services" className="bg-band">
      <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-3">
        {services.map((service, i) => {
          const Icon = icons[i]!
          const isMiddle = i === 1
          const isLast = i === services.length - 1
          return (
            <div key={service.title} className={`px-8 py-10 ${isMiddle ? 'bg-sky' : ''}`}>
              <Icon className="h-12 w-12 text-white" aria-hidden="true" />
              <h3 className="mt-5 text-[26px] font-medium text-white">{service.title}</h3>
              <p className="mt-3 text-base leading-7 text-white">{service.blurb}</p>
              {isLast ? (
                <button
                  type="button"
                  onClick={onOpenAppointment}
                  className="mt-7 rounded border border-white px-6 py-2.5 text-[15px] text-white transition-colors hover:bg-white hover:text-brand"
                >
                  {service.cta}
                </button>
              ) : (
                <a
                  href={isMiddle ? '#contact' : '#services'}
                  className="mt-7 inline-block rounded border border-white px-6 py-2.5 text-[15px] text-white transition-colors hover:bg-white hover:text-brand"
                >
                  {service.cta}
                </a>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
