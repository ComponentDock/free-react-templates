import { MapPin, Phone, Mail } from 'lucide-react'

const quickLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'News', href: '#guestbook' },
  { label: 'Contact', href: '#contact' },
]

const instagramPhotos = [
  'https://picsum.photos/seed/lodge-footer1/100/100',
  'https://picsum.photos/seed/lodge-footer2/100/100',
  'https://picsum.photos/seed/lodge-footer3/100/100',
  'https://picsum.photos/seed/lodge-footer4/100/100',
]

export function Footer() {
  return (
    <footer id="contact" className="bg-lodge-900 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {/* About */}
        <div>
          <h3 className="mb-4 text-2xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
            Lodge
          </h3>
          <p className="mb-4 text-sm leading-relaxed text-lodge-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus libero mauris, bibendum
            eget sapien ac.
          </p>
          <div className="flex items-center gap-2 text-sm text-lodge-300">
            <MapPin className="h-4 w-4 shrink-0" />
            <span>1525 Boring Lane, Los Angeles, CA</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-lodge-300 hover:text-gold-500 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Instagram */}
        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider">Instagram</h4>
          <div className="grid grid-cols-2 gap-1">
            {instagramPhotos.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Instagram ${i + 1}`}
                className="aspect-square w-full rounded object-cover"
                loading="lazy"
              />
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider">Newsletter</h4>
          <p className="mb-3 text-sm text-lodge-300">Subscribe for exclusive offers and updates.</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 rounded border border-lodge-600 bg-lodge-800 px-3 py-2 text-sm text-white placeholder-lodge-400 focus:border-gold-500 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded bg-gold-500 px-4 py-2 text-sm font-bold text-lodge-900 transition hover:bg-gold-600"
            >
              Subscribe
            </button>
          </form>
          <div className="mt-4 flex gap-3">
            <a href="tel:+15551234567" aria-label="Phone">
              <Phone className="h-4 w-4 text-lodge-400 hover:text-gold-500 transition-colors" />
            </a>
            <a href="mailto:info@lodgehotel.com" aria-label="Email">
              <Mail className="h-4 w-4 text-lodge-400 hover:text-gold-500 transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright + Component Dock */}
      <div className="border-t border-lodge-700">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 sm:flex-row lg:px-8">
          <p className="text-xs text-lodge-400">
            &copy; {new Date().getFullYear()} Lodge. All rights reserved.
          </p>
          <p className="text-xs text-lodge-400">
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-gold-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
