import { navLinks, socialLinks } from '../data'
import { BrandIcon } from './BrandIcon'

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer id="contact" className="bg-white pb-16 pt-14 text-center">
      <nav
        aria-label="Footer"
        className="flex flex-wrap items-center justify-center gap-x-10 gap-y-2"
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-sm font-semibold uppercase text-ink transition-colors hover:text-brand"
          >
            {link.label}
          </a>
        ))}
      </nav>
      <div className="mt-10 flex items-center justify-center gap-4">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.href}
            aria-label={social.name}
            target="_blank"
            rel="noreferrer"
            className="rounded-md p-3 text-muted transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            <BrandIcon name={social.name} />
          </a>
        ))}
      </div>
      <p className="mt-8 text-sm text-muted">
        © {year} All rights reserved&ensp;|&ensp;Made with ♥ — More templates at{' '}
        <a
          href="https://www.componentdock.com/"
          target="_blank"
          rel="noreferrer"
          className="font-medium text-brand hover:underline"
        >
          Component Dock
        </a>
      </p>
    </footer>
  )
}
