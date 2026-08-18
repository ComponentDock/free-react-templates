import { useEffect, useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { navLinks } from '../data'
import { socialLinks } from './BrandIcons'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [blogOpen, setBlogOpen] = useState(false)
  const [mobileBlogOpen, setMobileBlogOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkColor = scrolled ? 'text-ink hover:text-meta' : 'text-white hover:opacity-80'
  const iconColor = scrolled ? 'text-ink' : 'text-white'

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors',
        scrolled ? 'bg-white shadow-sm' : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-[22px] sm:px-6 lg:px-8">
        <a
          href="#home"
          className={cn('font-display text-2xl uppercase tracking-[0.2em]', iconColor)}
        >
          Shutterly
        </a>

        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {navLinks.map((link) =>
              link.dropdown ? (
                <li key={link.label} className="relative">
                  <button
                    type="button"
                    aria-expanded={blogOpen}
                    aria-haspopup="true"
                    onClick={() => setBlogOpen((v) => !v)}
                    className={cn(
                      'flex items-center gap-1 text-base',
                      scrolled ? 'text-ink' : 'text-white',
                    )}
                  >
                    {link.label}
                    <ChevronDown
                      aria-hidden="true"
                      className={cn('size-4 transition-transform', blogOpen && 'rotate-180')}
                    />
                  </button>
                  {blogOpen && (
                    <ul className="absolute left-1/2 top-full w-44 -translate-x-1/2 border border-card-border bg-white py-2 shadow-lg">
                      {link.dropdown.map((item) => (
                        <li key={item}>
                          <a
                            href="#home"
                            onClick={() => setBlogOpen(false)}
                            className="block px-4 py-2 text-[15px] text-ink transition-colors hover:bg-services-bg"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={link.label}>
                  <a
                    href={link.href}
                    aria-current={link.label === 'Home' ? 'page' : undefined}
                    className={cn(
                      'text-base transition-colors',
                      linkColor,
                      link.label === 'Home' && 'underline decoration-1 underline-offset-8',
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-5">
          <ul className="flex items-center gap-4">
            {socialLinks.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={`${label} profile`}
                  className={cn('transition-colors', iconColor, scrolled && 'hover:text-meta')}
                >
                  <Icon className="size-4" />
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className={cn(
              'flex size-10 items-center justify-center rounded transition-colors lg:hidden',
              scrolled ? 'border border-ink/20 text-ink' : 'border border-white/40 text-white',
            )}
          >
            {mobileOpen ? (
              <X aria-hidden="true" className="size-5" />
            ) : (
              <Menu aria-hidden="true" className="size-5" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-card-border bg-white shadow-lg lg:hidden"
        >
          <ul className="px-4 py-4">
            {navLinks.map((link) =>
              link.dropdown ? (
                <li key={link.label}>
                  <button
                    type="button"
                    aria-expanded={mobileBlogOpen}
                    onClick={() => setMobileBlogOpen((v) => !v)}
                    className="flex w-full items-center justify-between py-2.5 font-medium text-ink"
                  >
                    {link.label}
                    <ChevronDown
                      aria-hidden="true"
                      className={cn('size-4 transition-transform', mobileBlogOpen && 'rotate-180')}
                    />
                  </button>
                  {mobileBlogOpen && (
                    <ul className="pl-5">
                      {link.dropdown.map((item) => (
                        <li key={item}>
                          <a
                            href="#home"
                            onClick={() => setMobileOpen(false)}
                            className="block py-2 text-[15px] text-ink transition-colors hover:text-meta"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2.5 font-medium text-ink transition-colors hover:text-meta"
                  >
                    {link.label}
                  </a>
                </li>
              ),
            )}
          </ul>
          <div className="flex items-center gap-5 border-t border-card-border px-4 py-4">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={`${label} profile`}
                className="text-ink transition-colors hover:text-meta"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
