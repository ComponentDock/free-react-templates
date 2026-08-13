import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { brand, navLeft, navRight } from '../data'

/** Three-part absolute header: left nav (Home, Services, About), centered
 *  green "Vitae." logo, right nav (Portfolio, Client, Contact) + hamburger
 *  below lg. On scroll it turns sticky: white bg + soft shadow + black
 *  links. Mobile: white 300px panel slides in from the right. */
export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = cn(
    'px-5 py-[5px] font-sans text-ink transition-colors hover:text-brand',
    scrolled ? 'text-ink' : 'text-ink/70',
  )

  return (
    <header className="absolute inset-x-0 top-0 z-[1999] w-full">
      <div
        data-testid="sticky-header"
        className={cn(
          'mx-auto flex max-w-6xl items-center justify-between px-4 py-4 transition-all',
          scrolled && 'bg-white shadow-[4px_0_20px_-5px_rgba(0,0,0,0.1)]',
        )}
      >
        <nav aria-label="Left" className="hidden items-center lg:flex">
          {navLeft.map((item) => (
            <a key={item.label} href={item.href} className={linkClass}>
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#home-section" className="font-sans text-2xl text-brand">
          {brand.name}.
        </a>

        <div className="flex items-center">
          <nav aria-label="Right" className="hidden items-center lg:flex">
            {navRight.map((item) => (
              <a key={item.label} href={item.href} className={linkClass}>
                {item.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="vitae-mobile-menu"
            onClick={() => setOpen(true)}
            className="text-ink lg:hidden"
          >
            <Menu className="h-7 w-7" aria-hidden="true" />
          </button>
        </div>
      </div>

      {open && (
        <div
          id="vitae-mobile-menu"
          data-testid="mobile-menu"
          className="fixed inset-y-0 right-0 z-[2000] flex w-[300px] flex-col bg-white p-6 shadow-xl"
        >
          <div className="flex items-center justify-between">
            <span className="font-sans text-xl text-brand">{brand.name}.</span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="text-ink"
            >
              <X className="h-[30px] w-[30px]" aria-hidden="true" />
            </button>
          </div>
          <nav aria-label="Mobile" className="mt-8 flex flex-col gap-4">
            {[...navLeft, ...navRight].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-xl text-ink transition-colors hover:text-brand"
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
