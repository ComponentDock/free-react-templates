import { MapPin, Phone, Mail } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="bg-gray-50 py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block border-l-2 border-brand pl-6 font-display text-2xl font-light uppercase tracking-wider text-brand">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl font-bold uppercase text-ink md:text-5xl">
            Contact Us
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 h-6 w-6 shrink-0 text-brand" />
              <div>
                <h3 className="font-display text-lg font-bold text-ink">Address</h3>
                <p className="text-muted">123 Fitness Avenue, Wellness City, WC 10001</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="mt-1 h-6 w-6 shrink-0 text-brand" />
              <div>
                <h3 className="font-display text-lg font-bold text-ink">Phone</h3>
                <p className="text-muted">+1 (555) 234-5678</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="mt-1 h-6 w-6 shrink-0 text-brand" />
              <div>
                <h3 className="font-display text-lg font-bold text-ink">Email</h3>
                <p className="text-muted">info@fitcore.com</p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault()
            }}
          >
            <div>
              <label htmlFor="contactName" className="mb-2 block text-sm font-semibold text-ink">
                Name
              </label>
              <input
                id="contactName"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="w-full border border-gray-300 bg-white px-4 py-3 text-ink placeholder:text-gray-400 focus:border-brand focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="contactEmail" className="mb-2 block text-sm font-semibold text-ink">
                Email
              </label>
              <input
                id="contactEmail"
                name="email"
                type="email"
                required
                placeholder="Your email"
                className="w-full border border-gray-300 bg-white px-4 py-3 text-ink placeholder:text-gray-400 focus:border-brand focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="contactMessage" className="mb-2 block text-sm font-semibold text-ink">
                Message
              </label>
              <textarea
                id="contactMessage"
                name="message"
                rows={5}
                required
                placeholder="Your message"
                className="w-full resize-none border border-gray-300 bg-white px-4 py-3 text-ink placeholder:text-gray-400 focus:border-brand focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="bg-brand px-10 py-4 font-display text-sm font-light uppercase tracking-widest text-white hover:bg-brand-dark"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
