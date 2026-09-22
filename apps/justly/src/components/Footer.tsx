import { TwitterIcon, FacebookIcon, InstagramIcon } from './social-icons'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Courses', href: '#courses' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { label: 'Twitter', href: '#', Icon: TwitterIcon },
  { label: 'Facebook', href: '#', Icon: FacebookIcon },
  { label: 'Instagram', href: '#', Icon: InstagramIcon },
]

export function Footer() {
  return (
    <footer className="bg-surface py-16" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <a href="#home" className="font-heading text-3xl font-bold text-white tracking-wider">
          Justly
        </a>
        <nav className="mt-8 flex flex-wrap justify-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-text-muted text-sm hover:text-white transition-colors uppercase tracking-widest font-body"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="mt-8 flex justify-center gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 text-text-muted hover:border-brand hover:text-brand transition-colors"
            >
              <s.Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
        <p className="mt-8 text-text-muted text-xs">
          More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand hover:underline"
          >
            Component Dock
          </a>
        </p>
        <p className="mt-2 text-text-muted text-xs">
          &copy; {new Date().getFullYear()} Justly. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
