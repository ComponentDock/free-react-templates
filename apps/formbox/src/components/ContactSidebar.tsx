import { MapPin, Phone, Mail } from 'lucide-react'

const contactItems = [
  {
    icon: MapPin,
    text: '9757 Aspen Lane South Richmond Hill, NY 11419',
  },
  {
    icon: Phone,
    text: '+1 (291) 939 9321',
  },
  {
    icon: Mail,
    text: 'info@mywebsite.com',
  },
] as const

export function ContactSidebar() {
  return (
    <div>
      <h2 className="mb-8 text-[20px] font-bold text-white">Contact Information</h2>
      <p className="mb-10 text-sm leading-relaxed text-sidebar-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, magnam!
      </p>
      <ul className="space-y-4">
        {contactItems.map(({ icon: Icon, text }) => (
          <li key={text} className="flex items-start gap-3">
            <Icon className="mt-1 h-5 w-5 shrink-0 text-sidebar-icon" aria-hidden="true" />
            <span className="text-sm text-sidebar-text">{text}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
