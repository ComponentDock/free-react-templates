import { Mail, Phone, MapPin } from 'lucide-react'
import { type FormEvent, useState } from 'react'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-10 text-center text-2xl font-extralight text-gray-800">
          Get <strong className="font-bold">In Touch</strong>
        </h2>
        <div className="grid gap-10 md:grid-cols-5">
          {/* Form */}
          <div className="md:col-span-3">
            {submitted ? (
              <div className="rounded-lg bg-green-50 p-8 text-center">
                <p className="text-lg font-semibold text-green-700">
                  Thank you! Your message has been sent.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full rounded border border-gray-300 px-4 py-2.5 text-sm focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full rounded border border-gray-300 px-4 py-2.5 text-sm focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
                />
                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="w-full rounded border border-gray-300 px-4 py-2.5 text-sm focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
                />
                <textarea
                  placeholder="Write a Message"
                  rows={6}
                  required
                  className="w-full resize-none rounded border border-gray-300 px-4 py-2.5 text-sm focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
                />
                <button
                  type="submit"
                  className="rounded bg-brand-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-600"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Details */}
          <div className="md:col-span-2 md:pl-6">
            <h3 className="mb-6 text-lg font-extralight text-gray-800">My Contact Details</h3>
            <ul className="space-y-4 text-sm text-gray-600">
              <li>
                <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-gray-400">
                  Email
                </span>
                <a href="mailto:hello@curriculo.dev" className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-brand-primary" /> hello@curriculo.dev
                </a>
              </li>
              <li>
                <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-gray-400">
                  Phone
                </span>
                <span className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-brand-primary" /> +1 (555) 123-4567
                </span>
              </li>
              <li>
                <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-gray-400">
                  Address
                </span>
                <span className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary" />
                  San Francisco, CA
                  <br />
                  4th Floor, 123 Market Street
                  <br />
                  San Francisco, CA 94105
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
