import { Mail, MapPin, Phone, type LucideIcon } from 'lucide-react'
import { CONTACT_INFO } from '../data'

/* Contact (source: section.section.contact-section — centered "Contact Us"
   heading and three info blocks with red icons: Address, Phone, Email). */
const CONTACT_ICONS: Record<(typeof CONTACT_INFO)[number]['icon'], LucideIcon> = {
  'map-pin': MapPin,
  phone: Phone,
  mail: Mail,
}

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center font-display text-4xl font-bold text-ink">Contact Us</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {CONTACT_INFO.map((info) => {
            const Icon = CONTACT_ICONS[info.icon]
            return (
              <div key={info.label} className="text-center">
                <Icon className="mx-auto h-8 w-8 text-brand" aria-hidden="true" />
                <h3 className="mt-4 font-display text-lg font-bold text-ink">{info.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-smoke">{info.value}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
