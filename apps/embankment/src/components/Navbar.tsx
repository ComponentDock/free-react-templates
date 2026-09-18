import { useState, useEffect } from 'react'
import { Search, ChevronDown } from 'lucide-react'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 70)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home', href: '#', active: true },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    {
      label: 'Pages',
      href: '#',
      children: [
        { label: 'Projects', href: '#projects' },
        { label: 'Elements', href: '#features' },
      ],
    },
    {
      label: 'Blog',
      href: '#',
      children: [
        { label: 'Blog', href: '#' },
        { label: 'Blog Details', href: '#' },
      ],
    },
    { label: 'Contact', href: '#footer' },
  ]

  return (
    <nav
      className={`sticky top-0 z-50 bg-white transition-shadow ${isScrolled ? 'shadow-md' : ''}`}
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-[1170px] items-center justify-between px-4 py-4">
        <a href="#" className="text-2xl font-bold text-dark" aria-label="Embankment logo">
          <span className="text-accent">⬡</span> Embankment
        </a>
        <button
          className="text-dark lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
        >
          <span className="block h-0.5 w-6 bg-dark mb-1" />
          <span className="block h-0.5 w-6 bg-dark mb-1" />
          <span className="block h-0.5 w-6 bg-dark" />
        </button>
        <ul
          className={`${
            mobileOpen ? 'block' : 'hidden'
          } absolute left-0 top-full w-full bg-white shadow-md lg:relative lg:flex lg:w-auto lg:shadow-none`}
        >
          {navLinks.map((link) => (
            <li key={link.label} className="group relative">
              <a
                href={link.href}
                className={`block px-5 py-3 font-oswald text-sm font-medium transition-colors ${
                  link.active ? 'text-accent' : 'text-dark hover:text-accent'
                }`}
              >
                {link.label}
                {link.children && <ChevronDown className="ml-1 inline h-3 w-3" />}
              </a>
              {link.children && (
                <ul className="hidden group-hover:block absolute left-0 top-full min-w-[180px] bg-white shadow-md">
                  {link.children.map((child) => (
                    <li key={child.label}>
                      <a
                        href={child.href}
                        className="block px-5 py-3 font-oswald text-sm font-medium text-dark transition-colors hover:text-accent"
                      >
                        {child.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li className="px-5 py-3">
            <button aria-label="Search" className="text-dark hover:text-accent">
              <Search size={16} />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
