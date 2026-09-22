import { MapPin, Phone, Mail } from 'lucide-react'

const contacts = [
  {
    title: 'Location',
    details: ['123 Fitness Avenue', 'New York, NY 10001'],
    icon: MapPin,
  },
  {
    title: 'Phone',
    details: ['(90) 277 278 2566', '(78) 267 256 2578'],
    icon: Phone,
  },
  {
    title: 'Email',
    details: ['justly@gmail.com', 'contact@justly.com'],
    icon: Mail,
  },
]

export function ContactInfo() {
  return (
    <section id="contact" className="bg-surface-light py-20" data-testid="contact-info">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {contacts.map((c) => (
            <div key={c.title} className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-brand/10 flex-shrink-0">
                <c.icon className="w-6 h-6 text-brand" />
              </div>
              <div>
                <h3 className="font-heading text-lg text-white uppercase mb-2">{c.title}</h3>
                {c.details.map((d) => (
                  <p key={d} className="text-text-muted text-sm">
                    {d}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
