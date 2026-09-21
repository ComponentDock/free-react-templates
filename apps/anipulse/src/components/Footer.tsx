import { BRAND, NAV_LINKS } from '../data'

/* Footer recreated from the source template's footer: dark navy background
   with centered navigation links, a scroll-to-top button, and a copyright
   line linking Component Dock. */

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="footer" className="bg-navy-deep" role="contentinfo">
      {/* Scroll to top */}
      <div className="flex justify-center py-4">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-text-white transition-colors hover:bg-brand-hover"
        >
          ↑
        </button>
      </div>

      <div className="border-t border-border-dark">
        <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
          {/* Nav links */}
          <nav aria-label="Footer" className="flex flex-wrap justify-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-text-light transition-colors hover:text-brand"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Copyright + attribution */}
          <div className="mt-8 text-center">
            <p className="text-xs text-text-muted">
              Copyright &copy; {year} All rights reserved | Made with{' '}
              <span aria-hidden="true">♥</span> by{' '}
              <a
                href="https://www.componentdock.com/"
                className="text-brand transition-colors hover:text-brand-hover"
              >
                Component Dock
              </a>
            </p>
            <p className="mt-2 font-heading text-sm font-bold uppercase tracking-wider text-text-muted">
              {BRAND}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
