import { useEffect, useState } from 'react'
import { Menu, Ship, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { navLinks, siteName } from '../data'

/**
 * White 67px bar over the hero: seven in-page items, the wordmark turning brand blue once the bar
 * is stuck to the top of the viewport, and a drawer behind a toggle below 992px.
 */
export function Navbar() {
  const [open, setOpen] = useState(false)
  const [stuck, setStuck] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setStuck(window.scrollY > 0)
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <header
      data-stuck={stuck ? 'true' : 'false'}
      className={cn(
        'z-50 w-full bg-white',
        stuck && 'fixed inset-x-0 top-0 shadow-[4px_0_20px_-5px_rgba(0,0,0,0.2)]',
      )}
    >
      <div
        className={cn(
          'mx-auto flex max-w-[1140px] items-center justify-between px-4 transition-all duration-300',
          stuck ? 'h-[67px]' : 'h-[99px]',
        )}
      >
        <a
          href="#home"
          className={cn(
            'flex items-center gap-2 text-[32px] leading-none font-black tracking-tight uppercase transition-colors',
            stuck ? 'text-brand' : 'text-ink',
          )}
        >
          <Ship aria-hidden="true" className="size-7" />
          {siteName}
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center">
            {navLinks.map((link, index) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  aria-current={index === 0 ? 'page' : undefined}
                  className={cn(
                    'block px-0 py-5 mx-[15px] text-[16px] transition-colors hover:text-brand',
                    index === 0 ? 'text-brand' : 'text-ink',
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
          aria-expanded={open}
          aria-controls="dockyard-menu"
          aria-label="Menu"
          onClick={() => {
            setOpen((value) => !value)
          }}
          className="text-ink lg:hidden"
        >
          {open ? (
            <X aria-hidden="true" className="size-7" />
          ) : (
            <Menu aria-hidden="true" className="size-7" />
          )}
        </button>
      </div>

      {open ? (
        <nav id="dockyard-menu" aria-label="Mobile" className="border-t border-line lg:hidden">
          <ul>
            {navLinks.map((link) => (
              <li key={`mobile-${link.label}`}>
                <a
                  href={link.href}
                  onClick={() => {
                    setOpen(false)
                  }}
                  className="block border-b border-line px-4 py-3 text-[16px] text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
