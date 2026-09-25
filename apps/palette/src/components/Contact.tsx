import { MapPin, Phone, Mail, Globe } from 'lucide-react'

const contactInfo = [
  { icon: MapPin, label: 'Address', value: '123 Main St, New York, NY 10001' },
  { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
  { icon: Mail, label: 'Email', value: 'hello@palette.dev' },
  { icon: Globe, label: 'Website', value: 'www.palette.dev' },
]

export function Contact() {
  return (
    <section id="contact" className="bg-light-bg py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-ink">Contact Me</h2>
        <div className="flex flex-col gap-12 md:flex-row">
          <form className="flex-1 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <button
              type="submit"
              className="rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Send Message
            </button>
          </form>

          <div className="flex-1 space-y-4">
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className="flex items-start gap-4 rounded-lg bg-white p-4 shadow-sm"
              >
                <info.icon className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-ink">{info.label}</h3>
                  <p className="text-sm text-smoke">{info.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
