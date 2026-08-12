import { useEffect, useState } from 'react'
import { ChevronDown, Dumbbell, Menu, Phone, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { BLOG_DROPDOWN, BRAND, NAV_LINKS, PAGES_DROPDOWN, PHONE } from '../data'

/**
 * Navbar — absolute over the hero, centered white uppercase Oswald links
 * with Blog/Pages dropdowns, red phone CTA on the right, and a sticky red
 * `#ff0000` header once the page is scrolled. On narrow viewports a
 * hamburger toggles a mobile menu with black link text.
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [blogOpen, setBlogOpen] = useState(false)
  const [pagesOpen, setPagesOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const sectionId = (label: string) => (label === 'Home' ? 'home' : label.toLowerCase())

  return (
    <header
      className={cn(
        'left-0 right-0 top-0 z-50 w-full transition-colors duration-300',
        scrolled ? 'fixed bg-brand shadow-lg' : 'absolute bg-transparent',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center px-4 lg:px-8">
        <a
          href="#home"
          aria-label={`${BRAND} home`}
          className={cn(
            'flex items-center justify-center gap-2 transition-all duration-300',
            scrolled ? 'h-16' : 'h-24 lg:h-28',
          )}
        >
          <span
            className={cn(
              'flex items-center justify-center bg-brand text-white',
              scrolled ? 'h-10 w-10' : 'h-12 w-12 lg:h-14 lg:w-14',
            )}
          >
            <Dumbbell
              className={cn(scrolled ? 'h-5 w-5' : 'h-6 w-6 lg:h-7 lg:w-7')}
              aria-hidden="true"
            />
          </span>
          <span className="font-display text-2xl uppercase text-white lg:text-3xl">{BRAND}</span>
        </a>

        <nav aria-label="Main" className="mx-auto hidden lg:block">
          <ul className="flex items-center">
            {NAV_LINKS.map((label) => (
              <li key={label}>
                <a
                  href={`#${sectionId(label)}`}
                  className="inline-block px-6 py-7 text-[15px] font-medium uppercase tracking-wide text-white transition-colors hover:text-brand-hover"
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="relative">
              <button
                type="button"
                aria-expanded={blogOpen}
                onClick={() => {
                  setBlogOpen((v) => !v)
                  setPagesOpen(false)
                }}
                className="inline-flex items-center gap-1 px-6 py-7 text-[15px] font-medium uppercase tracking-wide text-white transition-colors hover:text-brand-hover"
              >
                Blog <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
              {blogOpen && (
                <ul className="absolute left-0 top-full w-44 bg-surface py-2 shadow-lg">
                  {BLOG_DROPDOWN.map((item) => (
                    <li key={item}>
                      <a
                        href="#blog"
                        className="block px-5 py-2.5 text-sm text-black transition-colors hover:text-brand"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li className="relative">
              <button
                type="button"
                aria-expanded={pagesOpen}
                onClick={() => {
                  setPagesOpen((v) => !v)
                  setBlogOpen(false)
                }}
                className="inline-flex items-center gap-1 px-6 py-7 text-[15px] font-medium uppercase tracking-wide text-white transition-colors hover:text-brand-hover"
              >
                Pages <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
              {pagesOpen && (
                <ul className="absolute left-0 top-full w-48 bg-surface py-2 shadow-lg">
                  {PAGES_DROPDOWN.map((item) => (
                    <li key={item}>
                      <a
                        href="#pages"
                        className="block px-5 py-2.5 text-sm text-black transition-colors hover:text-brand"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </nav>

        <a
          href={'tel:' + PHONE.replace(/[^\d+]/g, '')}
          className="ml-auto hidden items-center gap-2 bg-brand px-7 py-3 text-sm font-medium uppercase text-white transition-colors hover:bg-ink lg:inline-flex"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          {PHONE}
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="ml-auto p-3 text-white lg:hidden"
        >
          {open ? (
            <X className="h-7 w-7" aria-hidden="true" />
          ) : (
            <Menu className="h-7 w-7" aria-hidden="true" />
          )}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/20 bg-white px-4 py-4 lg:hidden">
          <ul className="space-y-1">
            {NAV_LINKS.map((label) => (
              <li key={label}>
                <a
                  href={`#${sectionId(label)}`}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-sm font-medium uppercase tracking-wide text-black transition-colors hover:text-brand"
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <button
                type="button"
                aria-expanded={blogOpen}
                onClick={() => setBlogOpen((v) => !v)}
                className="flex w-full items-center justify-between py-2.5 text-sm font-medium uppercase tracking-wide text-black transition-colors hover:text-brand"
              >
                Blog <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
              {blogOpen && (
                <ul className="pl-4">
                  {BLOG_DROPDOWN.map((item) => (
                    <li key={item}>
                      <a
                        href="#blog"
                        onClick={() => setOpen(false)}
                        className="block py-2 text-sm text-black transition-colors hover:text-brand"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <button
                type="button"
                aria-expanded={pagesOpen}
                onClick={() => setPagesOpen((v) => !v)}
                className="flex w-full items-center justify-between py-2.5 text-sm font-medium uppercase tracking-wide text-black transition-colors hover:text-brand"
              >
                Pages <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
              {pagesOpen && (
                <ul className="pl-4">
                  {PAGES_DROPDOWN.map((item) => (
                    <li key={item}>
                      <a
                        href="#pages"
                        onClick={() => setOpen(false)}
                        className="block py-2 text-sm text-black transition-colors hover:text-brand"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
          <a
            href={'tel:' + PHONE.replace(/[^\d+]/g, '')}
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex items-center gap-2 bg-brand px-6 py-3 text-sm font-medium uppercase text-white transition-colors hover:bg-ink"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {PHONE}
          </a>
        </div>
      )}
    </header>
  )
}
