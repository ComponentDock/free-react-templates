import { MapPin, Clock, Mail, Phone, Navigation } from 'lucide-react'

export function Address() {
  return (
    <section id="contact" className="bg-ink py-16" aria-labelledby="address-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="address-heading" className="sr-only">
          Contact Information
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {/* Location */}
          <div className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand/10">
              <MapPin className="h-6 w-6 text-brand" aria-hidden="true" />
            </div>
            <h3 className="mt-4 font-display text-lg font-bold text-white">Our Location</h3>
            <p className="mt-2 text-sm text-gray-400">
              123 Industrial Avenue, Suite 500
              <br />
              Engineering District, NY 10001
            </p>
            <a
              href="#contact"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-light transition-colors"
            >
              <Navigation className="h-3.5 w-3.5" aria-hidden="true" />
              Get Direction
            </a>
          </div>

          {/* Hours */}
          <div className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand/10">
              <Clock className="h-6 w-6 text-brand" aria-hidden="true" />
            </div>
            <h3 className="mt-4 font-display text-lg font-bold text-white">Opening Hour</h3>
            <ul className="mt-2 space-y-1 text-sm text-gray-400">
              <li>Monday - Friday: 9:00 - 19:00</li>
              <li>Saturday - Sunday: Closed</li>
            </ul>
          </div>

          {/* Message */}
          <div className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand/10">
              <Mail className="h-6 w-6 text-brand" aria-hidden="true" />
            </div>
            <h3 className="mt-4 font-display text-lg font-bold text-white">Drop a Message</h3>
            <ul className="mt-2 space-y-2 text-sm text-gray-400">
              <li className="flex items-center justify-center gap-2">
                <Mail className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                info@industrix.com
              </li>
              <li className="flex items-center justify-center gap-2">
                <Phone className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                +1 234 567 890
              </li>
            </ul>
            <a
              href="mailto:info@industrix.com"
              className="mt-3 inline-block text-sm font-semibold text-brand hover:text-brand-light transition-colors"
            >
              Mail Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
