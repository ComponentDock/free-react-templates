import { BrandIcon } from './BrandIcon'
import { navLinks, socialLabels, socialLinks } from '../data'

export function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex flex-col items-center gap-8">
          <a href="#home" className="font-sans text-2xl font-light tracking-[0.35em] text-white">
            Marginalia
          </a>
          <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {navLinks.map((link, index) => (
              <a
                key={link}
                href={index === 0 ? '#home' : `#${link.toLowerCase()}`}
                className="text-xs uppercase tracking-[0.15rem] text-white/70 transition-colors hover:text-white"
              >
                {link}
              </a>
            ))}
          </nav>
          <ul className="flex items-center gap-6" aria-label="Footer social links">
            {socialLinks.map((name) => (
              <li key={name}>
                <a
                  href="#home"
                  aria-label={socialLabels[name]}
                  className="flex h-8 w-8 items-center justify-center text-white/70 transition-colors hover:text-white"
                >
                  <BrandIcon name={name} className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <p className="text-center text-xs text-white/50">
          Copyright © 2026 Marginalia. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
