import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { NAV_LINKS } from '../data'

/* Navbar (source: header.site-navbar — absolute transparent bar over the
   hero; .sticky-wrapper.is-sticky turns it solid white with a green logo
   on scroll). Desktop: white uppercase wordmark left, six white links
   right (active/hover → brand green). Mobile: hamburger opens a 300px
   right off-canvas panel with the same links + close control. */
export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        data-variant={scrolled ? 'solid' : 'transparent'}
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
          scrolled ? 'bg-white shadow-[0_10px_30px_0_rgba(0,0,0,0.08)]' : 'bg-transparent',
        )}
      >
        <div className="mx-auto flex max-w-[1140px] items-center justify-between px-[15px] py-4">
          <a
            href="#home"
            className={cn(
              'text-[1.7rem] font-bold uppercase tracking-wide transition-colors',
              scrolled ? 'text-brand' : 'text-white',
            )}
          >
            Roost
          </a>

          <nav aria-label="Main navigation" className="hidden lg:block">
            <ul className="flex">
              {NAV_LINKS.map((link, index) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    aria-current={index === 0 ? 'page' : undefined}
                    className={cn(
                      'inline-block px-[15px] py-5 text-[16px] transition-colors hover:text-brand',
                      index === 0 && 'text-brand',
                      !scrolled && index !== 0 && 'text-white',
                      scrolled && index !== 0 && 'text-ink',
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className={cn('lg:hidden', scrolled ? 'text-ink' : 'text-white')}
          >
            <Menu className="h-7 w-7" aria-hidden="true" />
          </button>
        </div>
      </header>

      {open && (
        <nav
          aria-label="Mobile navigation"
          className="fixed inset-y-0 right-0 z-[1999] w-[300px] overflow-y-auto bg-white shadow-[-10px_0_20px_-10px_rgba(0,0,0,0.5)]"
        >
          <div className="flex items-center justify-between px-6 py-5">
            <span className="text-[1.4rem] font-bold uppercase text-ink">Roost</span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="text-ink transition-colors hover:text-brand"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <ul className="px-6 pb-8">
            {NAV_LINKS.map((link, index) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  aria-current={index === 0 ? 'page' : undefined}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'block border-b border-soft py-3 text-[16px] uppercase text-ink transition-colors hover:text-brand',
                    index === 0 && 'text-brand',
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  )
}
