import { MapPin, Phone, Mail } from 'lucide-react'

const navLinks = ['Home', 'Rooms', 'About', 'News', 'Contact']

export function Footer() {
  return (
    <footer className="bg-brand-darkest text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-3 lg:px-8">
        {/* Brand + description */}
        <div className="space-y-4">
          <div className="flex flex-col">
            <span className="text-xs font-light tracking-widest uppercase text-white/60">
              hotel
            </span>
            <span className="font-display text-2xl font-bold">Belmont</span>
          </div>
          <p className="text-sm leading-relaxed text-white/60">
            Experience luxury and elegance at Belmont. Our hotel offers world-class amenities,
            stunning views, and exceptional service for an unforgettable stay.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
            Quick Links
          </h3>
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-white/70 transition hover:text-accent"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
            Contact Info
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-sm text-white/70">
              <MapPin size={18} className="mt-0.5 shrink-0 text-accent" />
              1610 5th Avenue, New York, NY 10028
            </li>
            <li className="flex items-center gap-3 text-sm text-white/70">
              <Phone size={18} className="shrink-0 text-accent" />
              +1 555 123 4567
            </li>
            <li className="flex items-center gap-3 text-sm text-white/70">
              <Mail size={18} className="shrink-0 text-accent" />
              info@belmont.com
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-xs text-white/50">© 2026 Belmont. All rights reserved.</p>
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-white/50 transition hover:text-accent"
          >
            Component Dock
          </a>
        </div>
      </div>
    </footer>
  )
}
