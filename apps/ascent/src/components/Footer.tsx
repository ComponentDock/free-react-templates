import { Rocket } from 'lucide-react'
import { footerLinks, socials } from '../data'
import { BrandIcon } from './icons'

const socialLabels: Record<string, string> = {
  facebook: 'Facebook',
  twitter: 'Twitter',
  instagram: 'Instagram',
}

export function Footer() {
  return (
    <footer className="bg-ink">
      <div className="mx-auto max-w-6xl px-4 py-16 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <a href="#home" className="flex items-center gap-2 text-2xl font-bold tracking-wide">
            <Rocket className="h-6 w-6 text-brand" aria-hidden="true" />
            <span className="text-white">Ascent</span>
          </a>
          <ul className="flex flex-wrap items-center justify-center gap-7">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-base text-white/70 transition-colors hover:text-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex gap-4">
            {socials.map((social) => (
              <a
                key={social}
                href="#home"
                aria-label={socialLabels[social]}
                className="text-white/70 transition-colors hover:text-brand"
              >
                <BrandIcon name={social} className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Ascent. All rights reserved · More templates at{' '}
        <a
          href="https://www.componentdock.com/"
          className="font-medium text-brand transition-colors hover:text-brand-dark"
        >
          Component Dock
        </a>
      </div>
    </footer>
  )
}
