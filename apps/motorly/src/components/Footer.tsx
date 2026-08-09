import { useState, type FormEvent } from 'react'
import { Phone, MapPin, Clock, CalendarCheck } from 'lucide-react'
import { Button } from '@free-react-templates/ui'
import { BrandIcon, type BrandName } from './BrandIcon'

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'Facebook', name: 'facebook' },
  { label: 'X', name: 'x' },
  { label: 'LinkedIn', name: 'linkedin' },
  { label: 'Instagram', name: 'instagram' },
]

const columns = [
  {
    title: 'Quick Link',
    links: ['Purchase', 'Payment', 'Shipping', 'Return', 'Detailing'],
  },
  {
    title: 'News',
    links: [
      'Free Philippine Real Estate Ads...',
      'Free Philippine Real Estate Ads...',
      'Free Philippine Real Estate Ads...',
    ],
  },
] as const

export function Footer() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [date, setDate] = useState('')
  const [confirmed, setConfirmed] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (name.trim() && phone.trim() && date.trim()) {
      setConfirmed(true)
    }
  }

  return (
    <footer id="contact" className="bg-coal text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Booking Repair — appointment form. */}
          <div>
            <h2 className="font-display text-3xl font-extrabold">Booking Repair</h2>
            {confirmed ? (
              <p className="mt-6 rounded-lg bg-brand/20 p-4 text-sm leading-relaxed">
                Booking confirmed — see you on {date}, {name}!
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
                <div>
                  <label
                    htmlFor="appt-name"
                    className="mb-1 block text-sm font-semibold text-white/80"
                  >
                    Your name
                  </label>
                  <input
                    id="appt-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded border border-white/20 bg-white/10 px-4 py-2 text-white placeholder-white/40 focus:border-brand focus:outline-none"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label
                    htmlFor="appt-phone"
                    className="mb-1 block text-sm font-semibold text-white/80"
                  >
                    Phone number
                  </label>
                  <input
                    id="appt-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded border border-white/20 bg-white/10 px-4 py-2 text-white placeholder-white/40 focus:border-brand focus:outline-none"
                    placeholder="555-1234"
                  />
                </div>
                <div>
                  <label
                    htmlFor="appt-date"
                    className="mb-1 block text-sm font-semibold text-white/80"
                  >
                    Preferred date
                  </label>
                  <input
                    id="appt-date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full rounded border border-white/20 bg-white/10 px-4 py-2 text-white focus:border-brand focus:outline-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full rounded bg-brand text-sm font-bold uppercase text-white transition-colors hover:bg-brand-dark"
                  size="lg"
                >
                  <CalendarCheck className="h-4 w-4" aria-hidden="true" /> Book Appointment
                </Button>
              </form>
            )}
          </div>

          {/* Contact us — phone + location. */}
          <div>
            <h2 className="font-display text-3xl font-extrabold">Contact Us Now!</h2>
            <p className="mt-6 flex items-center gap-3 text-2xl font-bold text-brand">
              <Phone className="h-6 w-6" aria-hidden="true" /> 123-4567-7890
            </p>
            <div className="mt-8">
              <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white/80">
                Location
              </h3>
              <a
                href="#contact"
                className="mt-3 inline-flex items-center gap-2 font-semibold text-brand hover:text-white"
              >
                <MapPin className="h-4 w-4" aria-hidden="true" /> Find us on map
              </a>
              <p className="mt-3 flex items-center gap-2 text-sm text-white/60">
                <Clock className="h-4 w-4" aria-hidden="true" /> Mon-Sat: 10:00 - 16:00 / Sunday
                Close
              </p>
            </div>
            <div className="mt-8">
              <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white/80">
                Contact Us
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                Class is also likely to be focused on slow and gentle movements so it's a great type
                of yoga to start with.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#contact"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-brand hover:bg-brand hover:text-white"
                >
                  <BrandIcon name={social.name} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns — Quick Link + News + My Office. */}
          <div className="grid grid-cols-2 gap-8">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white/80">
                  {column.title}
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-white/60">
                  {column.links.map((label) => (
                    <li key={label}>
                      <a href="#contact" className="transition-colors hover:text-brand">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white/80">
                My Office
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/60">
                Address: 7986 Pennsylvania St. Rockville Centre, NY
              </p>
              <p className="mt-3 text-sm text-white/60">Fax: (+123) 4567-7890-123</p>
              <p className="mt-1 text-sm text-white/60">Mobile: (+123) 4567-7890-123</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-8 text-center text-xs text-white/50 sm:flex-row sm:text-left">
          <p>© 2026 Motorly. All rights reserved.</p>
          <p>recreation of ColorLib Automotive</p>
        </div>
      </div>
    </footer>
  )
}
