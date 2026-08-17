import { useEffect, useState } from 'react'
import { ButtonLink } from '@free-react-templates/ui'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { BRAND, NAV_LINKS } from '../data'

/* Fixed header, transparent over the hero and near-black (#0a0a0a) once the
   page scrolls. Centered inline links with a yellow CTA on the right and a
   solid slide-in drawer for mobile. */
export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled ? 'bg-coal py-3 shadow-lg' : 'bg-transparent py-5',
      )}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <a href="#home" className="font-display text-[26px] font-semibold text-white">
          {BRAND}
          <span className="text-brand">.</span>
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-display text-sm font-medium uppercase tracking-wide text-white transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink
            href="#schedule"
            className="rounded-none bg-brand px-7 py-3 font-display text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-ember"
          >
            Buy Your Seat
          </ButtonLink>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="rounded p-2 text-white lg:hidden"
          onClick={() => setOpen(true)}
        >
          <Menu className="size-7" />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          'fixed inset-y-0 right-0 z-50 flex w-72 flex-col bg-coal p-6 shadow-xl transition-transform duration-300 lg:hidden',
          open ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className="mb-8 flex items-center justify-between">
          <span className="font-display text-xl font-semibold text-white">
            {BRAND}
            <span className="text-brand">.</span>
          </span>
          <button
            type="button"
            aria-label="Close menu"
            className="rounded p-1.5 text-white"
            onClick={() => setOpen(false)}
          >
            <X className="size-6" />
          </button>
        </div>
        <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded px-2 py-2.5 font-display text-base font-medium uppercase tracking-wide text-white transition-colors hover:bg-card hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="mt-auto">
          <ButtonLink
            href="#schedule"
            onClick={() => setOpen(false)}
            className="w-full rounded-none bg-brand px-7 py-3 font-display text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-ember"
          >
            Buy Your Seat
          </ButtonLink>
        </div>
      </div>
    </header>
  )
}
