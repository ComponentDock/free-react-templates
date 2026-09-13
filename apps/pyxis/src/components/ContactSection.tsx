import { MapPin, Phone, Mail, Headphones } from 'lucide-react'

const contactItems = [
  {
    icon: MapPin,
    title: 'Visit Our Office',
    lines: ['123 Business Avenue, Suite 100', 'Innovation District', 'San Francisco, CA 94105'],
  },
  {
    icon: Phone,
    title: "Let's Call Us",
    lines: ['Phone 01: (415) 555-0123', 'Phone 02: (415) 555-0456', 'FAX: (415) 555-0789'],
  },
  {
    icon: Mail,
    title: "Let's Email Us",
    lines: ['hello@pyxis.dev', 'info@pyxis.dev', 'office@pyxis.dev'],
  },
  {
    icon: Headphones,
    title: 'Customer Support',
    lines: ['support@pyxis.dev', 'emergency@pyxis.dev', 'priority@pyxis.dev'],
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {contactItems.map((item) => (
            <div key={item.title}>
              <item.icon size={24} className="mb-4 text-brand" />
              <h3 className="mb-3 text-sm font-semibold uppercase text-heading">{item.title}</h3>
              {item.lines.map((line) => (
                <p key={line} className="text-sm leading-relaxed text-body">
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
