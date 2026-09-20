import { MapPin, Phone, Mail } from 'lucide-react'

const CONTACTS = [
  {
    icon: MapPin,
    title: 'Address',
    lines: ['123 Innovation Blvd', 'San Francisco, CA 94105'],
  },
  {
    icon: Phone,
    title: 'Phone',
    lines: ['+1 (415) 555-0123', '+1 (415) 555-0456'],
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['info@gathervenue.com', 'tickets@gathervenue.com'],
  },
]

export function Contact() {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h3 className="mb-10 text-center text-3xl font-bold">
          Contact <span className="text-brand">Info</span>
        </h3>
        <div className="grid gap-8 md:grid-cols-3">
          {CONTACTS.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Icon size={24} />
                </div>
                <h4 className="mb-3 text-lg font-semibold text-navy">{item.title}</h4>
                {item.lines.map((line) => (
                  <p key={line} className="text-sm text-body">
                    {line}
                  </p>
                ))}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
