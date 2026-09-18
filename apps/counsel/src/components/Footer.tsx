import { Globe, Mail, Share2, MapPin, Phone } from 'lucide-react'

const practiceAreas = [
  'Family Law',
  'Business Law',
  'Insurance Law',
  'Criminal Law',
  'Property Law',
  'Employment Law',
] as const

const businessHours = [
  { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
  { day: 'Saturday', hours: '9:00 AM - 4:00 PM' },
  { day: 'Sunday', hours: 'Closed' },
] as const

export function Footer() {
  return (
    <footer id="contact" className="bg-[#1d2124] text-gray-400">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div>
          <a href="#home" className="font-display text-2xl font-bold tracking-wide text-white">
            Counsel
          </a>
          <p className="mt-4 text-sm leading-relaxed">
            We are committed to providing exceptional legal services with integrity and
            professionalism. Trust our experienced team to protect your rights.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="#"
              aria-label="Website"
              className="text-gray-400 transition-colors hover:text-white"
            >
              <Globe className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="#"
              aria-label="Email"
              className="text-gray-400 transition-colors hover:text-white"
            >
              <Mail className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="#"
              aria-label="Share"
              className="text-gray-400 transition-colors hover:text-white"
            >
              <Share2 className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
            Practice Areas
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {practiceAreas.map((area) => (
              <li key={area}>
                <a href="#practice-areas" className="transition-colors hover:text-white">
                  {area}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
            Business Hours
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            {businessHours.map((schedule) => (
              <li key={schedule.day}>
                <p className="font-medium text-white">{schedule.day}</p>
                <p className="mt-0.5">{schedule.hours}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
            Contact Info
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-500" aria-hidden="true" />
              <span>123 Legal Avenue, Suite 500, New York, NY 10001</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-primary-500" aria-hidden="true" />
              <a href="tel:+18005551234" className="transition-colors hover:text-white">
                +1 (800) 555-1234
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-primary-500" aria-hidden="true" />
              <a href="mailto:info@counsel.com" className="transition-colors hover:text-white">
                info@counsel.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 py-6 text-center text-sm">
        <p>
          © {new Date().getFullYear()} Counsel. All rights reserved. More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-500 transition-colors hover:text-primary-400"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
