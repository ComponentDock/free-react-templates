import { useEffect, useState } from 'react'
import { Plus, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { emailLink, navLinks, siteName } from '../data'

/** 99px transparent header floating on the hero; lime fill once the band ends. */
export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 99)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'z-30 w-full border-b border-ink/20 transition-all duration-300',
        scrolled
          ? 'fixed top-0 bg-band shadow-[0_10px_15px_rgba(25,25,25,0.1)]'
          : 'absolute top-0 bg-transparent',
      )}
    >
      <div className="mx-auto flex min-h-[99px] max-w-[1320px] items-center justify-between px-5 lg:px-[100px]">
        <a href="#top" className="font-serif text-[26px] leading-none tracking-[1px] text-ink">
          {siteName}
        </a>

        <div className="hidden items-center lg:flex">
          <nav aria-label="Main">
            <ul className="flex items-center">
              {navLinks.map((link, index) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    aria-current={index === 0 ? 'page' : undefined}
                    className={cn(
                      'block border-l border-ink/20 px-[42px] text-[20px] text-ink transition-colors hover:bg-hover',
                      scrolled ? 'py-5' : 'py-[34px]',
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href={emailLink.href}
            className="ml-[42px] text-[20px] tracking-[-0.5px] text-ink underline underline-offset-4 hover:text-hover"
          >
            {emailLink.label}
          </a>
        </div>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="portray-menu"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex items-center gap-2 py-6 text-[18px] tracking-[1px] text-ink uppercase lg:hidden"
        >
          {menuOpen ? (
            <X aria-hidden="true" className="size-5" />
          ) : (
            <Plus aria-hidden="true" className="size-5" />
          )}
          Menu
        </button>
      </div>

      {menuOpen ? (
        <nav id="portray-menu" aria-label="Mobile" className="border-t border-ink/20 lg:hidden">
          <ul>
            {navLinks.map((link) => (
              <li key={`mobile-${link.label}`}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block border-b border-ink/10 px-5 py-4 text-[18px] text-ink hover:bg-hover"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={emailLink.href}
                onClick={() => setMenuOpen(false)}
                className="block px-5 py-4 text-[18px] text-ink underline hover:bg-hover"
              >
                {emailLink.label}
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
