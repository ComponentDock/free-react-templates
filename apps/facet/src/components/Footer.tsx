import { BrandIcon, type BrandName } from './BrandIcon'

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'Facebook', name: 'facebook' },
  { label: 'X', name: 'x' },
  { label: 'Instagram', name: 'instagram' },
  { label: 'LinkedIn', name: 'linkedin' },
]

const linksLinks: ReadonlyArray<{ label: string; href: string }> = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Team', href: '#team' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

const serviceLinks: ReadonlyArray<{ label: string; href: string }> = [
  { label: 'Architectural Design', href: '#about' },
  { label: 'Lighting Design', href: '#about' },
  { label: 'AutoCAD Service', href: '#about' },
  { label: 'Interior Design', href: '#projects' },
]

export function Footer() {
  return (
    <footer className="bg-charcoal text-white/70">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div>
          <a href="#home" className="font-display text-2xl font-bold text-white">
            Facet<span className="text-brand">.</span>
          </a>
          <p className="mt-4 text-sm leading-relaxed">
            We have a passion in creating new and unique spaces, from concept to completion.
          </p>
          <h3 className="mt-8 font-display text-lg font-bold text-white">Connect</h3>
          <ul className="mt-4 flex items-center gap-2">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href="#contact"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-brand-dark"
                >
                  <BrandIcon name={social.name} className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Links">
          <h3 className="font-display text-lg font-bold text-white">Links</h3>
          <ul className="mt-4 space-y-2.5">
            {linksLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-sm transition-colors hover:text-brand">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services">
          <h3 className="font-display text-lg font-bold text-white">Services</h3>
          <ul className="mt-4 space-y-2.5">
            {serviceLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-sm transition-colors hover:text-brand">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-display text-lg font-bold text-white">Have a Questions?</h3>
          <p className="mt-4 text-sm leading-relaxed">
            203 Fake St. Mountain View, San Francisco, California, USA
          </p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a href="tel:+2392392210" className="transition-colors hover:text-brand">
                +2 392 3929 210
              </a>
            </li>
            <li>
              <a href="mailto:info@yourdomain.com" className="transition-colors hover:text-brand">
                info@yourdomain.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-black py-5 text-white/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 text-center text-xs sm:flex-row sm:px-6 sm:text-left">
          <p>© 2026 Facet. All rights reserved.</p>
          <p>recreation of ColorLib Square</p>
        </div>
      </div>
    </footer>
  )
}
