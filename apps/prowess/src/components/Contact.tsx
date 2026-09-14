import { Phone, Mail, MapPin } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@prowess.com', 'support@prowess.com'],
  },
  {
    icon: MapPin,
    title: 'Location',
    details: ['123 Fitness Avenue', 'New York, NY 10001'],
  },
] as const

export function Contact() {
  return (
    <section
      id="contact"
      className="bg-gray-50 py-20 transition-colors dark:bg-gray-900 lg:py-[120px]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            Get in Touch
          </span>
          <h2 className="mt-4 text-3xl font-bold uppercase tracking-[0.1em] text-heading dark:text-white sm:text-4xl">
            Contact Us
          </h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {contactInfo.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-white p-8 text-center shadow-lg transition-colors dark:bg-gray-950"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand/10">
                <item.icon className="h-8 w-8 text-brand" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-lg font-bold uppercase tracking-wide text-heading dark:text-white">
                {item.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {item.details.map((detail) => (
                  <li key={detail} className="text-sm text-body dark:text-gray-400">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
