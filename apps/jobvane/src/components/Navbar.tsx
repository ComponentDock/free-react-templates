import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['Home', 'About', 'Candidates', 'Blog', 'Contact']

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 z-50 w-full transition-all duration-300',
        scrolled ? 'bg-white shadow-md' : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <a
          href="#"
          className="text-2xl font-extrabold text-white transition-colors dark:text-white"
        >
          Job<span className="text-primary-400">Vane</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={cn(
                'text-sm font-semibold transition-colors hover:text-primary-400',
                scrolled ? 'text-ink' : 'text-white',
              )}
            >
              {link}
            </a>
          ))}
          <a
            href="#"
            className="rounded bg-primary-400 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-primary-500"
          >
            Post a Job
          </a>
          <a
            href="#"
            className="rounded bg-accent-400 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-accent-500"
          >
            Want a Job
          </a>
        </div>

        <button
          className="text-2xl text-white md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {mobileOpen && (
        <div className="bg-white px-4 pb-4 md:hidden">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block py-2 text-sm font-semibold text-ink hover:text-primary-400"
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </a>
          ))}
          <div className="mt-2 flex gap-2">
            <a href="#" className="rounded bg-primary-400 px-4 py-2 text-sm font-bold text-white">
              Post a Job
            </a>
            <a href="#" className="rounded bg-accent-400 px-4 py-2 text-sm font-bold text-white">
              Want a Job
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
