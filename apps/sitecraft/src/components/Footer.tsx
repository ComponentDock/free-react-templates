import { MapPin, Globe, Phone, Mail } from 'lucide-react'

const infoLinks = [
  'Our Company',
  'Certification',
  'Our Services',
  'Career',
  'Core Values',
  'Company History',
  'FAQ',
] as const

const instagramImages = [
  'https://picsum.photos/seed/sitecraft-insta1/120/120',
  'https://picsum.photos/seed/sitecraft-insta2/120/120',
  'https://picsum.photos/seed/sitecraft-insta3/120/120',
  'https://picsum.photos/seed/sitecraft-insta4/120/120',
  'https://picsum.photos/seed/sitecraft-insta5/120/120',
  'https://picsum.photos/seed/sitecraft-insta6/120/120',
] as const

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-400">
      {/* Contact bar */}
      <div className="border-b border-gray-800">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-4 py-10 text-center sm:grid-cols-3 sm:px-6">
          <div>
            <MapPin className="mx-auto h-5 w-5 text-brand" aria-hidden="true" />
            <p className="mt-2 text-sm">291 South 21th Street, Suite 721 New York NY 10016</p>
          </div>
          <div>
            <Globe className="mx-auto h-5 w-5 text-brand" aria-hidden="true" />
            <p className="mt-2 text-sm">
              <a href="mailto:info@example.com" className="transition-colors hover:text-brand">
                info@example.com
              </a>
              <br />
              <a href="https://www.example.com" className="transition-colors hover:text-brand">
                www.example.com
              </a>
            </p>
          </div>
          <div>
            <Phone className="mx-auto h-5 w-5 text-brand" aria-hidden="true" />
            <p className="mt-2 text-sm">
              <a href="tel:+1234567890" className="transition-colors hover:text-brand">
                (001) 2345 6789
              </a>
              <br />
              <a href="tel:+1987654321" className="transition-colors hover:text-brand">
                (001) 9876 5432
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {/* About */}
        <div>
          <h4 className="text-base font-semibold text-white">About Sitecraft</h4>
          <p className="mt-4 text-sm leading-relaxed">
            Far from the countries Vokalia and Consonantia, there live the blind texts. Separated
            they live in Bookmarksgrove right at the coast of the Semantics.
          </p>
          <div className="mt-4 flex gap-3">
            {['Twitter', 'Facebook', 'LinkedIn', 'Dribbble'].map((s) => (
              <a
                key={s}
                href="#"
                className="text-xs text-gray-400 transition-colors hover:text-brand"
                aria-label={s}
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Information */}
        <div>
          <h4 className="text-base font-semibold text-white">Information</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {infoLinks.map((link) => (
              <li key={link}>
                <a href="#" className="transition-colors hover:text-brand">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Instagram */}
        <div>
          <h4 className="text-base font-semibold text-white">Instagram</h4>
          <div className="mt-4 grid grid-cols-3 gap-1">
            {instagramImages.map((src, i) => (
              <a key={src} href="#" aria-label={`Instagram post ${i + 1}`}>
                <img
                  src={src}
                  alt={`Instagram post ${i + 1}`}
                  className="h-16 w-full rounded object-cover"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="text-base font-semibold text-white">Contact Info</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li>291 South 21th Street, Suite 721 New York NY 10016</li>
            <li>
              <a
                href="tel:+1235235598"
                className="flex items-center gap-2 transition-colors hover:text-brand"
              >
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />+ 1235 2355 98
              </a>
            </li>
            <li>
              <a
                href="mailto:info@yoursite.com"
                className="flex items-center gap-2 transition-colors hover:text-brand"
              >
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                info@yoursite.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-6 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} Sitecraft. All rights reserved. More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            className="text-brand transition-colors hover:underline"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
