import { Church, Mail, MapPin, Phone } from 'lucide-react'
import { FacebookIcon, InstagramIcon, YouTubeIcon } from './social-icons'

const visitLinks = ['Service Times', 'Plan Your Visit', 'What to Expect', 'Directions']
const connectLinks = ['About Us', 'Join a Group', 'Serve', 'Give']
const resourceLinks = ['Watch Sermons', 'Podcast', 'Hope City Kids', 'Contact Us']

const socials = [
  { name: 'Facebook', href: 'https://facebook.com', Icon: FacebookIcon },
  { name: 'Instagram', href: 'https://instagram.com', Icon: InstagramIcon },
  { name: 'YouTube', href: 'https://youtube.com', Icon: YouTubeIcon },
] as const

export function Footer() {
  return (
    <footer className="bg-charcoal-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-3" aria-label="Congregate home">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500 text-white">
                <Church className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-xl font-semibold tracking-tight">Congregate</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-charcoal-300">
              A welcoming community in Austin, TX where everyone belongs. Join us Sundays at 9:00 AM
              or 11:00 AM.
            </p>
            <div className="mt-6 flex gap-4">
              {socials.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={name}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-charcoal-300 transition-colors hover:bg-amber-500 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <FooterColumn title="Visit" links={visitLinks} />
          <FooterColumn title="Connect" links={connectLinks} />
          <FooterColumn title="Resources" links={resourceLinks} />
        </div>

        {/* Contact */}
        <div className="mt-12 border-t border-charcoal-800 pt-8">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-charcoal-400">
            Contact
          </h3>
          <ul className="mt-4 grid gap-3 text-sm text-charcoal-300 sm:grid-cols-3">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-amber-400" aria-hidden="true" />
              <a
                href="mailto:hello@congregate.church"
                className="transition-colors hover:text-white"
              >
                hello@congregate.church
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-amber-400" aria-hidden="true" />
              <a href="tel:+15552345678" className="transition-colors hover:text-white">
                (555) 234-5678
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-amber-400" aria-hidden="true" />
              <span>1200 Grace Avenue, Austin, TX 78701</span>
            </li>
          </ul>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-charcoal-800 py-6 text-sm text-charcoal-400 sm:flex-row">
          <p>© 2026 Congregate. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#home" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#home" className="transition-colors hover:text-white">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, links }: { title: string; links: readonly string[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-widest text-charcoal-400">{title}</h3>
      <ul className="mt-4 space-y-2">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#home"
              className="text-sm text-charcoal-300 transition-colors hover:text-white"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
