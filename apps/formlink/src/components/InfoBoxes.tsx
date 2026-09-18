import { MapPin, Phone, Send, Globe } from 'lucide-react'

interface InfoItemProps {
  icon: React.ReactNode
  label: string
  value: string
  href?: string
}

function InfoItem({ icon, label, value, href }: InfoItemProps) {
  return (
    <div className="flex flex-1 flex-col items-center text-center">
      <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-text-muted">
        {icon}
      </div>
      <p className="mb-0">
        <span className="mb-1 block text-xs font-semibold uppercase text-text-muted">{label}:</span>
        {href ? (
          <a
            href={href}
            className="text-sm text-text-body transition-colors hover:text-text-heading"
          >
            {value}
          </a>
        ) : (
          <span className="text-sm text-text-body">{value}</span>
        )}
      </p>
    </div>
  )
}

const infoItems: Omit<InfoItemProps, 'icon'>[] = [
  {
    label: 'Address',
    value: '198 West 21th Street, Suite 721 New York NY 10016',
  },
  {
    label: 'Phone',
    value: '+ 1235 2355 98',
    href: 'tel:+1235235598',
  },
  {
    label: 'Email',
    value: 'info@yoursite.com',
    href: 'mailto:info@yoursite.com',
  },
  {
    label: 'Website',
    value: 'yoursite.com',
    href: '#',
  },
]

const icons = [
  <MapPin key="map" size={18} />,
  <Phone key="phone" size={18} />,
  <Send key="send" size={18} />,
  <Globe key="globe" size={18} />,
]

export function InfoBoxes() {
  return (
    <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:gap-4">
      {infoItems.map((item, i) => (
        <InfoItem key={item.label} icon={icons[i]} {...item} />
      ))}
    </div>
  )
}
