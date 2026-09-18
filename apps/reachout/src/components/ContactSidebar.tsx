import { MapPin, Phone, Mail } from 'lucide-react'

interface InfoRowProps {
  icon: React.ReactNode
  label: string
  value: string
}

function InfoRow({ icon, label, value }: InfoRowProps) {
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

const infoItems = [
  {
    icon: <MapPin size={16} />,
    label: 'Address',
    value: '198 West 21th Street, Suite 721 New York NY 10016',
  },
  { icon: <Phone size={16} />, label: 'Phone', value: '+ 1235 2355 98' },
  { icon: <Mail size={16} />, label: 'Email', value: 'info@yoursite.com' },
]

export function ContactSidebar() {
  return (
    <div className="flex w-full flex-col justify-center bg-bg-sidebar p-8 text-white md:w-[35%] md:p-10">
      <h2 className="mb-3 font-['Playfair_Display',serif] text-2xl font-bold">
        Contact Information
      </h2>
      <p className="mb-8 text-sm leading-relaxed text-white/80">
        Fill up the form and our team will get back to you within 24 hours.
      </p>
      <div className="flex flex-col gap-5">
        {infoItems.map((item) => (
          <InfoRow key={item.label} icon={item.icon} label={item.label} value={item.value} />
        ))}
      </div>
    </div>
  )
}
