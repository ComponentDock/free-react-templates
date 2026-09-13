import { MapPin, Phone, Mail } from 'lucide-react'
import { BrandIcon, type BrandName } from './BrandIcon'

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'Facebook', name: 'facebook' },
  { label: 'Twitter', name: 'twitter' },
  { label: 'Instagram', name: 'instagram' },
  { label: 'Dribbble', name: 'dribbble' },
]

const exploreLinks = ['Home', 'About', 'Services', 'Portfolio', 'Blog'] as const
const companyLinks = ['About Us', 'Services', 'Privacy Policy', 'Terms'] as const

export function Footer() {
  return (
    <footer className="bg-darker-bg text-gray-400">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand + Social */}
          <div>
            <a href="#home" className="font-display text-2xl text-white">
              Techwise
            </a>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              We are a creative digital agency dedicated to delivering innovative solutions that
              drive business growth and success.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded border border-gray-600 text-gray-400 transition-colors hover:border-brand hover:bg-brand hover:text-white"
                >
                  <BrandIcon name={social.name} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-lg font-bold text-white">Explore</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {exploreLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold text-white">Company</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Have a Questions? */}
          <div>
            <h3 className="text-lg font-bold text-white">Have a Questions?</h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <span>123 Creative Street, Digital City, DC 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <span>+10 367 267 2678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <span>info@techwise.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
