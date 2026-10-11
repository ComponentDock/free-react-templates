import type { SVGProps } from 'react'
import { ButtonLink } from '@free-react-templates/ui'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Wordmark } from './Wordmark'

type IconProps = SVGProps<SVGSVGElement>

function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function XIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function YoutubeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M23 12s0-3.9-.5-5.8a3 3 0 0 0-2.1-2.1C18.5 3.5 12 3.5 12 3.5s-6.5 0-8.4.6A3 3 0 0 0 1.5 6.2C1 8.1 1 12 1 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 8.4.6 8.4.6s6.5 0 8.4-.6a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8zM9.8 15.5v-7l6 3.5z" />
    </svg>
  )
}

function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

const SOCIALS = [
  { label: 'Facebook', href: 'https://www.facebook.com/', Icon: FacebookIcon },
  { label: 'X', href: 'https://x.com/', Icon: XIcon },
  { label: 'YouTube', href: 'https://www.youtube.com/', Icon: YoutubeIcon },
  { label: 'Instagram', href: 'https://www.instagram.com/', Icon: InstagramIcon },
]

const COMPANY_LINKS = ['Our Company', 'About Us', 'Press & Media', 'News / Blogs', 'Careers']

const HOSTING_LINKS = [
  'Web Hosting',
  'Reseller Hosting',
  'VPS Hosting',
  'Dedicated Servers',
  'Cloud Hosting',
]

export function Footer() {
  return (
    <footer id="contact" className="bg-navy text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-navy-900" aria-hidden="true" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-navy-800" aria-hidden="true" />

        <div className="relative mx-auto grid max-w-6xl gap-8 px-4 py-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-xl font-bold uppercase">Need help? Call us</h2>
            <a
              href="tel:+15550142290"
              className="mt-2 inline-block text-lg font-bold text-brand transition-colors hover:text-brand-dark"
            >
              +1 (555) 014-2290
            </a>
          </div>
          <div className="lg:text-right">
            <h2 className="text-xl font-bold uppercase">
              Join now and get your first month of Deluxe hosting free
            </h2>
            <div className="mt-5 flex flex-wrap gap-4 lg:justify-end">
              <ButtonLink
                href="#domains"
                variant="outline"
                className="rounded-full border-white/40 px-7 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-white/10"
              >
                Log in
              </ButtonLink>
              <ButtonLink
                href="#pricing"
                className="rounded-full bg-brand px-7 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-brand-dark"
              >
                Sign Up
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Wordmark />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              Harbor runs fast, secure hosting for small businesses, shops and developers: domains,
              shared and WordPress hosting, cloud VPS and dedicated servers, with people on hand
              around the clock.
            </p>
            <ul className="mt-6 flex items-center gap-4">
              {SOCIALS.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Company">
            <h2 className="text-lg font-bold uppercase">Company</h2>
            <ul className="mt-5 space-y-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href="#home"
                    className="text-sm text-muted transition-colors hover:text-white hover:underline"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Hosting">
            <h2 className="text-lg font-bold uppercase">Hosting</h2>
            <ul className="mt-5 space-y-3">
              {HOSTING_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href="#pricing"
                    className="text-sm text-muted transition-colors hover:text-white hover:underline"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-lg font-bold uppercase">Contact us</h2>
            <ul className="mt-5 space-y-3 text-sm text-muted">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                1450 Alder Street, Suite 210, Brookfield, WA 98000, USA
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                +1 (555) 014-2290 | +1 (555) 014-2291
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <a
                  href="mailto:support@harbor.example"
                  className="transition-colors hover:text-white"
                >
                  support@harbor.example
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-muted sm:flex-row">
          <p>Copyright © 2026 Harbor. All rights reserved.</p>
          <p>
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-medium text-white hover:underline"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
