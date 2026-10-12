import { useEffect, useState } from 'react'
import { ButtonLink, cn } from '@free-react-templates/ui'
import { ChevronDown, Menu, Phone, X } from 'lucide-react'
import { Wordmark } from './Wordmark'

interface NavItem {
  label: string
  href: string
  active?: boolean
  children?: { label: string; href: string }[]
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home', active: true },
  { label: 'About', href: '#features' },
  { label: 'Services', href: '#pricing' },
  { label: 'Help', href: '#faq' },
  {
    label: 'Blog',
    href: '#brands',
    children: [
      { label: 'Blog', href: '#brands' },
      { label: 'Blog Details', href: '#testimonials' },
      { label: 'Elements', href: '#security' },
    ],
  },
  { label: 'Contact', href: '#contact' },
]

/** The support line shown in the header action cluster. */
const SUPPORT_PHONE = '+1 415 555 0134'

/**
 * The hero's overlay navigation: an absolutely positioned row that lets the
 * violet hero show through, switching to a solid white sticky bar once the page
 * is scrolled. "Blog" opens a dropdown on hover and click (keyboard/touch) and
 * the whole menu collapses into a toggleable panel under `lg`.
 */
export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [hovered, setHovered] = useState<string | null>(null)
  const [clicked, setClicked] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  const openDropdown = hovered ?? clicked

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!mobileOpen) {
      return
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false)
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [mobileOpen])

  const linkClass = cn(
    'font-heading text-base font-normal capitalize transition-colors',
    scrolled ? 'text-ink hover:text-brand' : 'text-white hover:text-brand',
  )

  return (
    <header
      className={cn(
        'left-0 z-30 w-full',
        scrolled
          ? 'fixed top-0 bg-white shadow-[0_10px_15px_rgba(25,25,25,0.1)]'
          : 'absolute top-0',
      )}
    >
      <nav aria-label="Main" className={cn(scrolled ? 'py-3' : 'py-6')}>
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 lg:px-[85px]">
          <a href="#home" aria-label="Presto home">
            <Wordmark className={scrolled ? 'text-ink' : undefined} />
          </a>

          <ul className="hidden items-center gap-2 lg:flex">
            {NAV_ITEMS.map((item) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => setHovered(item.label)}
                onMouseLeave={() => setHovered(null)}
              >
                <a
                  href={item.href}
                  aria-current={item.active ? 'page' : undefined}
                  aria-haspopup={item.children ? 'true' : undefined}
                  aria-expanded={item.children ? openDropdown === item.label : undefined}
                  onClick={
                    item.children
                      ? (event) => {
                          event.preventDefault()
                          setHovered(null)
                          setClicked(clicked === item.label ? null : item.label)
                        }
                      : undefined
                  }
                  className={cn(
                    linkClass,
                    'inline-flex items-center gap-1 px-4 py-2',
                    item.active && 'text-brand',
                  )}
                >
                  {item.label}
                  {item.children ? (
                    <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
                  ) : null}
                </a>

                {item.children && openDropdown === item.label ? (
                  <ul className="absolute top-full left-0 z-10 w-[170px] bg-brand py-2 shadow-lg">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={child.href}
                          className="font-heading block px-5 py-2 text-sm text-white transition-colors hover:bg-brand-deep"
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>

          <div className="hidden items-center lg:flex">
            <a
              href={`tel:${SUPPORT_PHONE.replace(/\s/g, '')}`}
              className={cn(
                'font-heading mr-10 inline-flex items-center gap-2 text-base',
                scrolled ? 'text-ink' : 'text-white',
              )}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {SUPPORT_PHONE}
            </a>
            <ButtonLink href="#contact" className="rounded-full px-11 py-3.5 text-sm font-semibold">
              Sign In
            </ButtonLink>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className={cn(
              'rounded-md p-2 transition-colors lg:hidden',
              scrolled ? 'text-ink hover:text-brand' : 'text-white hover:text-brand',
            )}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {mobileOpen ? (
          <div className="mx-auto max-w-[1400px] px-5 pb-6 lg:hidden">
            <ul className="mt-4 flex flex-col gap-3 border-t border-line pt-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-heading block text-base font-medium text-ink capitalize transition-colors hover:text-brand"
                  >
                    {item.label}
                  </a>
                  {item.children ? (
                    <ul className="mt-2 flex flex-col gap-2 pl-4">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <a
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="block text-sm text-copy-muted transition-colors hover:text-brand"
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
              <li>
                <ButtonLink
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="w-full rounded-full py-3.5 text-sm font-semibold"
                >
                  Sign In
                </ButtonLink>
              </li>
            </ul>
          </div>
        ) : null}
      </nav>
    </header>
  )
}
