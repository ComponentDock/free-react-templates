import { Phone, Mail, MapPin } from 'lucide-react'
import { emergencyTitle, emergencyPhone, emergencyLocations } from '../data'

export function Emergency() {
  return (
    <section className="bg-brand py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white">{emergencyTitle}</h2>
          <a
            href={`tel:${emergencyPhone}`}
            className="mt-3 inline-block text-4xl font-bold text-white hover:underline"
          >
            {emergencyPhone}
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {emergencyLocations.map((loc) => (
            <div key={loc.city} className="rounded-lg bg-white/10 p-6 text-white backdrop-blur-sm">
              <h3 className="mb-4 text-lg font-bold">{loc.city}</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <Phone aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{loc.phone}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Mail aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{loc.email}</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{loc.address}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
