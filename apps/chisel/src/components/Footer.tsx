import { BrandIcon, type BrandName } from './BrandIcon'

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'Facebook', name: 'facebook' },
  { label: 'X', name: 'x' },
  { label: 'Instagram', name: 'instagram' },
  { label: 'LinkedIn', name: 'linkedin' },
]

const homeLinks: ReadonlyArray<{ label: string; href: string }> = [
  { label: 'Colorlib', href: '#home' },
  { label: 'About us', href: '#about' },
  { label: 'Practice Area', href: '#services' },
  { label: 'Services', href: '#services' },
  { label: 'Attorneys', href: '#home' },
  { label: 'Terms', href: '#home' },
  { label: 'Privacy', href: '#home' },
]

const practiceLinks: ReadonlyArray<{ label: string; href: string }> = [
  { label: 'Architect', href: '#services' },
  { label: 'Projects', href: '#portfolio' },
  { label: 'Colorlib', href: '#home' },
  { label: 'Free Templates', href: '#home' },
  { label: 'WordPress Themes', href: '#home' },
]

const serviceLinks: ReadonlyArray<{ label: string; href: string }> = [
  { label: 'Colorlib', href: '#home' },
  { label: 'House Renovation', href: '#services' },
  { label: 'Interior Design', href: '#services' },
  { label: 'Installation Works', href: '#services' },
]

export function Footer() {
  return (
    <footer id="contact" className="bg-charcoal text-white/70">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <nav aria-label="Home links">
          <h3 className="font-display text-lg font-bold text-white">Home</h3>
          <ul className="mt-4 space-y-2.5">
            {homeLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-sm transition-colors hover:text-brand">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Practice area links">
          <h3 className="font-display text-lg font-bold text-white">Practice Area</h3>
          <ul className="mt-4 space-y-2.5">
            {practiceLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-sm transition-colors hover:text-brand">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Service links">
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
          <h3 className="font-display text-lg font-bold text-white">Contact</h3>
          <p className="mt-4 text-sm leading-relaxed">43 Raymouth Rd. Baltemoer, London 3910</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a href="tel://11234567890" className="transition-colors hover:text-brand">
                +1(123)-456-7890
              </a>
            </li>
            <li>
              <a href="mailto:info@mydomain.com" className="transition-colors hover:text-brand">
                info@mydomain.com
              </a>
            </li>
          </ul>
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
      </div>

      <div className="bg-black py-5 text-white/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 text-center text-xs sm:flex-row sm:px-6 sm:text-left">
          <p>© 2026 Chisel. All rights reserved.</p>
          <p>recreation of ColorLib Reshape</p>
        </div>
      </div>
    </footer>
  )
}
