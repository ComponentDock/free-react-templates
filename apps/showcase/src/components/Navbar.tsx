import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { navLinks } from '../data'

const sectionIds = [
  'about-section',
  'resume-section',
  'services-section',
  'projects-section',
  'blog-section',
  'contact-section',
] as const

/* Scroll-spy helper: given each tracked section's distance from the top of
   the viewport, return the id of the last section that has scrolled past
   the offset line (or "home" when none has). Pure and unit-testable. */
export function computeActiveSection(
  rectTops: ReadonlyArray<readonly [string, number]>,
  offset = 120,
): string {
  let active = 'home'
  for (const [id, top] of rectTops) {
    if (top <= offset) {
      active = id
    }
  }
  return active
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const tops = sectionIds.map(
        (id) => [id, document.getElementById(id)?.getBoundingClientRect().top ?? Infinity] as const,
      )
      setActive(computeActiveSection(tops))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'bg-white/95 shadow-md backdrop-blur' : 'bg-transparent',
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:h-20 lg:px-8"
      >
        <a href="#home" className="flex items-center gap-2" aria-label="Showcase home">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-lg font-bold text-white">
            S
          </span>
          <span className="text-xl font-bold text-ink">Showcase</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1)
            return (
              <a
                key={link.label}
                href={link.href}
                className={cn(
                  'group relative px-5 py-2 text-base font-medium transition-colors',
                  isActive ? 'text-brand' : 'text-ink hover:text-brand',
                )}
              >
                {link.label}
                <span
                  className={cn(
                    'absolute inset-x-5 -bottom-0.5 h-0.5 origin-left bg-brand transition-transform duration-300',
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
                  )}
                />
              </a>
            )
          })}
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle mobile menu"
          className="rounded-lg p-2 text-ink transition-colors hover:bg-surface lg:hidden"
        >
          {open ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile collapsed menu (always in the DOM; expands via max-height) */}
      <div
        className={cn(
          'overflow-hidden bg-white transition-[max-height] duration-300 lg:hidden',
          open ? 'max-h-96' : 'max-h-0',
        )}
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setOpen(false)}
            className="block px-6 py-3 text-base font-medium text-value transition-colors hover:bg-surface hover:text-brand"
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  )
}
