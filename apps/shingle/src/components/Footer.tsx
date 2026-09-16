import { Mail, Phone, MapPin } from 'lucide-react'

const serviceLinks = [
  'Skylights',
  'Waterproofing',
  'Industrial Roofing',
  'Residential Roofing',
  'Gutter Cleaning',
  'Commercial Roofing',
]

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      <div className="container mx-auto grid gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <h3 className="mb-4 text-lg font-bold text-white">Shingle</h3>
          <p className="text-sm leading-relaxed text-gray-400">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">Services</h4>
          <ul className="space-y-2">
            {serviceLinks.map((s) => (
              <li key={s}>
                <a href="#services" className="text-sm text-gray-400 hover:text-gold-400">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Business Hours */}
        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">
            Business Hours
          </h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Opening Days:</li>
            <li>Monday – Friday: 9am to 8pm</li>
            <li>Saturday: 9am to 5pm</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">
            Contact Information
          </h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-sm text-gray-400">
              <MapPin size={16} className="shrink-0 text-gold-400" />
              123 Roof Street, Builder City, BC 12345
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-400">
              <Phone size={16} className="shrink-0 text-gold-400" />
              +1 (555) 123-4567
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-400">
              <Mail size={16} className="shrink-0 text-gold-400" />
              info@shingle.com
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-4">
        <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 text-xs text-gray-500 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Shingle. All rights reserved.</p>
          <p>
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-gold-400 hover:underline"
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
