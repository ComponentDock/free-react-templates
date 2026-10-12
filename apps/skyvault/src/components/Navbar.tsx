import { useEffect, useRef, useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { Menu } from 'lucide-react'
import { MobileMenu, NAV_ITEMS } from './MobileMenu'
import { Wordmark } from './Wordmark'

/** Scroll distance past which the floating header collapses into a violet bar. */
const SCROLL_THRESHOLD = 91

const LINK_CLASS =
  'text-[16px] font-semibold text-white transition-colors hover:text-mint focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mint'

/**
 * The fixed header: it starts transparent over the hero's gradient with a
 * 124 px content row, and past 91 px of scroll it collapses to an 80 px row on
 * the deepest violet over 400 ms. The five destinations sit centred between the
 * wordmark and the auth pair, and below the desktop breakpoint the menu moves
 * into the off-canvas panel behind the hamburger.
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('Home')
  const triggerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 z-[100] w-screen transition-all duration-[400ms]',
        scrolled ? 'bg-night pt-[6px]' : 'bg-transparent pt-0',
      )}
    >
      <div
        className={cn(
          'mx-auto flex w-full max-w-[1140px] items-center px-5 transition-all duration-[400ms]',
          scrolled ? 'h-[80px]' : 'h-[124px]',
        )}
      >
        <a
          href="#home"
          aria-label="Skyvault home"
          className="shrink-0 rounded-[6px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mint"
        >
          <Wordmark className="text-[24px] leading-none" />
        </a>

        <nav aria-label="Main" className="mr-auto ml-auto hidden min-[992px]:block">
          <ul className="flex items-center">
            {NAV_ITEMS.map((item, index) => (
              <li key={item.label} className={index === NAV_ITEMS.length - 1 ? '' : 'mr-[40px] min-[1200px]:mr-[48px]'}>
                <a
                  href={item.href}
                  aria-current={active === item.label ? 'page' : undefined}
                  onClick={() => setActive(item.label)}
                  className={cn(LINK_CLASS, active === item.label && 'text-mint')}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto hidden items-center gap-[4px] min-[992px]:flex">
          <a href="#contact" className={LINK_CLASS}>
            Login
          </a>
          <span aria-hidden="true" className="text-[16px] font-semibold text-white">
            /
          </span>
          <a href="#contact" className={LINK_CLASS}>
            Register
          </a>
        </div>

        <button
          ref={triggerRef}
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close the menu' : 'Open the menu'}
          className="ml-auto rounded-[7px] border border-transparent p-[5px] text-white transition-colors hover:border-[rgba(255,255,255,.15)] min-[992px]:hidden"
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <MobileMenu
        open={menuOpen}
        onClose={() => {
          setMenuOpen(false)
          triggerRef.current?.focus()
        }}
        triggerRef={triggerRef}
      />
    </header>
  )
}
