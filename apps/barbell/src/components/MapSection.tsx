import { Mail, MapPin, Phone } from 'lucide-react'

export function MapSection() {
  return (
    <section aria-label="Location map" className="relative">
      <iframe
        title="Barbell gym location map"
        src="https://maps.google.com/maps?q=New%20York%20PK%2023589&t=&z=14&ie=UTF8&iwloc=&output=embed"
        loading="lazy"
        className="h-[400px] w-full border-0 md:h-[585px]"
      />
      <div className="pointer-events-none absolute left-4 top-1/2 hidden -translate-y-1/2 md:left-16 md:block">
        <div className="bg-ink/75 p-8 pl-20 text-white">
          <ul className="space-y-6 text-sm leading-relaxed">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
              <span>Main Str, no 23, NY, New York PK 23589</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
              +546 990221 123
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
              contact@industryalinc.com
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
