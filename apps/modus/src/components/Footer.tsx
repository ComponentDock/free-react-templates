import { Mail, MapPin, Phone } from 'lucide-react'

const quickLinks = ['Home', 'Services', 'Work', 'About', 'Contact'] as const

const companyLinks = ['About', 'Review', 'Insights', 'Carrier'] as const

export function Footer() {
  return (
    <footer className="bg-ink-dark text-white transition-colors dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#home" className="font-display text-xl font-bold uppercase tracking-[0.15em]">
              Modus
            </a>
            <p className="mt-6 text-sm leading-relaxed text-gray-400">
              The automated process starts as soon as your clothes go into the machine.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {['X', 'Facebook', 'Pinterest'].map((label) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded border border-gray-600 text-gray-400 transition-colors hover:border-brand hover:bg-brand hover:text-white"
                >
                  <span className="text-xs font-bold">{label[0]}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-brand">
              Our Solutions
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-gray-400">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-brand">
              Company
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-gray-400">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-brand">
              Contact Us
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-gray-400">
              <li>
                <a
                  href="mailto:consulto98@gmail.com"
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  consulto98@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                76/A, Green road, NY
              </li>
              <li>
                <a
                  href="tel:807833673904"
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  (80) 783 367-3904
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 py-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Modus Interior Design. All rights reserved. · Made with{' '}
        <a
          href="https://www.componentdock.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand hover:text-white"
        >
          Component Dock
        </a>
      </div>
    </footer>
  )
}
