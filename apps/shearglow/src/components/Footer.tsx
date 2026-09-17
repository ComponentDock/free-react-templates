import { FacebookIcon, TwitterIcon, InstagramIcon } from './social-icons'

const socials = [
  { label: 'Facebook', href: 'https://facebook.com', Icon: FacebookIcon },
  { label: 'Twitter', href: 'https://twitter.com', Icon: TwitterIcon },
  { label: 'Google+', href: '#', Icon: GoogleIcon },
  { label: 'Instagram', href: 'https://instagram.com', Icon: InstagramIcon },
]

function GoogleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Left column — Logo + description */}
          <div>
            <a href="#home" className="font-serif text-xl font-bold">
              Shear<span className="text-gold-400">Glow</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Premium hair salon experience. Expert stylists, quality products, and a welcoming
              atmosphere for every client.
            </p>
            <p className="mt-4 text-xs text-gray-500">
              &copy; {new Date().getFullYear()} ShearGlow. All rights reserved.
            </p>
          </div>

          {/* Middle column — Opening times */}
          <div>
            <h4 className="font-serif text-lg font-bold">Opening Times</h4>
            <div className="mt-4 space-y-2 text-sm text-gray-400">
              <div className="flex justify-between">
                <span>Monday – Friday</span>
                <span>8:00 AM – 8:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>8:00 AM – 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-gold-400"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Right column — Contact */}
          <div>
            <h4 className="font-serif text-lg font-bold">Contact Us</h4>
            <div className="mt-4 space-y-3 text-sm text-gray-400">
              <p>+1 234 567 890</p>
              <p>info@shearglow.com</p>
              <p>123 Salon Avenue, Suite 100, New York, NY 10001</p>
            </div>
          </div>
        </div>

        {/* Component Dock attribution */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-gray-500">
          More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline transition-colors hover:text-gold-400"
          >
            Component Dock
          </a>
        </div>
      </div>
    </footer>
  )
}
