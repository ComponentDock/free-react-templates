import { useEffect, useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { Menu, X, Moon, Sun } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Download', href: '#download' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleDark = () => {
    setDark((prev) => {
      const next = !prev
      document.documentElement.classList.toggle('dark', next)
      return next
    })
  }

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
        scrolled ? 'bg-brand-dark/95 shadow-lg backdrop-blur-sm' : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <a href="#home" className="text-2xl font-bold text-white">
          Sonority
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <button
            onClick={toggleDark}
            aria-label="Toggle dark mode"
            className="text-white/70 transition-colors hover:text-white"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href="#download"
            className="rounded-full border border-brand-blue px-6 py-2 text-sm font-semibold uppercase text-white transition-all hover:bg-brand-blue"
          >
            Sign In
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          className="text-white lg:hidden"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-white/10 bg-brand-dark px-4 pb-6 pt-4 lg:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-4 flex items-center gap-4">
            <button
              onClick={toggleDark}
              aria-label="Toggle dark mode"
              className="text-white/70 transition-colors hover:text-white"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a
              href="#download"
              onClick={() => setMobileOpen(false)}
              className="rounded-full border border-brand-blue px-6 py-2 text-sm font-semibold uppercase text-white transition-all hover:bg-brand-blue"
            >
              Sign In
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
