import { Lightbulb, MessageCircle, Wrench } from 'lucide-react'
import { SERVICES } from '../data'

const ICONS = {
  wrench: Wrench,
  lightbulb: Lightbulb,
  chat: MessageCircle,
} as const

/* Services recreated from the source's services site-section: a green
   uppercase eyebrow with a black headline beside a three-card row, each
   card pairing a large light-gray icon with a bold heading and a Source
   Serif Pro paragraph. */

export function Services() {
  return (
    <section id="services" className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-14">
          <div>
            <h5 className="eyebrow">Services</h5>
            <h2 className="mt-4 text-3xl font-bold text-black md:text-4xl">What we do best</h2>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {SERVICES.map((service) => {
              const Icon = ICONS[service.icon]
              return (
                <div key={service.title} className="flex gap-4">
                  <Icon className="h-16 w-16 shrink-0 text-icon" aria-hidden="true" />
                  <div>
                    <h3 className="text-xl font-black text-black">{service.title}</h3>
                    <p className="mt-3 font-serif text-base font-light leading-relaxed text-ink">
                      {service.paragraph}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
