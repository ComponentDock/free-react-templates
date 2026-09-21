import { MapPin, Mail, Phone } from 'lucide-react'
import { CONTACT } from '../data'

export function MapContact() {
  return (
    <section id="contact" className="relative min-h-[400px]">
      {/* Map background */}
      <div className="absolute inset-0 bg-gray-200">
        <iframe
          title="Batterly location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.9!2d-73.9857!3d40.6892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQxJzIxLjEiTiA3M8KwNTknMDguMSJX!5e0!3m2!1sen!2sus!4v1"
          className="h-full w-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Contact card overlay */}
      <div className="relative z-10 flex items-center justify-center py-16">
        <div className="mx-4 w-full max-w-md rounded-lg bg-white p-8 shadow-xl">
          <h3 className="font-display text-xl font-bold text-ink mb-6">{CONTACT.city}</h3>
          <ul className="space-y-4 text-sm text-muted">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <span>{CONTACT.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <a href={`mailto:${CONTACT.email}`} className="hover:text-brand transition-colors">
                {CONTACT.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <a href={`tel:${CONTACT.phone}`} className="hover:text-brand transition-colors">
                {CONTACT.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
