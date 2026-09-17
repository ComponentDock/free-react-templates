import { MapPin, Phone, Send } from 'lucide-react'

const contactItems = [
  {
    icon: MapPin,
    label: 'Address',
    value: '198 West 21th Street, Suite 721 New York NY 10016',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+ 1235 2355 98',
  },
  {
    icon: Send,
    label: 'Email',
    value: 'info@yoursite.com',
  },
] as const

export function ContactInfo() {
  return (
    <div className="mb-10 flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-16">
      {contactItems.map(({ icon: Icon, label, value }) => (
        <div key={label} className="flex flex-col items-center text-center">
          <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-brand">
            <Icon className="h-6 w-6 text-bg-page" aria-hidden="true" />
          </div>
          <p className="mb-1 text-sm font-semibold text-text-primary">{label}:</p>
          <p className="max-w-[200px] text-sm text-text-secondary">{value}</p>
        </div>
      ))}
    </div>
  )
}
