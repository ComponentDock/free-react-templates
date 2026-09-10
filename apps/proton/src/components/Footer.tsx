import { Download } from 'lucide-react'
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from './social-icons'

const footerLinks = {
  about: {
    title: 'About',
    items: ['Our Story', 'Team', 'Careers', 'Press'],
  },
  learnMore: {
    title: 'Learn More',
    items: ['Blog', 'Documentation', 'Tutorials', 'FAQ'],
  },
  support: {
    title: 'Support',
    items: ['Help Center', 'Contact Us', 'Privacy Policy', 'Terms of Service'],
  },
  aboutUs: {
    title: 'About Us',
    items: ['Mission', 'Values', 'Partners', 'Community'],
  },
}

const socials = [
  { label: 'Facebook', href: 'https://facebook.com', Icon: FacebookIcon },
  { label: 'Twitter', href: 'https://twitter.com', Icon: TwitterIcon },
  { label: 'Instagram', href: 'https://instagram.com', Icon: InstagramIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com', Icon: LinkedinIcon },
]

export function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-gray-400">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 transition-colors hover:text-proton-500"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-gray-200 pt-8 sm:flex-row">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-none bg-proton-500 px-6 py-3 text-sm font-bold uppercase tracking-widest text-white hover:bg-proton-600"
          >
            <Download className="h-4 w-4" />
            Download
          </a>
          <ul className="flex items-center gap-3">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-gray-600 transition-colors hover:bg-proton-500 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Proton. Made with{' '}
          <a href="https://www.componentdock.com/" className="underline hover:text-proton-500">
            Component Dock
          </a>
        </div>
      </div>
    </footer>
  )
}
