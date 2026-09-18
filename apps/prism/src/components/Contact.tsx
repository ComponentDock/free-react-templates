import { MapPin, Phone, Mail } from 'lucide-react'

const contacts = [
  {
    icon: MapPin,
    title: 'Address',
    line1: '123 Creative Avenue',
    line2: 'Design District, NY 10001',
  },
  {
    icon: Phone,
    title: 'Phone',
    line1: '+1 (555) 123-4567',
    line2: '+1 (555) 987-6543',
  },
  {
    icon: Mail,
    title: 'Email',
    line1: 'hello@prism.agency',
    line2: 'support@prism.agency',
  },
] as const

export function Contact() {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-12 text-center font-display text-3xl font-semibold text-ink">
          Get In Touch
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {contacts.map((item) => (
            <div key={item.title} className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-50 text-primary-400">
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h6 className="mb-2 text-sm font-semibold uppercase tracking-wider text-ink">
                {item.title}
              </h6>
              <p className="text-sm text-smoke">{item.line1}</p>
              <p className="text-sm text-smoke">{item.line2}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
