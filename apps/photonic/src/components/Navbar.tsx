import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { FacebookIcon, TwitterIcon, InstagramIcon, YoutubeIcon } from './social-icons'

const navLinks = [
  { label: 'Home', href: '#home' },
  {
    label: 'Photography',
    href: '#services',
    children: [
      { label: 'Nature', href: '#services' },
      { label: 'Portrait', href: '#services' },
      { label: 'Wedding', href: '#services' },
    ],
  },
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

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <header className="border-b border-gray-100 bg-white py-3" role="banner">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
        <a href="#home" className="text-2xl font-bold text-gray-900 no-underline">
          photonic<span className="text-brand-400">.</span>
        </a>

        <nav
          className="hidden items-center gap-8 xl:flex"
          role="navigation"
          aria-label="Main navigation"
        >
          <ul className="flex list-none gap-6">
            {navLinks.map((link) =>
              link.children ? (
                <li
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <a
                    href={link.href}
                    className="text-sm font-medium text-gray-700 no-underline transition hover:text-brand-400"
                  >
                    {link.label}
                  </a>
                  {dropdownOpen && (
                    <ul className="absolute left-0 top-full z-10 mt-1 min-w-[160px] rounded bg-white shadow-lg">
                      {link.children.map((child) => (
                        <li key={child.label}>
                          <a
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-700 no-underline hover:bg-surface-alt"
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-gray-700 no-underline transition hover:text-brand-400"
                  >
                    {link.label}
                  </a>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 xl:flex">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="text-gray-500 transition hover:text-brand-400"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        <button
          className="text-gray-700 xl:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white px-4 py-4 xl:hidden">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm font-medium text-gray-700 no-underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-gray-500 transition hover:text-brand-400"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
