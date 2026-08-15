import { brandBlurb, footerContact, quickLinks, resourceLinks } from '../data'

interface SocialLink {
  label: string
  href: string
}

const socialLinks: SocialLink[] = [
  { label: 'Twitter', href: 'https://twitter.com' },
  { label: 'Pinterest', href: 'https://pinterest.com' },
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'YouTube', href: 'https://youtube.com' },
]

function BrandIcon({ label }: { label: string }) {
  const common = 'h-4 w-4 fill-current'
  switch (label) {
    case 'Twitter':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={common}>
          <path d="M23.953 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.59z" />
        </svg>
      )
    case 'Pinterest':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={common}>
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
        </svg>
      )
    case 'Instagram':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={common}>
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
        </svg>
      )
    case 'YouTube':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={common}>
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      )
  }
}

export function Footer() {
  return (
    <footer className="bg-white pt-20">
      <div className="mx-auto grid max-w-[1250px] gap-10 px-4 pb-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h4 className="mb-6 text-lg font-semibold text-ink">Contact Us</h4>
          <p className="mb-2 text-2xl font-semibold text-brand">{footerContact.phone}</p>
          <p className="mb-4 text-body">
            {footerContact.address}
            <br />
            {footerContact.email}
          </p>
          <p className="text-body">
            {footerContact.hours[0]}
            <br />
            {footerContact.hours[1]}
          </p>
        </div>

        <div>
          <h4 className="mb-6 text-lg font-semibold text-ink">Quick Link</h4>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-body transition-colors hover:text-brand">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-6 text-lg font-semibold text-ink">Resources</h4>
          <ul className="space-y-3">
            {resourceLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-body transition-colors hover:text-brand">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-6 text-2xl font-semibold tracking-tight text-ink">
            Amplify<span className="text-brand">.</span>
          </p>
          <p className="mb-6 text-body">{brandBlurb}</p>
          <ul className="flex gap-3">
            {socialLinks.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-tint text-ink transition-colors hover:bg-brand hover:text-white"
                >
                  <BrandIcon label={social.label} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-tint/60 py-6">
        <p className="mx-auto max-w-[1250px] px-4 text-center text-sm text-muted">
          © 2026 Amplify — All rights reserved | This template is made with{' '}
          <span aria-hidden="true">❤</span> by{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-brand hover:underline"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
