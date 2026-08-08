import { Mail } from 'lucide-react'
import { BrandIcon, type BrandName } from './BrandIcon'

const quickLinks = ['Home', 'About', 'Services', 'Portfolio', 'Pricing', 'Contact'] as const

const socials: ReadonlyArray<{ name: BrandName; label: string; href: string }> = [
  { name: 'x', label: 'X', href: 'https://x.com/bastion' },
  { name: 'facebook', label: 'Facebook', href: 'https://facebook.com/bastion' },
  { name: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/company/bastion' },
  { name: 'instagram', label: 'Instagram', href: 'https://instagram.com/bastion' },
] as const

export function Footer() {
  return (
    <footer id="contact" className="bg-charcoal">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          <div>
            <a href="#home" className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand font-display text-base font-extrabold text-charcoal">
                B
              </span>
              <span className="font-display text-xl font-bold text-white">Bastion</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-400">
              An architecture studio crafting enduring buildings — from concept to completion.
            </p>
            <div className="mt-5 flex gap-2">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.label}
                  className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-white/10 hover:text-brand"
                >
                  <BrandIcon name={social.name} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-white">Contact Us</h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Have a project in mind? We&apos;d love to hear from you.
            </p>
            <a
              href="mailto:hello@bastion.studio"
              className="mt-4 inline-flex items-center gap-2 font-display text-sm font-semibold text-brand transition-colors hover:text-accent"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              hello@bastion.studio
            </a>
          </div>

          <nav aria-label="Quick links">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-gray-400 transition-colors hover:text-brand"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Bastion. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
