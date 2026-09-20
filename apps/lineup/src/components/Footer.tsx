import { TwitterIcon, InstagramIcon, LinkedinIcon, FacebookIcon } from './SocialIcons'

const navLinks = ['Home', 'About us', 'Events', 'News', 'Contact']

const socialLinks = [
  { icon: TwitterIcon, label: 'Twitter' },
  { icon: InstagramIcon, label: 'Instagram' },
  { icon: LinkedinIcon, label: 'LinkedIn' },
  { icon: FacebookIcon, label: 'Facebook' },
]

export function Footer() {
  return (
    <footer className="bg-[var(--color-footer-bg)] py-12 text-white">
      <div className="container mx-auto px-4 text-center">
        {/* Logo */}
        <a href="#" className="mb-6 inline-block text-2xl font-bold">
          Lineup
        </a>

        {/* Nav */}
        <nav className="mb-8">
          <ul className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <li key={link}>
                <a href="#" className="text-sm text-white/70 transition-colors hover:text-white">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Copyright */}
        <p className="mb-6 text-sm text-white/50">
          &copy; {new Date().getFullYear()} All rights reserved &middot; More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            className="underline transition-colors hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Component Dock
          </a>
        </p>

        {/* Social */}
        <div className="flex justify-center gap-4">
          {socialLinks.map(({ icon: Icon, label }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-white/20 hover:text-white"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
