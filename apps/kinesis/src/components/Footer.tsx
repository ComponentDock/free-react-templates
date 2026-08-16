import { Mail, MapPin, Phone } from 'lucide-react'
import { address, email, footerLinks, phoneDisplay, phoneHref, socials } from '../data'

/* Dark footer: brand + blurb + red circular social icons, an Explore
   link column, a contacts column, and a black bottom bar crediting
   Component Dock. */
export function Footer() {
  return (
    <footer id="contact" aria-label="Footer" className="bg-ink text-white/70">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-2 lg:grid-cols-3 lg:px-8 lg:py-24">
        <div>
          <p className="font-display text-xl font-bold uppercase text-white">
            Kinesis <span className="text-primary">Crossfit</span> &amp; Fitness
          </p>
          <p className="mt-5 text-sm leading-relaxed">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
          <ul className="mt-6 flex gap-2" aria-label="Social media">
            {socials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-blue"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-[18px] w-[18px]"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d={social.path} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Explore">
          <h2 className="mb-8 font-display text-xl font-bold text-white">Explore</h2>
          <ul className="space-y-3 text-sm">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-primary">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-8 font-display text-xl font-bold text-white">Our Contacts</h2>
          <ul className="space-y-5 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <span>{address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <a href={phoneHref} className="transition-colors hover:text-primary">
                {phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <a href={'mailto:' + email} className="transition-colors hover:text-primary">
                {email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-black/50 py-5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 text-center text-sm md:flex-row lg:px-8">
          <p>© 2026 Kinesis. All rights reserved.</p>
          <p>
            Made with{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-semibold text-primary transition-colors hover:text-blue"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
