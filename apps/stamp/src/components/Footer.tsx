import { Phone, Mail, Globe } from 'lucide-react'

const SERVICES_LINKS = [
  'Car accident',
  'Personal injury',
  'Family law',
  'Bank and financial',
  'Capital market',
  'Employment Law',
] as const

const GALLERY_IMAGES = [
  'https://picsum.photos/seed/stamp-gal1/120/120',
  'https://picsum.photos/seed/stamp-gal2/120/120',
  'https://picsum.photos/seed/stamp-gal3/120/120',
  'https://picsum.photos/seed/stamp-gal4/120/120',
  'https://picsum.photos/seed/stamp-gal5/120/120',
  'https://picsum.photos/seed/stamp-gal6/120/120',
] as const

export function Footer() {
  return (
    <footer className="bg-[#1a1d2e] pt-16 text-gray-400">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo + description */}
          <div>
            <a href="/" className="text-2xl font-bold text-white">
              Stamp
            </a>
            <p className="mt-4 text-sm leading-relaxed">
              So seed seed green that winged cattle in Gahesd thing made fly you&apos;re no divided
              deep move lan Gathering thing us land years living on floor me the cavity.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">Best Services</h4>
            <ul className="flex flex-col gap-2">
              {SERVICES_LINKS.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm hover:text-brand transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Gallery */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">Our Gallery</h4>
            <div className="grid grid-cols-3 gap-2">
              {GALLERY_IMAGES.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  className="h-16 w-16 rounded object-cover"
                  loading="lazy"
                />
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">Contact Info</h4>
            <p className="text-sm leading-relaxed">
              4361 Morningview Lane Artland, Pall Street Latimer, IA 50452
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              <li className="flex items-center gap-2 text-sm">
                <Phone size={14} />
                <span>+02 - 32 365 2654</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail size={14} />
                <span>ariclaw@law.com</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Globe size={14} />
                <span>stamp.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 border-t border-gray-700 py-6 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
          <span className="text-brand">&#9829;</span> by{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-brand transition-colors"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
