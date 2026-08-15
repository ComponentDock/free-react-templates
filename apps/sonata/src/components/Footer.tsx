import { footerWidgets, socials } from '../data'
import { BrandIcon } from './icons'

const socialLabels: Record<string, string> = {
  instagram: 'Instagram',
  pinterest: 'Pinterest',
  facebook: 'Facebook',
  twitter: 'Twitter',
  youtube: 'YouTube',
}

export function Footer() {
  return (
    <footer className="bg-navy">
      <div className="mx-auto max-w-6xl px-4 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#home" className="text-2xl font-bold tracking-wide">
              <span className="text-brand">Son</span>
              <span className="text-white">ata</span>
            </a>
            <p className="mt-6 max-w-sm text-white/60">
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Quis ipsum suspendisse ultrices gravida.
            </p>
            <div className="mt-8 flex gap-4">
              {socials.map((social) => (
                <a
                  key={social}
                  href="#social"
                  aria-label={socialLabels[social]}
                  className="text-muted transition-colors hover:text-brand"
                >
                  <BrandIcon name={social} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          {footerWidgets.map((widget) => (
            <div key={widget.title}>
              <h2 className="text-base font-semibold uppercase text-white">{widget.title}</h2>
              <ul className="mt-6 space-y-3">
                {widget.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-muted transition-colors hover:text-brand">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-sm text-muted">
        © {new Date().getFullYear()} Sonata. All rights reserved · Made with{' '}
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
