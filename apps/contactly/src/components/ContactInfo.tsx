import { MapPin, Phone, Send, Globe } from 'lucide-react'

interface ContactItemProps {
  icon: React.ReactNode
  label: string
  value: string
}

function ContactItem({ icon, label, value }: ContactItemProps) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white">
        <span className="text-brand">{icon}</span>
      </div>
      <p className="text-sm text-white">
        <span className="font-semibold">{label}:</span> {value}
      </p>
    </div>
  )
}

const contactItems = [
  {
    icon: <MapPin size={16} />,
    label: 'Address',
    value: '198 West 21th Street, Suite 721 New York NY 10016',
  },
  { icon: <Phone size={16} />, label: 'Phone', value: '+ 1235 2355 98' },
  { icon: <Send size={16} />, label: 'Email', value: 'info@yoursite.com' },
  { icon: <Globe size={16} />, label: 'Website', value: 'yoursite.com' },
]

export function ContactInfo() {
  return (
    <div className="flex w-full flex-col justify-center bg-brand p-8 text-white md:w-[35%] md:p-10">
      <h2 className="mb-3 font-['Playfair_Display',serif] text-2xl font-bold">
        Let&apos;s get in touch
      </h2>
      <p className="mb-8 text-sm leading-relaxed text-white/90">
        We&apos;re open for any suggestion or just to have a chat
      </p>
      <div className="flex flex-col gap-5">
        {contactItems.map((item) => (
          <ContactItem key={item.label} icon={item.icon} label={item.label} value={item.value} />
        ))}
      </div>
    </div>
  )
}
