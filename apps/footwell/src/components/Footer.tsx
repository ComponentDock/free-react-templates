const footerLinks = {
  customers: [
    { label: 'Buyer', href: '#' },
    { label: 'Supplier', href: '#' },
  ],
  company: [
    { label: 'About us', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Contact us', href: '#' },
  ],
  information: [
    { label: 'Terms & Conditions', href: '#' },
    { label: 'Privacy Policy', href: '#' },
  ],
} as const

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function SendIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}

const socials = [
  { name: 'Facebook', href: '#', icon: FacebookIcon },
  { name: 'Twitter', href: '#', icon: TwitterIcon },
  { name: 'LinkedIn', href: '#', icon: LinkedInIcon },
  { name: 'Send', href: '#', icon: SendIcon },
] as const

export function Footer() {
  return (
    <footer className="bg-footer-bg text-footer-text" role="contentinfo">
      {/* CTA Banner */}
      <div className="relative -top-[80px] z-10 mx-auto max-w-6xl">
        <div
          className="flex flex-col items-start justify-between gap-4 px-5 py-5 sm:flex-row sm:items-center md:px-10"
          style={{
            backgroundColor: 'var(--color-cta-accent)',
            boxShadow: '-20px -20px 0 0 var(--color-cta-shadow)',
          }}
        >
          <div>
            <h2 className="mb-0 text-xl font-medium leading-relaxed text-white">
              Ready for a next project?
            </h2>
            <h3 className="text-lg font-normal leading-relaxed text-gray-900">
              Let&apos;s get started!
            </h3>
          </div>
          <div>
            <a
              href="#"
              className="inline-block rounded-none bg-gray-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="mx-auto max-w-6xl px-4 pb-12 sm:px-6">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-5">
          {/* Logo Column */}
          <div>
            <a
              href="#"
              className="mb-2 inline-block text-sm font-medium uppercase tracking-widest text-footer-text"
            >
              Footwell
            </a>
            <p className="text-sm text-footer-muted">
              <small>&copy; {new Date().getFullYear()}</small>
            </p>
          </div>

          {/* Customers */}
          <div>
            <h3 className="mb-2 text-sm font-medium leading-relaxed">Customers</h3>
            <ul className="list-none space-y-2">
              {footerLinks.customers.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-footer-muted transition-colors hover:text-footer-text"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-2 text-sm font-medium leading-relaxed">Company</h3>
            <ul className="list-none space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-footer-muted transition-colors hover:text-footer-text"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Further Information */}
          <div>
            <h3 className="mb-2 text-sm font-medium leading-relaxed">Further Information</h3>
            <ul className="list-none space-y-2">
              {footerLinks.information.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-footer-muted transition-colors hover:text-footer-text"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-2 text-sm font-medium leading-relaxed">Follow us</h3>
            <ul className="flex list-none gap-2">
              {socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.name}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cta-accent text-white transition-colors hover:opacity-80"
                  >
                    <social.icon />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Component Dock Attribution */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-footer-muted">
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noreferrer"
              className="text-footer-muted underline transition-colors hover:text-footer-text"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
