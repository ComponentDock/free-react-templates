import { MapPin, Phone, Mail, Globe } from 'lucide-react'

const infoBoxes = [
  {
    icon: MapPin,
    title: '123 Medical Center Dr',
    text: 'Healthcare City, HC 12345',
  },
  {
    icon: Phone,
    title: '+1 (234) 567 890',
    text: 'Mon-Fri 8am-6pm',
  },
  {
    icon: Mail,
    title: 'info@medvista.com',
    text: 'Email us anytime',
  },
  {
    icon: Globe,
    title: 'www.medvista.com',
    text: 'Visit our website',
  },
] as const

export function Contact() {
  return (
    <section id="contact" className="bg-white py-20" data-testid="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-ink">Contact Us</h2>

        {/* Info boxes */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {infoBoxes.map((box) => (
            <div
              key={box.title}
              className="flex flex-col items-center rounded bg-paper p-8 text-center"
            >
              <box.icon className="h-10 w-10 text-brand" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-bold text-ink">{box.title}</h3>
              <p className="mt-1 text-sm text-body">{box.text}</p>
            </div>
          ))}
        </div>

        {/* Contact form */}
        <div className="mt-12">
          <form className="mx-auto max-w-3xl space-y-6" aria-label="Contact form">
            <div className="grid gap-6 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Name"
                className="rounded border border-gray-300 px-4 py-3 text-sm focus:border-brand focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="rounded border border-gray-300 px-4 py-3 text-sm focus:border-brand focus:outline-none"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded border border-gray-300 px-4 py-3 text-sm focus:border-brand focus:outline-none"
            />
            <textarea
              placeholder="Message"
              rows={6}
              className="w-full rounded border border-gray-300 px-4 py-3 text-sm focus:border-brand focus:outline-none"
            />
            <button
              type="submit"
              className="rounded bg-secondary px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-gray-700"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Map placeholder */}
        <div className="mt-12">
          <iframe
            title="Medvista location map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986432970718!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1"
            className="h-80 w-full rounded border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
