import { Globe, MessageCircle, Heart, Share2, MapPin, Phone, Mail } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

const serviceLinks = [
  'Web Design',
  'Web Development',
  'Branding',
  'Graphic Design',
  'SEO',
  'Icon Design',
]

const socials = [
  { icon: Globe, href: '#', label: 'Facebook' },
  { icon: MessageCircle, href: '#', label: 'Twitter' },
  { icon: Heart, href: '#', label: 'Instagram' },
  { icon: Share2, href: '#', label: 'LinkedIn' },
]

export function Footer() {
  return (
    <footer className="bg-dark-bg text-gray-300">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Let&apos;s Talk About</h3>
            <p className="mb-4 text-sm text-gray-400">
              I am always interested in hearing about new projects and opportunities. Feel free to
              reach out!
            </p>
            <a
              href="#contact"
              className="inline-flex items-center rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Contact me
            </a>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Links</h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Have a Question?</h3>
            <div className="mb-4 space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <MapPin className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span>123 Main St, New York, NY</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Phone className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span>hello@palette.dev</span>
              </div>
            </div>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-700 text-gray-300 transition-colors hover:bg-primary hover:text-white"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} Palette. Made with{' '}
          <span className="text-red-500" aria-label="love">
            &#10084;
          </span>{' '}
          by{' '}
          <a
            href="https://www.componentdock.com/"
            className="text-primary transition-colors hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
