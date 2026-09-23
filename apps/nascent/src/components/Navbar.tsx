import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [blogOpen, setBlogOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      data-testid="navbar"
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-colors duration-300',
        scrolled ? 'bg-white shadow-sm' : 'bg-transparent',
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold font-heading text-orange-400">
          Nascent
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          <li>
            <a href="#home" className="text-sm font-medium text-gray-900 hover:text-orange-400">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-sm font-medium text-gray-900 hover:text-orange-400">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="text-sm font-medium text-gray-900 hover:text-orange-400">
              Services
            </a>
          </li>
          <li className="relative">
            <button
              onClick={() => setBlogOpen(!blogOpen)}
              className="flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-orange-400"
              aria-expanded={blogOpen}
            >
              Blog <ChevronDown size={14} />
            </button>
            {blogOpen && (
              <ul className="absolute top-full left-0 mt-2 w-40 rounded bg-white py-2 shadow-lg">
                <li>
                  <a
                    href="#blog"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50"
                  >
                    Latest Posts
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="#contact" className="text-sm font-medium text-gray-900 hover:text-orange-400">
              Contact
            </a>
          </li>
        </ul>

        {/* CTA button */}
        <a
          href="#contact"
          className="hidden rounded bg-gradient-to-r from-orange-400 to-orange-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 md:inline-block"
        >
          Join Us
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t bg-white px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            <li>
              <a href="#home" className="text-sm font-medium">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-sm font-medium">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="text-sm font-medium">
                Services
              </a>
            </li>
            <li>
              <a href="#blog" className="text-sm font-medium">
                Blog
              </a>
            </li>
            <li>
              <a href="#contact" className="text-sm font-medium">
                Contact
              </a>
            </li>
          </ul>
          <a
            href="#contact"
            className="mt-4 inline-block rounded bg-orange-400 px-6 py-2.5 text-sm font-semibold text-white"
          >
            Join Us
          </a>
        </div>
      )}
    </header>
  )
}
