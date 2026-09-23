import { Mail, Phone, ExternalLink } from 'lucide-react'

const homeLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Practice Areas', href: '#practice-areas' },
  { label: 'Services', href: '#expertise' },
  { label: 'Attorneys', href: '#attorneys' },
  { label: 'Terms', href: '#' },
  { label: 'Privacy', href: '#' },
] as const

const practiceLinks = [
  { label: 'Banking Law', href: '#practice-areas' },
  { label: 'Commercial Law', href: '#practice-areas' },
  { label: 'Corporate Law', href: '#practice-areas' },
  { label: 'Family Law', href: '#practice-areas' },
  { label: 'Media Law', href: '#practice-areas' },
] as const

const serviceLinks = [
  { label: 'Labor Law', href: '#expertise' },
  { label: 'Employment', href: '#expertise' },
  { label: 'Property Law', href: '#expertise' },
  { label: 'Prosecution', href: '#expertise' },
] as const

export function Footer() {
  return (
    <footer id="contact" className="bg-surface text-gray-400">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Home</h3>
          <ul className="space-y-2 text-sm">
            {homeLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-primary-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Practice Area
          </h3>
          <ul className="space-y-2 text-sm">
            {practiceLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-primary-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Services
          </h3>
          <ul className="space-y-2 text-sm">
            {serviceLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-primary-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Contact
          </h3>
          <address className="not-italic text-sm">43 Raymouth Rd. Baltemoer, London 3910</address>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
              <a href="tel:+11234567890" className="transition-colors hover:text-primary-400">
                +1(123)-456-7890
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
              <a
                href="mailto:info@litigator.com"
                className="transition-colors hover:text-primary-400"
              >
                info@litigator.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 py-6 text-center text-sm">
        <p>
          © {new Date().getFullYear()} Litigator. All rights reserved. More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-400 transition-colors hover:text-primary-300"
          >
            Component Dock <ExternalLink className="inline h-3 w-3" aria-hidden="true" />
          </a>
        </p>
      </div>
    </footer>
  )
}
