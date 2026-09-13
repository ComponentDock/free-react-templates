function FacebookIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function DribbbleIcon({ size = 14 }: { size?: number }) {
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
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
      <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
      <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
    </svg>
  )
}

function FlickrIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <circle cx="7" cy="12" r="4" />
      <circle cx="17" cy="12" r="4" />
    </svg>
  )
}

function InstagramIcon({ size = 14 }: { size?: number }) {
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
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function LinkedinIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function PinterestIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0a12 12 0 0 0-4.37 23.17c-.1-.94-.2-2.4.04-3.44l1.4-5.93s-.36-.72-.36-1.78c0-1.67.97-2.92 2.17-2.92 1.02 0 1.52.77 1.52 1.69 0 1.03-.65 2.56-.99 3.99-.28 1.19.6 2.16 1.77 2.16 2.13 0 3.76-2.24 3.76-5.48 0-2.87-2.06-4.87-5-4.87-3.41 0-5.41 2.56-5.41 5.2 0 1.03.4 2.13.89 2.73a.36.36 0 0 1 .08.34l-.33 1.36c-.05.22-.18.27-.41.16-1.52-.71-2.47-2.93-2.47-4.72 0-3.84 2.79-7.37 8.03-7.37 4.22 0 7.5 3.01 7.5 7.02 0 4.19-2.64 7.57-6.31 7.57-1.23 0-2.39-.64-2.79-1.4l-.76 2.89c-.27 1.06-1.01 2.4-1.51 3.21A12 12 0 1 0 12 0z" />
    </svg>
  )
}

const footerNav = ['Home', 'About us', 'Services', 'Portfolio', 'Contact']

const socialLinks = [
  { icon: FacebookIcon, href: '#', label: 'Facebook' },
  { icon: DribbbleIcon, href: '#', label: 'Dribbble' },
  { icon: FlickrIcon, href: '#', label: 'Flickr' },
  { icon: InstagramIcon, href: '#', label: 'Instagram' },
  { icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
  { icon: PinterestIcon, href: '#', label: 'Pinterest' },
]

export function Footer() {
  return (
    <footer className="bg-brand-blue px-4 py-16 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Logo */}
          <div>
            <a href="#home" className="text-3xl font-bold text-white">
              flux
            </a>
          </div>

          {/* Address */}
          <div>
            <h5 className="mb-4 text-xl font-medium">Address</h5>
            <p className="text-sm leading-relaxed text-white/90">
              1234 Agency Boulevard
              <br />
              Creative District, CA 90210
            </p>
          </div>

          {/* Support + Social */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h5 className="mb-4 text-xl font-medium">Support</h5>
              <p className="text-sm text-white/90">+1 555 123 4567</p>
            </div>
            <div>
              <h5 className="mb-4 text-xl font-medium">Social</h5>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white text-white transition-colors hover:border-brand-orange hover:text-brand-orange"
                  >
                    <s.icon size={14} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t-2 border-white pt-6 text-sm md:flex-row">
          <p className="text-white/90">
            &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline transition-colors hover:text-brand-orange"
            >
              Component Dock
            </a>
          </p>
          <ul className="flex gap-4">
            {footerNav.map((item) => (
              <li key={item}>
                <a href="#" className="text-white/90 transition-colors hover:text-brand-orange">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
