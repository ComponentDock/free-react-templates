import { MapPin, Phone, Send, Globe } from 'lucide-react'

interface ContactItem {
  icon: React.ReactNode
  label: string
  value: string
}

const contactItems: ContactItem[] = [
  {
    icon: <MapPin className="h-5 w-5 text-white" />,
    label: 'Address:',
    value: '198 West 21th Street, Suite 721 New York NY 10016',
  },
  {
    icon: <Phone className="h-5 w-5 text-white" />,
    label: 'Phone:',
    value: '+ 1235 2355 98',
  },
  {
    icon: <Send className="h-5 w-5 text-white" />,
    label: 'Email:',
    value: 'info@yoursite.com',
  },
  {
    icon: <Globe className="h-5 w-5 text-white" />,
    label: 'Website:',
    value: 'yoursite.com',
  },
]

export function ContactInfo() {
  return (
    <div className="flex-1 bg-brand-blue p-8 text-white">
      <h2 className="mb-6 text-2xl font-bold">Contact us</h2>
      <ul className="space-y-5">
        {contactItems.map((item) => (
          <li key={item.label} className="flex items-start gap-4">
            <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-brand-blue-light">
              {item.icon}
            </span>
            <div>
              <p className="font-semibold">{item.label}</p>
              <p className="text-sm text-blue-100">{item.value}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
