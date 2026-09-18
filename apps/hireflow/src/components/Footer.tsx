import { Send } from 'lucide-react'
import { type FormEvent } from 'react'

const topProducts = ['Managed Website', 'Manage Reputation', 'Power Tools', 'Marketing Service']

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

function DribbbleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="10" />
      <path
        d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"
        stroke="white"
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"
        stroke="white"
        strokeWidth="1"
        fill="none"
      />
      <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" stroke="white" strokeWidth="1" fill="none" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

const socialIcons = [
  { Icon: FacebookIcon, label: 'Facebook' },
  { Icon: TwitterIcon, label: 'Twitter' },
  { Icon: DribbbleIcon, label: 'Dribbble' },
  { Icon: InstagramIcon, label: 'Instagram' },
]

function handleSubscribe(e: FormEvent) {
  e.preventDefault()
}

export function Footer() {
  return (
    <footer className="bg-footer-bg py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h6 className="mb-4 text-sm font-semibold uppercase tracking-wider">Top Products</h6>
            <ul className="space-y-2">
              {topProducts.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-400 transition-colors hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h6 className="mb-4 text-sm font-semibold uppercase tracking-wider">Newsletter</h6>
            <p className="mb-4 text-sm text-gray-400">
              Stay updated with the latest job opportunities and career tips.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                placeholder="Enter Email"
                className="flex-1 rounded bg-white/10 px-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="flex items-center gap-1 rounded bg-brand px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand/90"
                aria-label="Subscribe"
              >
                Subscribe <Send size={14} />
              </button>
            </form>
          </div>
          <div>
            <h6 className="mb-4 text-sm font-semibold uppercase tracking-wider">Follow Us</h6>
            <div className="flex gap-3">
              {socialIcons.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-gray-400 transition-colors hover:bg-brand hover:text-white"
                >
                  <social.Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
            <span className="text-accent">&#10084;</span> at{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-accent underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Component Dock
            </a>
          </p>
          <div className="flex gap-3">
            {socialIcons.map((social) => (
              <a
                key={social.label}
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
                aria-label={`Social link ${social.label}`}
              >
                <social.Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
