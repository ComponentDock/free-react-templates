import { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'
import { BRAND, NAV_LINKS } from '../data'
import { cn } from '@free-react-templates/ui'

/* Transparent navbar floating over the gradient hero (top 20px, white
   text); on scroll it becomes fixed with a white background and soft
   shadow (active link turns brand blue). Mobile (≤lg): solid black bar
   in normal flow with a "Menu" toggler that expands the same links +
   CTA buttons. */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'w-full transition-colors',
        scrolled
          ? 'fixed top-0 z-50 bg-white shadow-[0_0_10px_0_rgba(0,0,0,0.1)]'
          : 'relative top-0 z-50 bg-black lg:absolute lg:top-[20px] lg:bg-transparent',
      )}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-[70px] max-w-6xl items-center justify-between px-4"
      >
        <a
          href="#"
          className={cn(
            'text-[22px] font-bold tracking-wide',
            scrolled ? 'text-black' : 'text-white',
          )}
        >
          {BRAND}
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  aria-current={link.active ? 'true' : undefined}
                  className={cn(
                    'text-[13px] font-semibold uppercase tracking-wide transition-colors',
                    scrolled
                      ? link.active
                        ? 'text-brand'
                        : 'text-black hover:text-accent'
                      : link.active
                        ? 'text-white/50'
                        : 'text-white hover:text-accent',
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <a
              href="#"
              className="rounded-[5px] border border-brand bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-transparent hover:text-brand"
            >
              Post a Job
            </a>
            <a
              href="#"
              className="rounded-[5px] bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Want a Job
            </a>
          </div>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex items-center gap-2 rounded-[5px] border border-white/40 px-3 py-2 text-sm text-white lg:hidden"
        >
          <Menu className="h-4 w-4" aria-hidden="true" />
          Menu
        </button>
      </nav>

      {open && (
        <div className="bg-black px-4 pb-6 lg:hidden">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.label} className="border-b border-white/10">
                <a
                  href={link.href}
                  aria-current={link.active ? 'true' : undefined}
                  className="block py-3 text-[15px] text-white/70 transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-2">
            <a
              href="#"
              className="rounded-[5px] border border-brand bg-brand px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Post a Job
            </a>
            <a
              href="#"
              className="rounded-[5px] bg-accent px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Want a Job
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
