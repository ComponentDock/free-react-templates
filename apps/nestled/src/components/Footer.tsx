import { Mail, Phone, MapPin } from 'lucide-react'

const pageLinks = ['Services', 'Terms', 'Privacy', 'Buy', 'Sell']
const resourceLinks = ['Blog', 'About', 'Contact']

function DribbbleIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
      <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
      <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
    </svg>
  )
}

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function TwitterIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

const socialLinks = [
  { icon: DribbbleIcon, label: 'Dribbble', href: '#' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: '#' },
  { icon: TwitterIcon, label: 'Twitter', href: '#' },
  { icon: InstagramIcon, label: 'Instagram', href: '#' },
  { icon: FacebookIcon, label: 'Facebook', href: '#' },
]

export function Footer() {
  return (
    <footer>
      <div className="bg-heading text-white pt-16 pb-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">About Nestled</h3>
              <p className="text-sm text-white/60 mb-4">
                Far far away, behind the word mountains, far from the countries Vokalia and
                Consonantia, there live the blind texts.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand transition-colors"
                  >
                    <s.icon size={16} />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Pages</h3>
              <ul className="space-y-2 text-sm text-white/60">
                {pageLinks.map((l) => (
                  <li key={l}>
                    <a href="#" className="hover:text-white transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-white/60">
                {resourceLinks.map((l) => (
                  <li key={l}>
                    <a href="#" className="hover:text-white transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <ul className="space-y-3 text-sm text-white/60">
                <li className="flex items-center gap-2">
                  <Mail size={16} className="text-brand flex-shrink-0" aria-hidden="true" />
                  <a href="mailto:info@nestled.com" className="hover:text-white transition-colors">
                    info@nestled.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={16} className="text-brand flex-shrink-0" aria-hidden="true" />
                  <a href="tel:+12222123819" className="hover:text-white transition-colors">
                    +1 222 212 3819
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin
                    size={16}
                    className="text-brand mt-0.5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span>43 Raymouth Rd. Baltemoer, London 3910</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-footer-dark text-white/50">
        <div className="mx-auto max-w-7xl px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
            <span className="text-red-500" aria-hidden="true">
              ♥
            </span>{' '}
            at{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors underline"
            >
              Component Dock
            </a>
          </p>
          <div className="flex gap-4 text-sm">
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
