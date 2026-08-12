import { Mail, MapPin, Phone } from 'lucide-react'
import { contact, footerLinks, infoLinks } from '../data'
import { GitHubIcon, LinkedinIcon, XIcon } from './social-icons'

const socials = [
  { label: 'GitHub', href: 'https://github.com', Icon: GitHubIcon },
  { label: 'X', href: 'https://x.com', Icon: XIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com', Icon: LinkedinIcon },
] as const

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative bg-cover bg-center text-white"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/kindred-footer/1920/900)' }}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-brand/80" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-10 pt-20 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#home" className="font-display text-2xl font-bold uppercase tracking-widest">
              Kindred
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/85">
              A charity raising support for clean water, homes and education — one donation at a
              time.
            </p>
            <ul className="mt-6 flex items-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold uppercase tracking-wide">Information</h2>
            <ul className="mt-5 space-y-3 text-sm text-white/85">
              {infoLinks.map((label) => (
                <li key={label}>
                  <a href="#home" className="transition-colors hover:text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold uppercase tracking-wide">Links</h2>
            <ul className="mt-5 space-y-3 text-sm text-white/85">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold uppercase tracking-wide">
              Have a Questions?
            </h2>
            <ul className="mt-5 space-y-4 text-sm text-white/85">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 shrink-0" aria-hidden="true" />
                <span>{contact.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />
                <a
                  href={'tel:' + contact.phone.replace(/[^\d+]/g, '')}
                  className="transition-colors hover:text-white"
                >
                  {contact.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 shrink-0" aria-hidden="true" />
                <a href={'mailto:' + contact.email} className="transition-colors hover:text-white">
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/20 pt-6 text-center text-xs text-white/70">
          <p>Copyright ©2026 All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}
