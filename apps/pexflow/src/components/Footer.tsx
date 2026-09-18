import { Phone, MapPin, Mail, Clock } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const serviceLinks = [
  'Building Construction',
  'Architecture Design',
  'Interior Design',
  'Renovation',
  'Consulting',
] as const

const galleryImages = [
  'https://picsum.photos/seed/pexflow-g1/120/120',
  'https://picsum.photos/seed/pexflow-g2/120/120',
  'https://picsum.photos/seed/pexflow-g3/120/120',
  'https://picsum.photos/seed/pexflow-g4/120/120',
  'https://picsum.photos/seed/pexflow-g5/120/120',
  'https://picsum.photos/seed/pexflow-g6/120/120',
]

export function Footer() {
  return (
    <footer id="contact" className="bg-heading text-gray-400">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-4">
        {/* Column 1 — About */}
        <div>
          <a href="#home" className="text-xl font-bold text-white">
            Pex<span className="text-brand">flow</span>
          </a>
          <p className="mt-4 text-sm leading-relaxed">
            Pexflow delivers world-class construction and engineering solutions. Quality workmanship
            and client satisfaction are at the core of everything we do.
          </p>
        </div>

        {/* Column 2 — Services */}
        <div>
          <h3 className="text-lg font-bold text-white">Best Services</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {serviceLinks.map((link) => (
              <li key={link}>
                <a href="#services" className="transition-colors hover:text-white">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Gallery */}
        <div>
          <h3 className="text-lg font-bold text-white">Our Gallery</h3>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {galleryImages.map((src) => (
              <img
                key={src}
                src={src}
                alt="Gallery thumbnail"
                className="h-16 w-16 rounded object-cover"
              />
            ))}
          </div>
        </div>

        {/* Column 4 — Contact */}
        <div>
          <h3 className="text-lg font-bold text-white">Contact Info</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              42 Construction Ave, London EC1A 1BB
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              +1 (555) 987-6543
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              info@pexflow.com
            </li>
            <li className="flex items-start gap-2">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <span>
                Mon - Fri: 08:00 - 18:00
                <br />
                Sat: 09:00 - 14:00
              </span>
            </li>
          </ul>
          <Button
            variant="primary"
            className="mt-4 rounded bg-brand px-6 py-2 text-sm font-bold text-white hover:bg-brand-dark"
          >
            Get a Quote
          </Button>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-gray-700">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-5 sm:flex-row sm:px-6">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Pexflow. All rights reserved. More templates at{' '}
            <a href="https://www.componentdock.com/" className="text-brand hover:underline">
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
