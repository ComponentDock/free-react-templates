import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { leftNav, mobileLinks, rightNav, tickerHeadlines, userLinks, utilityLinks } from '../data'
import { useRotator } from '../useRotator'
import { Crest } from './Crest'

/** Fixed header: top bar (tickets/shop, LIVE ticker, sign up/in), split nav
 *  around an overhanging crest, scrolled compaction, mobile fullscreen menu. */
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const tickerIndex = useRotator(tickerHeadlines, 4000)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      {/* Top utility bar */}
      <div className="bg-[rgba(28,36,93,0.75)] text-white">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between gap-4 px-4 text-[13px] lg:px-8">
          <ul className="flex items-center">
            {utilityLinks.map((link, i) => (
              <li key={link.label} className="flex items-center">
                {i > 0 && (
                  <span className="px-3 text-brand" aria-hidden="true">
                    |
                  </span>
                )}
                <a
                  href={link.href}
                  className={cn('transition-colors hover:text-brand', i === 0 && 'text-brand')}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <span className="bg-live px-2 py-0.5 text-[11px] font-bold uppercase text-white">
              Live
            </span>
            <p className="hidden max-w-md truncate text-white/80 md:block" aria-hidden="true">
              {tickerHeadlines[tickerIndex]}
            </p>
            <ul className="flex items-center gap-3">
              {userLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors hover:text-brand">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Main nav row with overhanging crest */}
      <div
        className={cn(
          'border-b-[3px] border-brand bg-[rgba(22,29,74,0.75)] backdrop-blur-sm transition-all duration-300',
          scrolled ? 'h-[110px]' : 'h-[130px]',
        )}
      >
        <div className="relative mx-auto flex h-full max-w-7xl items-center justify-between px-4 lg:px-8">
          <nav aria-label="Primary left" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {leftNav.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    aria-current={link.label === 'Home' ? 'page' : undefined}
                    className={cn(
                      'text-sm font-medium uppercase tracking-wide text-white transition-colors hover:text-brand',
                      link.label === 'Home' && 'text-brand',
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="#home"
            aria-label="Matchday FC — home"
            className={cn(
              'absolute left-1/2 top-full z-10 -translate-x-1/2 transition-all duration-300',
              scrolled ? 'h-[170px] w-[170px] translate-y-10' : 'h-[200px] w-[200px]',
            )}
          >
            <Crest className="h-full w-full drop-shadow-xl" />
          </a>

          <nav aria-label="Primary right" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {rightNav.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-medium uppercase tracking-wide text-white transition-colors hover:text-brand"
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
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
            className="text-white transition-colors hover:text-brand lg:hidden"
          >
            <Menu className="h-7 w-7" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Mobile fullscreen menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Site menu">
          <div
            className="absolute inset-0 bg-[rgba(10,17,35,0.55)]"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute right-0 top-0 flex h-full w-80 max-w-[85vw] flex-col bg-navy px-8 py-7">
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="self-end text-white transition-colors hover:text-brand"
            >
              <X className="h-7 w-7" aria-hidden="true" />
            </button>
            <nav aria-label="Mobile">
              <ul className="mt-8 space-y-5">
                {mobileLinks.map((link, i) => (
                  <li
                    key={link.label}
                    style={{ animationDelay: `${i * 80}ms` }}
                    className="animate-[slideIn_0.4s_ease_both]"
                  >
                    <a
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="text-2xl font-black uppercase text-white transition-colors hover:text-brand"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-auto space-y-4 pt-8">
              <ul className="flex items-center gap-4 text-sm text-white">
                {userLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="transition-colors hover:text-brand">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex gap-3">
                <a
                  href="#tickets"
                  onClick={() => setMenuOpen(false)}
                  className="bg-brand px-4 py-2 text-xs font-bold uppercase text-white transition-colors hover:bg-white hover:text-navy"
                >
                  GET Tickets
                </a>
                <a
                  href="#shop"
                  onClick={() => setMenuOpen(false)}
                  className="border border-white px-4 py-2 text-xs font-bold uppercase text-white transition-colors hover:border-brand hover:text-brand"
                >
                  Shop
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
