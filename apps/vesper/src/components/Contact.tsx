import type { FormEvent } from 'react'
import { Globe, Mail, MapPin, Phone } from 'lucide-react'

const infoItems = [
  { label: 'Address', value: '198 West 21th Street, Suite 721 New York NY 10016', Icon: MapPin },
  { label: 'Contact Number', value: '+ 1235 2355 98', Icon: Phone },
  { label: 'Email Address', value: 'info@yoursite.com', Icon: Mail },
  { label: 'Website', value: 'yoursite.com', Icon: Globe },
] as const

export function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-center font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
          Contact Me
        </h2>

        <div className="mt-12 grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          {infoItems.map(({ label, value, Icon }) => (
            <div key={label}>
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold text-white">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
                {label}
              </p>
              <p className="mt-1 text-sm text-gray-700">{value}</p>
            </div>
          ))}
        </div>

        <form
          aria-label="Contact"
          onSubmit={handleSubmit}
          className="mx-auto mt-12 max-w-3xl rounded-lg bg-section-bg p-6 sm:p-10"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-2 w-full rounded border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/40"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                Your Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/40"
              />
            </div>
          </div>
          <div className="mt-6">
            <label htmlFor="subject" className="block text-sm font-semibold text-gray-700">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              className="mt-2 w-full rounded border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/40"
            />
          </div>
          <div className="mt-6">
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="mt-2 w-full rounded border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/40"
            />
          </div>
          <button
            type="submit"
            className="mt-8 rounded bg-gold px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-gold-dark"
          >
            Send Message
          </button>
        </form>

        {/* Static map placeholder (the source uses a Leaflet map) */}
        <div
          aria-label="Map"
          role="region"
          className="mt-12 flex min-h-64 items-center justify-center rounded-lg bg-gray-100"
        >
          <div className="text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-gold-dark shadow">
              <MapPin className="h-7 w-7" aria-hidden="true" />
            </span>
            <p className="mt-4 text-sm font-semibold text-gray-700">
              Find us at 198 West 21th Street
            </p>
            <p className="mt-1 text-xs text-gray-500">New York, NY 10016</p>
          </div>
        </div>
      </div>
    </section>
  )
}
