import { Mail, MapPin, Phone } from 'lucide-react'

const pages = ['Blog', 'About', 'Contact'] as const
const resources = ['Blog', 'About', 'Contact'] as const

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {/* About */}
        <div>
          <a href="#home" className="font-display text-2xl font-bold text-white">
            Plumb <span className="text-primary-400">.</span>
          </a>
          <h2 className="mt-5 text-sm font-semibold uppercase tracking-wider text-white">About</h2>
          <p className="mt-4 text-sm leading-relaxed">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
          <div className="mt-6 flex gap-4">
            <a href="#" aria-label="Twitter" className="transition-colors hover:text-primary-400">
              Twitter
            </a>
            <a href="#" aria-label="Instagram" className="transition-colors hover:text-primary-400">
              Instagram
            </a>
            <a href="#" aria-label="Facebook" className="transition-colors hover:text-primary-400">
              Facebook
            </a>
          </div>
        </div>

        {/* Pages */}
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Pages</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {pages.map((page) => (
              <li key={page}>
                <a href="#" className="transition-colors hover:text-primary-400">
                  {page}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Resources</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {resources.map((res) => (
              <li key={res}>
                <a href="#" className="transition-colors hover:text-primary-400">
                  {res}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
              <a href="mailto:info@plumb.dev" className="transition-colors hover:text-primary-400">
                info@plumb.dev
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
              <a href="tel:+12222123819" className="transition-colors hover:text-primary-400">
                +1 222 212 3819
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
              <span>43 Raymouth Rd. Baltemoer, London 3910</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 py-6 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} Plumb. All rights reserved. More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-400 transition-colors hover:text-primary-300"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
