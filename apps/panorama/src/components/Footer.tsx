import { ArrowUp } from 'lucide-react'
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from './social-icons'

const footerLinks = [
  {
    heading: 'Products',
    links: ['Web Design', 'Graphic Design', 'Web Developers', 'Resources'],
  },
  {
    heading: 'Company',
    links: ['About Us', 'Career', 'Blog', 'Resources'],
  },
  {
    heading: 'Support',
    links: ['Support', 'Privacy', 'Terms of Service'],
  },
]

const socials = [
  { label: 'Facebook', href: 'https://facebook.com', Icon: FacebookIcon },
  { label: 'Twitter', href: 'https://twitter.com', Icon: TwitterIcon },
  { label: 'Instagram', href: 'https://instagram.com', Icon: InstagramIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com', Icon: LinkedinIcon },
]

export function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white">
      {/* Slanted top edge */}
      <div
        className="absolute -top-px left-0 right-0 h-20 bg-white"
        style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
      />

      {/* Scroll to top */}
      <a
        href="#home"
        aria-label="Scroll to top"
        className="absolute left-1/2 top-0 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ocean-400 text-white shadow-lg transition-colors hover:bg-ocean-500"
      >
        <ArrowUp className="h-5 w-5" />
      </a>

      <div className="mx-auto max-w-7xl px-4 pt-24 pb-10 sm:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider">{col.heading}</h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact / Social */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider">Contact Us</h3>
            <ul className="flex items-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-ocean-400"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          <p>
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ocean-400 transition-colors hover:text-ocean-300"
            >
              Component Dock
            </a>
          </p>
          <p className="mt-1">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
