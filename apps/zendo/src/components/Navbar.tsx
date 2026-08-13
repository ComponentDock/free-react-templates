import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { brand, navLinks } from '../data'

/** Transparent navbar (white + shadow once scrolled) with the serif brand
 *  and a dot-separated uppercase link row BELOW it, per the reference.
 *  Below ~992px it collapses to a hamburger + slide-in panel. */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      data-testid="navbar"
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors',
        scrolled ? 'bg-white shadow-md' : 'bg-transparent',
      )}
    >
      <div className="mx-auto max-w-[1240px] px-4">
        <div className="flex items-center justify-center py-4 lg:justify-start">
          <a href="#home-section" className="font-display text-3xl font-semibold text-ink">
            {brand.name}
          </a>
        </div>

        <nav aria-label="Primary" className="hidden items-center justify-center gap-3 pb-4 lg:flex">
          {navLinks.map((item, index) => (
            <span key={item.label} className="flex items-center gap-3">
              {index > 0 && (
                <span aria-hidden="true" className="text-xs text-ink/40">
                  ·
                </span>
              )}
              <a
                href={item.href}
                className={cn(
                  'text-xs font-semibold uppercase tracking-[0.15em] transition-colors',
                  index === 0 ? 'text-brand' : 'text-ink/70 hover:text-brand',
                )}
              >
                {item.label}
              </a>
            </span>
          ))}
        </nav>
      </div>

      <button
        type="button"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="absolute right-4 top-4 z-50 rounded p-2 text-ink transition-colors hover:bg-light lg:hidden"
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {open && (
        <div className="absolute inset-x-0 top-0 z-40 border-b border-line bg-white px-4 pb-6 pt-16 shadow-lg lg:hidden">
          <nav aria-label="Mobile" className="flex flex-col items-center gap-4">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold uppercase tracking-[0.15em] text-ink/80 transition-colors hover:text-brand"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
