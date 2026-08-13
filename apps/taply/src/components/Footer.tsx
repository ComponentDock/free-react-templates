import { footerLinks } from '../data'

/** Centered white footer: copyright line crediting Component Dock plus
 *  PRESS / TERMS / PRIVACY links. */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-white px-4 py-10 text-center">
      <p className="text-sm text-muted">
        Copyright © {year} Taply. All rights reserved. · More templates at{' '}
        <a
          href="https://www.componentdock.com/"
          className="text-brand underline-offset-4 transition-colors hover:text-brand-purple hover:underline"
        >
          Component Dock
        </a>
      </p>
      <nav aria-label="Footer" className="mt-4">
        <ul className="flex items-center justify-center gap-6">
          {footerLinks.map((link) => (
            <li key={link}>
              <a
                href="#home"
                className="text-xs font-medium uppercase tracking-widest text-brand-purple transition-colors hover:text-brand"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  )
}
