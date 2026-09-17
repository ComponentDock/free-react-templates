import { MapPin, Phone, Mail } from 'lucide-react'

interface ContactItemProps {
  icon: React.ReactNode
  text: string
}

function ContactItem({ icon, text }: ContactItemProps) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 text-text-primary">{icon}</span>
      <p className="text-sm text-text-primary">{text}</p>
    </div>
  )
}

const contactItems = [
  {
    icon: <MapPin size={16} />,
    text: '34 Street Name, City Name Here, United States',
  },
  { icon: <Phone size={16} />, text: '+1 (222) 345 6789' },
  { icon: <Mail size={16} />, text: 'info@mywebsite.com' },
]

export function ContactInfo() {
  return (
    <div className="flex flex-1 flex-col justify-center p-8 md:p-12">
      <h2 className="mb-4 text-3xl font-bold text-text-primary">Contact Us</h2>
      <p className="mb-8 text-sm leading-relaxed text-text-secondary">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quaerat autem corrupti
        asperiores accusantium et fuga! Facere excepturi, quo eos, nobis doloremque dolor labore
        expedita illum iusto, aut repellat fuga!
      </p>
      <div className="flex flex-col gap-4">
        {contactItems.map((item) => (
          <ContactItem key={item.text} icon={item.icon} text={item.text} />
        ))}
      </div>
    </div>
  )
}
