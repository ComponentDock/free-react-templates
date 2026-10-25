import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { nav, site } from '../content'

/** The mark is drawn here: a hedge line, a leaf and two greens. No copied asset. */
export function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2">
      <svg viewBox="0 0 40 32" aria-hidden="true" className="h-8 w-auto lg:h-10">
        <path
          d="M16 23c0-8 5.5-13 13-13 0 8-5.5 13-13 13z"
          className={light ? 'fill-primary-400' : 'fill-primary-700'}
        />
        <path d="M16.4 22.6C20 20 23 17 25 13" stroke="#86efac" strokeWidth="1.6" fill="none" />
        <path d="M4 24h32" stroke={light ? '#d6d3d1' : '#78716c'} strokeWidth="2" />
        <path d="M4 28h24" stroke={light ? '#a8a29e' : '#a8a29e'} strokeWidth="1.6" />
      </svg>
      <span
        className={`font-serif text-xl font-semibold tracking-tight ${
          light ? 'text-white' : 'text-accent-900'
        }`}
      >
        {site.name}
      </span>
    </span>
  )
}

/** The band whose top most recently crossed the reading line wins the spy. */
function activeTarget(targets: string[]): string | null {
  let current: string | null = null

  targets.forEach((target) => {
    const element = document.getElementById(target.slice(1))
    if (element && element.getBoundingClientRect().top <= 140) {
      current = target
    }
  })

  return current
}

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<string | null>(null)

  const targets = Array.from(new Set(nav.map((item) => item.target)))

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 50)
      setActive(activeTarget(targets))
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
    // `targets` is derived from the module-level nav list, so it never changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /** Three labels share one target; only the first label for a band lights up. */
  const activeLabel = nav.find((item) => item.target === active)?.label ?? null

  return (
    <header
      data-header
      className={cn(
        'sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-lg',
        scrolled && 'shadow-lg',
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4 lg:h-20 lg:px-8">
        <a href="#top" aria-label={`${site.name} home`} className="shrink-0">
          <Wordmark />
        </a>

        <nav aria-label="Sections" className="hidden lg:flex lg:items-center lg:gap-8">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.target}
              data-nav-link={item.target}
              aria-current={activeLabel === item.label ? 'true' : undefined}
              className={cn(
                'nav-link text-sm font-medium text-gray-600 transition-colors hover:text-gray-900',
                activeLabel === item.label && 'font-semibold text-gray-900',
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-700 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:outline-none sm:inline-flex"
          >
            Book a site visit
          </a>
          <button
            type="button"
            data-mobile-toggle
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-gray-600 transition-colors hover:bg-gray-100 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:outline-none lg:hidden"
          >
            {open ? (
              <X aria-hidden="true" className="h-5 w-5" />
            ) : (
              <Menu aria-hidden="true" className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        data-mobile-menu
        hidden={!open}
        className="border-t border-gray-200 bg-white px-4 py-4 lg:hidden"
      >
        {nav.map((item) => (
          <a
            key={`mobile-${item.label}`}
            href={item.target}
            onClick={() => setOpen(false)}
            className="block py-3 text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
          >
            {item.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="mt-2 block w-full rounded-lg bg-primary-600 px-5 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-primary-700"
        >
          Book a site visit
        </a>
      </div>
    </header>
  )
}
