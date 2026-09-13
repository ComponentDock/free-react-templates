import { ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { FacebookIcon, TwitterIcon, DribbbleIcon, LinkedinIcon } from './social-icons'

const footerLinks = [
  {
    title: 'Top Products',
    links: ['Managed Website', 'Manage Reputation', 'Power Tools', 'Marketing Service'],
  },
  {
    title: 'Quick Links',
    links: ['Jobs', 'Brand Assets', 'Investor Relations', 'Terms of Service'],
  },
  {
    title: 'Features',
    links: ['Jobs', 'Brand Assets', 'Investor Relations', 'Terms of Service'],
  },
  {
    title: 'Resources',
    links: ['Guides', 'Research', 'Experts', 'Agencies'],
  },
]

const socialLinks = [
  { Icon: FacebookIcon, label: 'Facebook', href: '#' },
  { Icon: TwitterIcon, label: 'Twitter', href: '#' },
  { Icon: DribbbleIcon, label: 'Dribbble', href: '#' },
  { Icon: LinkedinIcon, label: 'LinkedIn', href: '#' },
]

export function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer id="contact" className="bg-navy-800 text-white">
      {/* Top section */}
      <div className="border-b border-white/10 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {/* Link columns */}
            {footerLinks.map((col) => (
              <div key={col.title}>
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white font-[family-name:var(--font-condensed)]">
                  {col.title}
                </h3>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-white/60 transition-colors hover:text-gold-400"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Newsletter */}
            <div>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white font-[family-name:var(--font-condensed)]">
                Newsletter
              </h3>
              <p className="mb-4 text-sm text-white/60">
                You can trust us. We only send promo offers.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setEmail('')
                }}
              >
                <div className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email Address"
                    className="flex-1 bg-white/10 px-4 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-gold-400"
                    aria-label="Email address"
                  />
                  <button
                    type="submit"
                    className="flex items-center justify-center bg-gold-400 px-4 text-navy-800 transition-colors hover:bg-gold-500"
                    aria-label="Subscribe"
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="py-6">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 sm:flex-row">
          <p className="text-sm text-white/60">
            &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
            <span className="text-gold-400">&hearts;</span> at{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-400 transition-colors hover:text-gold-300"
            >
              Component Dock
            </a>
          </p>
          <div className="flex gap-4">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="text-white/40 transition-colors hover:text-gold-400"
              >
                <s.Icon width={18} height={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
