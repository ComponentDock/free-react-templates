import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { BrandIcon, type BrandName } from './BrandIcon'

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'Facebook', name: 'facebook' },
  { label: 'Twitter', name: 'x' },
  { label: 'Instagram', name: 'instagram' },
  { label: 'Dribbble', name: 'dribbble' },
]

const services = [
  'Oil Change',
  'Tire Change',
  'Batteries',
  'Engine Repair',
  'Tow Truck',
  'Car Maintenance',
] as const

export function Footer() {
  return (
    <footer id="contact" className="bg-coal text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand + blurb. */}
          <div>
            <p className="font-display text-2xl font-extrabold uppercase tracking-tight">
              Torquely<span className="text-brand">.</span>
            </p>
            <p className="mt-5 text-sm leading-relaxed text-white/60">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#contact"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-brand hover:bg-brand hover:text-white"
                >
                  <BrandIcon name={social.name} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services links. */}
          <div>
            <h2 className="font-display text-lg font-bold uppercase tracking-wide text-white/80">
              Services
            </h2>
            <ul className="mt-5 space-y-2 text-sm text-white/60">
              {services.map((service) => (
                <li key={service}>
                  <a href="#services" className="transition-colors hover:text-brand">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact information. */}
          <div>
            <h2 className="font-display text-lg font-bold uppercase tracking-wide text-white/80">
              Contact information
            </h2>
            <p className="mt-5 flex items-start gap-2 text-sm leading-relaxed text-white/60">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              203 Fake St. Mountain View, San Francisco, California, USA
            </p>
            <p className="mt-3 flex items-center gap-2 text-sm text-white/60">
              <Phone className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" /> +2 392 3929 210
            </p>
            <p className="mt-3 flex items-center gap-2 text-sm text-white/60">
              <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              info@yourdomain.com
            </p>
          </div>

          {/* Business hours. */}
          <div>
            <h2 className="font-display text-lg font-bold uppercase tracking-wide text-white/80">
              Business Hours
            </h2>
            <h3 className="mt-5 text-sm font-semibold text-white/80">Opening Days:</h3>
            <p className="mt-2 flex items-center gap-2 text-sm text-white/60">
              <Clock className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              Monday – Friday : 9am to 20pm
            </p>
            <p className="mt-2 flex items-center gap-2 text-sm text-white/60">
              <Clock className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              Saturday : 9am to 17pm
            </p>
            <h3 className="mt-5 text-sm font-semibold text-white/80">Vacations:</h3>
            <p className="mt-2 text-sm text-white/60">All Sunday Days</p>
            <p className="mt-1 text-sm text-white/60">All Official Holidays</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-8 text-center text-xs text-white/50 sm:flex-row sm:text-left">
          <p>© 2026 Torquely. All rights reserved.</p>
          <p>recreation of ColorLib Autorepair</p>
        </div>
      </div>
    </footer>
  )
}
