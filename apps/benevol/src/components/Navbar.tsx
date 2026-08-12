import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { BRAND, NAV_LINKS } from '../data'

const SECTION_IDS = NAV_LINKS.map((link) => link.href.slice(1))

/**
 * Navbar — white sticky bar with the Anton uppercase wordmark, six
 * uppercase anchor links (active section highlighted in the brand orange
 * via a scrollspy), and a 300px right slide-in menu on mobile.
 */
export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState(SECTION_IDS[0]!)

  useEffect(() => {
    const onScroll = () => {
      const threshold = window.scrollY + 120
      let current = SECTION_IDS[0]!
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= threshold) {
          current = id
        }
      }
      setActiveSection(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const wordmark = (
    <a
      href="#home-section"
      onClick={() => setMenuOpen(false)}
      className="font-display text-2xl font-black uppercase tracking-[0.2em] text-primary-600"
    >
      {BRAND}
    </a>
  )

  const links = NAV_LINKS.map((link) => {
    const active = activeSection === link.href.slice(1)
    return (
      <a
        key={link.label}
        href={link.href}
        onClick={() => setMenuOpen(false)}
        aria-current={active ? 'true' : undefined}
        className={cn(
          'border-b-2 border-transparent px-1 py-5 text-[15px] font-bold uppercase text-black transition-colors hover:text-primary-600',
          active && 'text-primary-600',
        )}
      >
        {link.label}
      </a>
    )
  })

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[4px_0_20px_-5px_rgba(0,0,0,0.2)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {wordmark}
        <nav aria-label="Main navigation" className="hidden gap-[15px] lg:flex">
          {links}
        </nav>
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
          className="rounded p-2 text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/40 lg:hidden"
        >
          <Menu className="h-7 w-7" aria-hidden="true" />
        </button>
      </div>

      {/* Mobile slide-in panel */}
      <div
        className={cn(
          'fixed inset-y-0 right-0 z-50 flex w-[300px] flex-col bg-white shadow-2xl transition-transform duration-300 lg:hidden',
          menuOpen ? 'translate-x-0' : 'translate-x-full',
        )}
        aria-hidden={!menuOpen}
      >
        <div className="flex items-center justify-between px-6 py-4">
          {wordmark}
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation menu"
            className="rounded p-2 text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/40"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <nav aria-label="Mobile navigation" className="flex flex-col px-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-gray-200 py-4 text-[15px] font-bold uppercase text-black transition-colors hover:text-primary-600"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
