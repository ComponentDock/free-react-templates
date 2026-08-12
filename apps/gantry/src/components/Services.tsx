import { HardHat, Compass, DraftingCompass, Clipboard, type LucideIcon } from 'lucide-react'
import { SERVICES, type Service } from '../data'

/* Service icon map — one lucide icon per data key (the source used
   flaticon glyphs; lucide keeps the same visual kinds). */
const SERVICE_ICONS: Record<Service['icon'], LucideIcon> = {
  HardHat,
  Compass,
  DraftingCompass,
  Clipboard,
}

/* Services — the white "What We Do" section: centered orange subtitle +
   black section title + four numbered cards (01–04, icon badge, h3, p)
   separated by 1px #efefef borders, stacking below lg. */
export function Services() {
  return (
    <section aria-label="What We Do" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="font-heading text-xl font-light uppercase tracking-[0.2em] text-brand">
            What We Do
          </p>
          <h2 className="mt-3 font-heading text-4xl font-light text-black">
            We Offer <strong className="font-bold">Professional Services</strong>
          </h2>
        </div>
        <ul className="mt-14 grid gap-px bg-card-line sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => {
            const Icon = SERVICE_ICONS[service.icon]
            return (
              <li key={service.number} className="relative bg-white px-8 py-10">
                <span
                  className="absolute right-4 top-4 font-heading text-4xl font-light text-black/10"
                  aria-hidden="true"
                >
                  {service.number}
                </span>
                <span className="relative inline-flex h-16 w-16 items-center justify-center bg-brand/10 text-brand">
                  <Icon size={32} aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-heading text-xl font-normal text-black">
                  {service.heading}
                </h3>
                <p className="mt-3 text-[15px] leading-6 text-black/60">{service.text}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
