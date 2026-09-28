import { Mail, MapPin, Phone } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

export function Contact() {
  return (
    <section id="contact" className="py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-semibold uppercase tracking-wide text-ink sm:text-4xl">
            Contact Us
          </h2>
          <p className="mx-auto max-w-2xl font-light text-mist">
            We'd love to hear from you. Reach out to us for reservations, events, or just to say
            hello.
          </p>
        </div>

        <div className="grid gap-0 lg:grid-cols-2">
          {/* Map placeholder */}
          <div className="flex min-h-[400px] flex-col items-center justify-center bg-ink text-center">
            <MapPin className="mb-4 h-12 w-12 text-brand" aria-hidden="true" />
            <p className="mb-2 text-lg font-semibold text-white">123 Gourmet Avenue</p>
            <p className="text-sm font-light text-white/60">New York, NY 10001</p>
            <a
              href="tel:+15551234567"
              className="mt-4 flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-brand"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              (555) 123-4567
            </a>
          </div>

          {/* Contact form */}
          <div className="bg-white p-8 lg:p-12">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-6"
              aria-label="Contact form"
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-ink">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="John Doe"
                  className="rounded border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brand focus:ring-1 focus:ring-brand"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-ink">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="rounded border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brand focus:ring-1 focus:ring-brand"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-ink">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Write your message here..."
                  className="resize-none rounded border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brand focus:ring-1 focus:ring-brand"
                />
              </div>

              <Button
                type="submit"
                className="w-full rounded-full bg-brand px-8 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-brand-dark"
              >
                Send Message
              </Button>
            </form>

            <div className="mt-8 flex flex-col gap-4 border-t border-gray-100 pt-8 text-sm text-mist">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-brand" aria-hidden="true" />
                <span>info@supperhouse.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-brand" aria-hidden="true" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-brand" aria-hidden="true" />
                <span>123 Gourmet Avenue, New York, NY 10001</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
