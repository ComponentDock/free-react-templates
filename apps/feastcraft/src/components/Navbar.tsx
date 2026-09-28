import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  {
    label: 'Menu',
    href: '#menu',
    children: [
      { label: 'Elements', href: '#menu-elem' },
      { label: 'Menu Two', href: '#menu-two' },
      { label: 'Menu Three', href: '#menu-three' },
    ],
  },
  { label: 'Events', href: '#events' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-heading/95' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a
          href="#home"
          className="text-xl font-bold text-white"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          Feastcraft<span className="text-orange">.</span>
        </a>

        <div className="flex items-center gap-6">
          {/* Desktop nav - only rendered on md+ (hidden via CSS, but we use conditional render for jsdom) */}
          <ul className="hidden items-center gap-6 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.label} className="relative group">
                <a
                  href={link.href}
                  className="flex items-center gap-1 text-sm text-white/80 hover:text-white"
                >
                  {link.label}
                  {link.children && <ChevronDown size={14} />}
                </a>
                {link.children && (
                  <ul className="absolute left-0 top-full hidden min-w-[160px] bg-heading/95 py-2 group-hover:block">
                    {link.children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={child.href}
                          className="block px-4 py-2 text-sm text-white/80 hover:text-white"
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="hidden rounded-full border border-white px-6 py-2 text-sm text-white transition-colors hover:bg-white hover:text-heading md:inline-block"
          >
            Book a table
          </a>
          <button
            className="text-white md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="bg-heading/95 px-6 pb-6 md:hidden">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-sm text-white/80 hover:text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
                {link.children && (
                  <ul className="ml-4 mt-2 flex flex-col gap-2">
                    {link.children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={child.href}
                          className="block text-sm text-white/60 hover:text-white"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="mt-4 inline-block rounded-full border border-white px-6 py-2 text-sm text-white hover:bg-white hover:text-heading"
            onClick={() => setMobileOpen(false)}
          >
            Book a table
          </a>
        </div>
      )}
    </nav>
  )
}
