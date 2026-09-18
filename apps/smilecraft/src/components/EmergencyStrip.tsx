import { Clock, Phone } from 'lucide-react'

export function EmergencyStrip() {
  return (
    <section aria-label="Emergency and hours information" className="bg-dark-brown text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-8 sm:px-6 md:grid-cols-2 lg:px-8">
        <div className="flex items-start gap-4">
          <Phone className="mt-1 h-8 w-8 shrink-0 text-primary-300" aria-hidden="true" />
          <div>
            <h2 className="text-lg font-bold">Emergency Cases</h2>
            <p className="mt-1 text-sm text-white/80">
              Dental emergencies can happen anytime. Call us immediately for urgent care.
            </p>
            <a
              href="tel:+1234567890"
              className="mt-2 inline-block text-lg font-bold text-primary-300"
            >
              +123-456-7890
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Clock className="mt-1 h-8 w-8 shrink-0 text-primary-300" aria-hidden="true" />
          <div>
            <h2 className="text-lg font-bold">Opening Hours</h2>
            <ul className="mt-2 space-y-1 text-sm text-white/80">
              <li>Mon – Fri: 8:00 – 19:00</li>
              <li>Saturday: 10:00 – 17:00</li>
              <li>Sunday: 10:00 – 16:00</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
