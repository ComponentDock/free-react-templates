import { Phone, MapPin, Clock } from 'lucide-react'

export default function EmergencyContact() {
  return (
    <section id="contact" className="py-16 bg-brand-emergency">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-white">
          <div className="flex items-start gap-4">
            <Phone size={24} className="mt-1 shrink-0" />
            <div>
              <h3 className="text-lg font-semibold font-[family-name:var(--font-heading)]">
                Emergency Call
              </h3>
              <p className="text-white/90 text-sm mt-1">+1 (800) 123-4567</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MapPin size={24} className="mt-1 shrink-0" />
            <div>
              <h3 className="text-lg font-semibold font-[family-name:var(--font-heading)]">
                Our Location
              </h3>
              <p className="text-white/90 text-sm mt-1">
                123 Medical Center Drive, Suite 100
                <br />
                New York, NY 10001
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Clock size={24} className="mt-1 shrink-0" />
            <div>
              <h3 className="text-lg font-semibold font-[family-name:var(--font-heading)]">
                Working Hours
              </h3>
              <p className="text-white/90 text-sm mt-1">
                Mon — Fri: 8:00 AM — 6:00 PM
                <br />
                Sat — Sun: Emergency Only
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
