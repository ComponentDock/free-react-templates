import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { ButtonLink, cn } from '@free-react-templates/ui'
import { brand, navLinks } from '../data'

/** Transparent navbar fixed over the hero; turns solid brand-blue on scroll.
 *  Brand "Gatherly.", one anchor per section, a blue "Buy Ticket" CTA and a
 *  mobile hamburger (<992px) that expands the link list. */
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
        scrolled ? 'bg-brand shadow-lg' : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-4 py-4">
        <a href="#home-section" className="text-2xl font-black tracking-tight text-white">
          {brand.name}
          <span className="text-accent">.</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-semibold uppercase tracking-[0.1em] text-white/90 transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <ButtonLink
          href="#pricing-section"
          className={cn(
            'hidden rounded-[5px] bg-brand px-4 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-white lg:inline-flex',
            scrolled ? 'border-2 border-white/40 bg-brand' : 'border-2 border-transparent',
          )}
        >
          Buy Ticket
        </ButtonLink>
      </div>

      <button
        type="button"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="absolute right-4 top-4 z-50 rounded p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {open && (
        <div className="absolute inset-x-0 top-0 z-40 bg-brand px-4 pb-6 pt-16 shadow-lg lg:hidden">
          <nav aria-label="Mobile" className="flex flex-col items-center gap-4">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold uppercase tracking-[0.1em] text-white/90 transition-colors hover:text-accent"
              >
                {item.label}
              </a>
            ))}
            <ButtonLink
              href="#pricing-section"
              className="mt-2 rounded-[5px] bg-white px-4 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-brand"
            >
              Buy Ticket
            </ButtonLink>
          </nav>
        </div>
      )}
    </header>
  )
}
