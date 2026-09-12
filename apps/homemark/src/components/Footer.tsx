import { brand, footer, socialLinks } from '../data'

/** Dark footer with brand, link columns, social icons, and copyright bar. */
export function Footer() {
  return (
    <footer className="bg-navy py-16" data-testid="footer">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <span className="text-xl font-bold text-white">{brand.name}</span>
            <p className="mt-3 max-w-xs text-sm text-white/60">
              Your trusted partner in finding the perfect home. We connect buyers with properties
              that match their lifestyle.
            </p>
          </div>

          {/* Link columns */}
          {footer.columns.map((col) => (
            <div key={col.heading}>
              <h5 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">
                {col.heading}
              </h5>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social */}
          <div>
            <h5 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">Social</h5>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs text-white transition-colors hover:bg-brand"
                  aria-label={s.label}
                >
                  {s.label[0]}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs uppercase text-white/40">
          Copyright &copy; {new Date().getFullYear()}. All rights reserved | Made with care by{' '}
          <a
            href="https://www.componentdock.com/"
            className="text-brand underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Component Dock
          </a>
        </div>
      </div>
    </footer>
  )
}
