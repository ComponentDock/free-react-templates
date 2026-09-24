import { MapPin, Phone, Mail } from 'lucide-react'

const contactInfo = [
  { icon: MapPin, text: '123 Financial District, New York, NY 10005' },
  { icon: Phone, text: '+1 (212) 555-0189' },
  { icon: Mail, text: 'info@banknote.com' },
]

export function Contact() {
  return (
    <section id="contact" className="bg-paper py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Contact Us</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Get in touch with our team for any inquiries or assistance.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact info */}
          <div className="space-y-6">
            {contactInfo.map((c) => (
              <div key={c.text} className="flex items-center gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-brand/10">
                  <c.icon className="h-6 w-6 text-brand" />
                </div>
                <p className="text-gray-700">{c.text}</p>
              </div>
            ))}
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-4 rounded-lg bg-white p-6 shadow-sm"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="First Name"
                className="rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
            />
            <textarea
              placeholder="Message"
              rows={5}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
            />
            <button
              type="submit"
              className="w-full rounded-full bg-brand py-3 text-sm font-bold text-white transition hover:bg-brand-dark"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
