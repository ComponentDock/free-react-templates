import { MapPin, Phone, Mail, Globe } from 'lucide-react'

interface ContactItemProps {
  icon: React.ReactNode
  label: string
  value: string
}

function ContactItem({ icon, label, value }: ContactItemProps) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 text-text-on-dark">{icon}</div>
      <p>
        <span className="font-semibold text-text-on-dark">{label}:</span>{' '}
        <span className="text-text-secondary">{value}</span>
      </p>
    </div>
  )
}

const contactItems: Omit<ContactItemProps, 'icon'>[] = [
  {
    label: 'Address',
    value: '198 West 21th Street, Suite 721 New York NY 10016',
  },
  {
    label: 'Phone',
    value: '+ 1235 2355 98',
  },
  {
    label: 'Email',
    value: 'info@yoursite.com',
  },
  {
    label: 'Website',
    value: 'yoursite.com',
  },
]

const icons = [
  <MapPin key="map" size={16} />,
  <Phone key="phone" size={16} />,
  <Mail key="mail" size={16} />,
  <Globe key="globe" size={16} />,
]

export function ContactInfo() {
  return (
    <div className="flex-1">
      <h3 className="mb-3 font-['Playfair_Display',serif] text-lg font-bold text-text-on-dark">
        Contact information
      </h3>
      <p className="mb-6 text-sm text-text-secondary">
        We&#39;re open for any suggestion or just to have a chat
      </p>
      <div className="space-y-4">
        {contactItems.map((item, i) => (
          <ContactItem key={item.label} icon={icons[i]} {...item} />
        ))}
      </div>
    </div>
  )
}
