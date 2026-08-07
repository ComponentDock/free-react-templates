import { ButtonLink } from '@free-react-templates/ui'
import { SocialLinks } from './SocialLinks'

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
] as const

const services = [
  { label: 'Interior', href: '#services' },
  { label: 'Exterior', href: '#services' },
  { label: 'Bridge', href: '#services' },
] as const

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-8 border-b border-white/10 pb-14 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h2 className="text-3xl font-medium text-white sm:text-4xl">
              Do You Have Any Project or Query?
            </h2>
            <p className="mt-4 font-serif text-base leading-relaxed text-white/60">
              Tell us about your site, your brief, or your budget — we&rsquo;ll come back with
              ideas, not jargon.
            </p>
          </div>
          <ButtonLink
            href="#contact"
            className="h-auto shrink-0 rounded-none border border-white bg-transparent px-11 py-[18px] text-sm font-normal uppercase tracking-[0.2em] text-white hover:bg-white hover:text-ink"
          >
            Contact Us
          </ButtonLink>
        </div>

        <div className="grid gap-12 py-14 md:grid-cols-3">
          <div>
            <a href="#home" className="flex flex-col leading-none">
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                Atrium
              </span>
              <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.3em] text-white/50">
                Architecture
              </span>
            </a>
            <p className="mt-6 max-w-xs font-serif text-sm leading-relaxed text-white/50">
              Architecture and interior design studio crafting calm, considered spaces since 2001.
            </p>
            <div className="mt-8">
              <SocialLinks />
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <h3 className="text-xs font-medium uppercase tracking-[0.25em] text-white/50">
              Navigation
            </h3>
            <ul className="mt-6 space-y-3">
              {navigation.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer services">
            <h3 className="text-xs font-medium uppercase tracking-[0.25em] text-white/50">
              Services
            </h3>
            <ul className="mt-6 space-y-3">
              {services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="border-t border-white/10 pt-10 text-center text-sm text-white/50">
          © 2026 Atrium. All rights reserved | Recreation of the ColorLib Ararat design
        </p>
      </div>
    </footer>
  )
}
