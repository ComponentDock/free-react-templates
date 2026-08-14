import { useEffect, useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { BELIEFS_DROPDOWN, NAV_LINKS } from '../data'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [beliefsOpen, setBeliefsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-[99] bg-white px-5 py-5 transition-shadow',
        scrolled && 'shadow-md',
      )}
    >
      <div className="flex items-center justify-between border-b border-black/10 bg-light px-4 py-2">
        <a href="#home" className="text-[26px] font-extralight tracking-wide text-ink">
          Steeple
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-[15px] font-medium uppercase tracking-[0.05em] text-navlink transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="relative">
              <button
                type="button"
                aria-expanded={beliefsOpen}
                aria-label="Beliefs"
                onClick={() => setBeliefsOpen((open) => !open)}
                className="flex items-center gap-1 text-[15px] font-medium uppercase tracking-[0.05em] text-navlink transition-colors hover:text-ink"
              >
                {BELIEFS_DROPDOWN.label}
                <ChevronDown aria-hidden="true" className="h-4 w-4" />
              </button>
              {beliefsOpen && (
                <ul className="absolute left-0 top-full z-10 mt-2 w-44 bg-white py-2 shadow-lg">
                  {BELIEFS_DROPDOWN.children.map((item) => (
                    <li key={item.label} className="relative">
                      <a
                        href={item.href}
                        className="block px-4 py-2 text-sm text-navlink transition-colors hover:bg-light hover:text-ink"
                      >
                        {item.label}
                      </a>
                      {'nested' in item && item.nested && (
                        <ul className="absolute left-full top-0 w-40 bg-white py-2 shadow-lg">
                          {item.nested.map((nested) => (
                            <li key={nested.label}>
                              <a
                                href={nested.href}
                                className="block px-4 py-2 text-sm text-navlink transition-colors hover:bg-light hover:text-ink"
                              >
                                {nested.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </nav>

        <button
          type="button"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => {
            setMobileOpen((open) => !open)
            setBeliefsOpen(false)
          }}
          className="lg:hidden"
        >
          <Menu aria-hidden="true" className="h-6 w-6 text-ink" />
        </button>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-[100] bg-white lg:hidden">
          <div className="flex items-center justify-between border-b border-black/10 px-5 py-5">
            <span className="text-[26px] font-extralight text-ink">Steeple</span>
            <button type="button" aria-label="Close menu" onClick={() => setMobileOpen(false)}>
              <X aria-hidden="true" className="h-6 w-6 text-ink" />
            </button>
          </div>
          <nav aria-label="Mobile navigation" className="px-5 py-6">
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-lg uppercase tracking-[0.05em] text-navlink hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  aria-expanded={beliefsOpen}
                  onClick={() => setBeliefsOpen((open) => !open)}
                  className="flex items-center gap-1 text-lg uppercase tracking-[0.05em] text-navlink hover:text-ink"
                >
                  {BELIEFS_DROPDOWN.label}
                  <ChevronDown aria-hidden="true" className="h-5 w-5" />
                </button>
                {beliefsOpen && (
                  <ul className="mt-2 space-y-2 border-l border-black/10 pl-4">
                    {BELIEFS_DROPDOWN.children.map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="block text-base text-navlink hover:text-ink"
                        >
                          {item.label}
                        </a>
                        {'nested' in item && item.nested && (
                          <ul className="mt-2 space-y-1 border-l border-black/10 pl-4">
                            {item.nested.map((nested) => (
                              <li key={nested.label}>
                                <a
                                  href={nested.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="block text-sm text-navlink hover:text-ink"
                                >
                                  {nested.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
