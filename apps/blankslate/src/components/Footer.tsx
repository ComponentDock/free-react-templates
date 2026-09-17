import { MapPin, Phone, Mail } from 'lucide-react'

const usefulLinks = ['Home', 'About', 'Work', 'Pricing'] as const
const quickLinks = ['Blog', 'Contact', 'Careers', 'FAQ'] as const

export function Footer() {
  return (
    <footer role="contentinfo" className="bg-dark text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <a href="#home" className="font-display text-xl font-bold">
              BlankSlate
            </a>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              We help businesses build amazing products and digital experiences. Let us be your
              partner in growth and success.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-brand">
              Useful Links
            </h3>
            <ul className="mt-4 space-y-3">
              {usefulLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-brand">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-brand">
              Contact
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <span className="text-sm text-white/60">
                  123 Business Ave, Suite 100, New York, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <span className="text-sm text-white/60">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <span className="text-sm text-white/60">info@blankslate.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-white/50">
        © {new Date().getFullYear()} BlankSlate. Built with{' '}
        <a
          href="https://www.componentdock.com/"
          className="text-brand transition-colors hover:text-brand-dark"
          target="_blank"
          rel="noopener noreferrer"
        >
          Component Dock
        </a>
        . All rights reserved.
      </div>
    </footer>
  )
}
