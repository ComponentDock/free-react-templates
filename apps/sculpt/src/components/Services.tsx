import { Dumbbell, HeartPulse, Target, Zap } from 'lucide-react'
import { SERVICES, SERVICES_COLLAGE } from '../data'
import { SectionHeading } from './SectionHeading'

const SERVICE_ICONS = [HeartPulse, Dumbbell, Target, Zap]

/**
 * Services — "Work hard stay humble" heading, a 2x2 grid of program
 * services with orange icons, and a photo collage on the right, capped
 * by a white skewed strip.
 */
export function Services() {
  return (
    <section id="services" aria-label="Services" className="relative bg-white pb-24 pt-16">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          title="Work hard stay humble"
          intro="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
        />
        <div className="mt-12 flex flex-col gap-10 lg:flex-row">
          <div className="grid gap-10 sm:grid-cols-2 lg:w-1/2">
            {SERVICES.map((service, index) => {
              const Icon = SERVICE_ICONS[index]!
              return (
                <div key={service.title} className="text-center">
                  <Icon className="mx-auto h-10 w-10 text-brand" aria-hidden="true" />
                  <h3 className="mt-4 text-lg">{service.title}</h3>
                  <p className="mt-2 text-sm text-neutral-500">{service.copy}</p>
                </div>
              )
            })}
          </div>
          <div className="grid grid-cols-2 gap-4 lg:w-1/2">
            <img
              src={SERVICES_COLLAGE[0]}
              alt="Gym classes"
              loading="lazy"
              className="col-span-2 h-60 w-full object-cover"
            />
            <img
              src={SERVICES_COLLAGE[1]}
              alt="Fitness training"
              loading="lazy"
              className="h-60 w-full object-cover"
            />
            <img
              src={SERVICES_COLLAGE[2]}
              alt="Workout session"
              loading="lazy"
              className="h-60 w-full object-cover"
            />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="mt-20 h-[120px] w-full bg-white [transform:skewY(4deg)]" />
    </section>
  )
}
