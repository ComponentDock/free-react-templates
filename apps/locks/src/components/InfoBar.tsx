import { Clock, MapPin, Phone } from 'lucide-react'
import { BrandIcon, type BrandName } from './BrandIcon'

const contacts = [
  { icon: Phone, label: 'Phone', value: '000 (123) 456 7890' },
  { icon: MapPin, label: 'Address', value: '198 West 21th Street, Suite 721 New York NY 10016' },
  { icon: Clock, label: 'Hours', value: 'Open Monday-Friday 8:00am - 9:00pm' },
] as const

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'X', name: 'x' },
  { label: 'Facebook', name: 'facebook' },
  { label: 'Instagram', name: 'instagram' },
]

export function InfoBar() {
  return (
    <section aria-label="Contact info" className="relative z-10 -mt-16 lg:-mt-20">
      <div className="mx-auto flex max-w-6xl flex-col px-4 sm:px-6 lg:flex-row">
        <div className="grid flex-1 gap-6 bg-ink px-8 py-8 text-white sm:grid-cols-3">
          {contacts.map((contact) => (
            <div key={contact.label} className="flex items-start gap-4">
              <contact.icon className="mt-1 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-white/60">
                  {contact.label}
                </p>
                <p className="mt-1 text-sm text-white/90">{contact.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-3 bg-brand px-8 py-8 lg:flex-col lg:justify-center">
          {socials.map((social) => (
            <a
              key={social.label}
              href="#home"
              aria-label={social.label}
              className="flex h-11 w-11 items-center justify-center rounded-full text-white transition-colors hover:bg-white/20"
            >
              <BrandIcon name={social.name} className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
