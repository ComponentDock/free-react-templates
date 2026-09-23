import { MapPin, Phone, Mail, Globe } from 'lucide-react'

const contactInfo = [
  { icon: MapPin, title: 'Address', content: '198 West 21th Street, Suite 721 New York NY 10016' },
  { icon: Phone, title: 'Contact Number', content: '+1 235 2355 98' },
  { icon: Mail, title: 'Email Address', content: 'info@byteops.com' },
  { icon: Globe, title: 'Website', content: 'byteops.com' },
]

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-ops-400">
            Contact
          </span>
          <h2 className="mt-2 text-3xl font-bold text-gray-900">Contact Us</h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-600">
            Get in touch with us for your next project.
          </p>
        </div>

        {/* Contact info boxes */}
        <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((c) => {
            const Icon = c.icon
            return (
              <div key={c.title} className="rounded-lg border border-gray-200 p-6 text-center">
                <Icon className="mx-auto mb-3 h-8 w-8 text-ops-400" />
                <h3 className="mb-2 text-sm font-bold text-gray-900">{c.title}</h3>
                <p className="text-sm text-gray-600">{c.content}</p>
              </div>
            )
          })}
        </div>

        {/* Form + Map */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <form onSubmit={(e) => e.preventDefault()} className="rounded-lg bg-gray-50 p-8">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded border border-gray-300 px-4 py-3 text-sm focus:border-ops-400 focus:outline-none focus:ring-1 focus:ring-ops-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded border border-gray-300 px-4 py-3 text-sm focus:border-ops-400 focus:outline-none focus:ring-1 focus:ring-ops-400"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded border border-gray-300 px-4 py-3 text-sm focus:border-ops-400 focus:outline-none focus:ring-1 focus:ring-ops-400"
              />
              <textarea
                placeholder="Message"
                rows={6}
                className="w-full resize-none rounded border border-gray-300 px-4 py-3 text-sm focus:border-ops-400 focus:outline-none focus:ring-1 focus:ring-ops-400"
              />
              <button
                type="submit"
                className="rounded bg-ops-400 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-ops-500"
              >
                Send Message
              </button>
            </div>
          </form>

          <div className="flex items-center justify-center rounded-lg bg-gray-200 p-8">
            <div className="text-center text-gray-500">
              <MapPin className="mx-auto mb-2 h-12 w-12" />
              <p className="text-sm">Map placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
