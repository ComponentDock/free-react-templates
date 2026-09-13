const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

const socialLinks = [
  { icon: FacebookIcon, label: 'Facebook', href: '#' },
  { icon: InstagramIcon, label: 'Instagram', href: '#' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: '#' },
] as const

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <a href="#home" className="font-heading text-2xl font-bold text-dark-purple">
            Plumero
          </a>
          <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-secondary-text transition-colors hover:text-dark-purple"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="text-secondary-text transition-colors hover:text-dark-purple"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-border bg-light-purple">
        <div className="mx-auto max-w-7xl px-4 py-4 text-center text-sm text-secondary-text sm:px-6">
          Copyright &copy; 2026 All rights reserved | Made with{' '}
          <span className="text-red-500">&hearts;</span> by{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-dark-purple underline hover:text-brand"
          >
            Component Dock
          </a>
        </div>
      </div>
    </footer>
  )
}
