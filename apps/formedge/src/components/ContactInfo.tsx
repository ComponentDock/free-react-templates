import { MapPin, Phone, Mail, Globe } from 'lucide-react'

const contactItems = [
  { icon: MapPin, label: 'ADDRESS', value: '198 West 21th Street, Suite 721 New York NY 10016' },
  { icon: Phone, label: 'PHONE', value: '+ 1235 2355 98' },
  { icon: Mail, label: 'EMAIL', value: 'info@yoursite.com' },
  { icon: Globe, label: 'WEBSITE', value: 'yoursite.com' },
] as const

export function ContactInfo() {
  return (
    <div className="flex flex-col justify-center">
      <h2 className="mb-6 font-['Playfair_Display',serif] text-2xl font-bold text-text-on-dark md:text-3xl">
        Contact us
      </h2>
      <div className="space-y-4">
        {contactItems.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex items-start gap-3">
            <Icon className="mt-1 h-5 w-5 flex-shrink-0 text-text-on-dark" aria-hidden="true" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-text-on-dark/70">
                {label}:
              </p>
              <p className="text-sm text-text-on-dark">{value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
