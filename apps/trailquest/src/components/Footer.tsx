import { Twitter, Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react'

const informationLinks = [
  'About Us',
  'Online enquiry',
  'Call Us',
  'General enquiries',
  'Booking Conditions',
  'Privacy and Policy',
  'Refund policy',
]
const experienceLinks = ['Beach', 'Adventure', 'Wildlife', 'Honeymoon', 'Nature', 'Party']

export function Footer() {
  return (
    <footer className="bg-footer py-16 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 md:grid-cols-4">
        {/* Brand */}
        <div>
          <h3 className="font-display text-2xl">Trailquest</h3>
          <p className="mt-3 text-sm text-white/60">
            Discover the world with us. Unforgettable journeys await.
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href="#"
              aria-label="Twitter"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary"
            >
              <Twitter size={16} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary"
            >
              <Facebook size={16} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary"
            >
              <Instagram size={16} />
            </a>
          </div>
        </div>

        {/* Information */}
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Information</h4>
          <ul className="flex flex-col gap-2">
            {informationLinks.map((link) => (
              <li key={link}>
                <a href="#" className="text-sm text-white/60 transition-colors hover:text-primary">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Experience */}
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Experience</h4>
          <ul className="flex flex-col gap-2">
            {experienceLinks.map((link) => (
              <li key={link}>
                <a href="#" className="text-sm text-white/60 transition-colors hover:text-primary">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Contact Info</h4>
          <ul className="flex flex-col gap-3">
            <li className="flex items-start gap-2 text-sm text-white/60">
              <MapPin size={16} className="mt-0.5 flex-shrink-0" />
              <span>123 Travel Street, Adventure City, TC 12345</span>
            </li>
            <li className="flex items-center gap-2 text-sm text-white/60">
              <Phone size={16} className="flex-shrink-0" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center gap-2 text-sm text-white/60">
              <Mail size={16} className="flex-shrink-0" />
              <span>info@trailquest.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mx-auto mt-12 max-w-6xl border-t border-white/10 px-4 pt-8 text-center text-sm text-white/40">
        <p>
          &copy; {new Date().getFullYear()} Trailquest. Made with{' '}
          <a
            href="https://www.componentdock.com/"
            className="text-primary transition-colors hover:text-primary-dark"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
