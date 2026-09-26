import { Mail, Phone, MapPin } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="bg-light-bg py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-3xl font-bold">Get In Touch</h2>
        <div className="grid gap-12 md:grid-cols-5">
          {/* Form */}
          <div className="md:col-span-3">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="mb-1 block text-sm font-medium">
                  Write your message...
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={7}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                />
              </div>
              <button
                type="submit"
                className="rounded-full border-2 border-black px-8 py-3 text-sm font-medium text-black transition-colors hover:bg-black hover:text-white"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact info */}
          <div className="md:col-span-2">
            <div className="space-y-6">
              <div>
                <div className="mb-1 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted">
                  <Mail size={16} /> Email
                </div>
                <a
                  href="mailto:info@yourdomain.com"
                  className="text-brand transition-colors hover:underline"
                >
                  info@yourdomain.com
                </a>
              </div>
              <div>
                <div className="mb-1 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted">
                  <Phone size={16} /> Phone
                </div>
                <a href="tel:+1234567890" className="text-brand transition-colors hover:underline">
                  +12 345 6789 012
                </a>
              </div>
              <div>
                <div className="mb-1 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted">
                  <MapPin size={16} /> Address
                </div>
                <p className="text-muted">
                  273 South Riverview Rd.
                  <br />
                  New York, NY 10011
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
