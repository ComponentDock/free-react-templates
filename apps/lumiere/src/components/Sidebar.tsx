import { Mail, Menu, X } from 'lucide-react'
import { useState } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* Mobile toggle */}
      <button
        type="button"
        className="fixed left-4 top-4 z-50 rounded bg-dark p-2 text-white lg:hidden"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
      >
        {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Sidebar panel */}
      <aside
        className={`fixed left-0 top-0 z-40 flex h-screen w-72 flex-col bg-dark px-8 py-10 text-white transition-transform duration-300 max-lg:shadow-lg ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full max-lg:translate-x-0 max-lg:hidden'
        } lg:translate-x-0`}
        role="complementary"
      >
        {/* Brand logo */}
        <h1 className="mb-8 font-display text-3xl font-normal tracking-wide">
          <a href="#home">Lumiere</a>
        </h1>

        {/* Navigation */}
        <nav role="navigation" className="flex-1">
          <ul className="space-y-4">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`block text-sm font-light uppercase tracking-widest transition-colors hover:text-brand-400 ${
                    i === 0 ? 'text-white' : 'text-gray-400'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Newsletter */}
        <div className="mt-auto">
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-300">
            Subscribe for newsletter
          </h3>
          <form onSubmit={(e) => e.preventDefault()} className="flex items-center">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <input
                type="email"
                placeholder="Enter Email Address"
                aria-label="Email address for newsletter"
                className="w-full rounded-l bg-white px-3 py-2 pl-9 text-sm text-body placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-400"
              />
            </div>
            <button
              type="submit"
              aria-label="Subscribe"
              className="rounded-r bg-brand-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-600"
            >
              <Mail className="h-4 w-4" />
            </button>
          </form>
        </div>

        {/* Copyright */}
        <p className="mt-6 text-xs text-gray-500">
          Made with{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline transition-colors hover:text-brand-400"
          >
            Component Dock
          </a>
        </p>
      </aside>
    </>
  )
}
