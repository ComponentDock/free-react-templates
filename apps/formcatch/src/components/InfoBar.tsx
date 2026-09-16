import { MapPin, Phone, Mail, Globe } from 'lucide-react'

interface InfoBarItemProps {
  icon: React.ReactNode
  label: string
  value: string
  href?: string
}

function InfoBarItem({ icon, label, value, href }: InfoBarItemProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white">
        {icon}
      </div>
      <p className="text-xs font-semibold uppercase tracking-wider text-text-label">{label}</p>
      {href ? (
        <a href={href} className="mt-1 text-sm text-brand hover:underline">
          {value}
        </a>
      ) : (
        <p className="mt-1 text-sm text-text-primary">{value}</p>
      )}
    </div>
  )
}

const infoItems: InfoBarItemProps[] = [
  {
    icon: <MapPin size={20} />,
    label: 'Address',
    value: '198 West 21th Street, Suite 721 New York NY 10016',
  },
  {
    icon: <Phone size={20} />,
    label: 'Phone',
    value: '+ 1235 2355 98',
    href: 'tel:+1235235598',
  },
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: 'info@yoursite.com',
    href: 'mailto:info@yoursite.com',
  },
  {
    icon: <Globe size={20} />,
    label: 'Website',
    value: 'yoursite.com',
    href: 'https://yoursite.com',
  },
]

export function InfoBar() {
  return (
    <div className="mb-8 grid grid-cols-2 gap-6 rounded bg-white p-6 shadow-sm sm:grid-cols-4">
      {infoItems.map((item) => (
        <InfoBarItem key={item.label} {...item} />
      ))}
    </div>
  )
}
