import { MapPin, Phone, Mail } from 'lucide-react'

const NAV_LINKS = ['Home', 'Why Orbiter', 'Our Services', 'Gallery', 'About'] as const
const SERVICE_LINKS = [
  'Web Design',
  'Web Development',
  'Branding',
  'Graphic Design',
  'SEO',
] as const

/* Inline SVG brand icons (lucide-react removed brand icons) */
const InstagramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-[18px] w-[18px]"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)
const TwitterIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-[18px] w-[18px]"
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
)
const FacebookIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-[18px] w-[18px]"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)
const LinkedinIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-[18px] w-[18px]"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)
const PinterestIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-[18px] w-[18px]"
  >
    <line x1="12" x2="12" y1="17" y2="22" />
    <path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z" />
  </svg>
)
const DribbbleIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-[18px] w-[18px]"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
    <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
    <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
  </svg>
)

const SOCIAL_LINKS = [
  { icon: InstagramIcon, label: 'Instagram' },
  { icon: TwitterIcon, label: 'Twitter' },
  { icon: FacebookIcon, label: 'Facebook' },
  { icon: LinkedinIcon, label: 'LinkedIn' },
  { icon: PinterestIcon, label: 'Pinterest' },
  { icon: DribbbleIcon, label: 'Dribbble' },
] as const

export function Footer() {
  return (
    <footer className="bg-footer-bg pt-16 pb-8 text-sm">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="mb-6 text-base font-bold text-footer-heading">About Orbiter.</h3>
            <p className="mb-6 text-footer-text">
              We are a creative agency delivering innovative digital solutions to businesses
              worldwide.
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="text-footer-text transition-colors hover:text-brand-primary"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-6 text-base font-bold text-footer-heading">Navigation</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-footer-link transition-colors hover:text-brand-primary"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-base font-bold text-footer-heading">Services</h3>
            <ul className="space-y-3">
              {SERVICE_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-footer-link transition-colors hover:text-brand-primary"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-base font-bold text-footer-heading">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-footer-text">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>123 Business Ave, Suite 100, New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3 text-footer-text">
                <Phone size={16} className="shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-footer-text">
                <Mail size={16} className="shrink-0" />
                <span>info@orbiter.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-gray-300 pt-8 text-center">
          <p className="text-footer-text">
            &copy; {new Date().getFullYear()} All rights reserved | More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-semibold text-brand-primary transition-colors hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
