import { MapPin, Phone, Mail, Globe } from 'lucide-react'

interface ContactInfoItemProps {
  icon: React.ReactNode
  label: string
  value: string
  href?: string
}

function ContactInfoItem({ icon, label, value, href }: ContactInfoItemProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-icon-bg text-text-primary">
        {icon}
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-text-label">{label}</p>
        {href ? (
          <a href={href} className="mt-1 text-sm text-text-primary hover:text-brand-pink">
            {value}
          </a>
        ) : (
          <p className="mt-1 text-sm text-text-primary">{value}</p>
        )}
      </div>
    </div>
  )
}

const infoItems: ContactInfoItemProps[] = [
  {
    icon: <MapPin size={20} />,
    label: 'Address',
    value: '198 West 21th Street, Suite 721 New York NY 10016',
  },
  {
    icon: <Phone size={20} />,
    label: 'Phone',
    value: '+ 1235 2355 98',
    href: 'tel:+123****5598',
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

export function ContactInfo() {
  return (
    <>
      <h2 className="mb-2 font-['Playfair_Display',serif] text-2xl font-bold text-text-primary">
        Contact us
      </h2>
      <div className="mb-6 h-1 w-12 bg-brand-pink" />
      <p className="mb-8 text-sm text-text-secondary">
        We're open for any suggestion or just to have a chat
      </p>
      <div className="space-y-6">
        {infoItems.map((item) => (
          <ContactInfoItem key={item.label} {...item} />
        ))}
      </div>
    </>
  )
}
