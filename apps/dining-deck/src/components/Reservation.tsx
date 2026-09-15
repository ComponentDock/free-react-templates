import { Phone, MapPin, Mail } from 'lucide-react'

const contacts = [
  { icon: Phone, label: 'Phone', value: '+1 (555) 234-5678' },
  { icon: MapPin, label: 'Address', value: '123 Gourmet Ave, Foodville, CA 90210' },
  { icon: Mail, label: 'Email', value: 'hello@diningdeck.com' },
]

export function Reservation() {
  return (
    <section id="reservation" className="relative bg-gray-900 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-400">
          Book a Table
        </p>
        <h2 className="mt-3 text-3xl font-light text-white md:text-4xl">Make a Reservation</h2>
        <div className="mx-auto mt-10 grid max-w-3xl gap-8 sm:grid-cols-3">
          {contacts.map((c) => (
            <div key={c.label} className="flex flex-col items-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-500/20 text-teal-400">
                <c.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-white">
                {c.label}
              </p>
              <p className="mt-1 text-sm text-gray-400">{c.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
