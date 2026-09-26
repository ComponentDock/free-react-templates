import { FacebookIcon, TwitterIcon, InstagramIcon, YoutubeIcon } from './social-icons'

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Photography', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  { icon: FacebookIcon, href: '#', label: 'Facebook' },
  { icon: TwitterIcon, href: '#', label: 'Twitter' },
  { icon: InstagramIcon, href: '#', label: 'Instagram' },
  { icon: YoutubeIcon, href: '#', label: 'Youtube' },
]

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 py-12 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 flex flex-wrap justify-center gap-6">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-gray-400 no-underline transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="mb-8 flex justify-center gap-6">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="text-gray-400 transition hover:text-white"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Photonic. All rights reserved.
          </p>
          <p className="mt-2 text-sm text-gray-500">
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-brand-400 underline hover:text-brand-300"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
