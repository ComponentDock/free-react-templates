import { useEffect, useState } from 'react'
import { ButtonLink, cn } from '@free-react-templates/ui'
import { ChevronDown, Menu, X } from 'lucide-react'
import { Wordmark } from './Wordmark'

interface NavItem {
  label: string
  href: string
  active?: boolean
  children?: { label: string; href: string }[]
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home', active: true },
  { label: 'Packages', href: '#pricing' },
  { label: 'Help', href: '#faq' },
  {
    label: 'Blog',
    href: '#features',
    children: [
      { label: 'Blog', href: '#features' },
      { label: 'Blog Details', href: '#about' },
      { label: 'Elements', href: '#support' },
    ],
  },
  { label: 'Contact', href: '#contact' },
]

/**
 * Transparent logo/nav row that floats over the plum hero, with the magenta
 * "Sign Up" pill and a plain "Sign In" link. The "Blog" item opens a dropdown
 * on hover *and* on click (keyboard/touch); the whole menu collapses into a
 * toggleable panel under the `lg` breakpoint.
 */
export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [hovered, setHovered] = useState<string | null>(null)
  const [clicked, setClicked] = useState<string | null>(null)

  const dropdownOpen = hovered ?? clicked

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

  return (
    <header className="absolute top-0 left-0 z-30 w-full">
      <nav aria-label="Main" className="py-6">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4">
          <a href="#home" className="transition-opacity hover:opacity-90">
            <Wordmark />
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
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
                  aria-expanded={item.children ? dropdownOpen === item.label : undefined}
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
                    'font-heading inline-flex items-center gap-1 text-sm font-semibold tracking-wide text-white uppercase transition-colors hover:text-accent',
                    item.active && 'border-b border-accent',
                  )}
                >
                  {item.label}
                  {item.children ? (
                    <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
                  ) : null}
                </a>

                {item.children && dropdownOpen === item.label ? (
                  <ul className="absolute top-full left-0 z-10 mt-3 w-48 rounded-md bg-white py-2 shadow-lg">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={child.href}
                          className="font-heading block px-5 py-2 text-sm font-medium text-shell transition-colors hover:text-accent-strong"
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
                href="#pricing"
                className="bg-gradient-to-b from-gradient-from to-gradient-to font-heading rounded-full border-0 px-8 py-3 text-sm font-semibold text-white"
              >
                Sign Up
              </ButtonLink>
            </li>
            <li>
              <a
                href="#contact"
                className="font-heading text-sm font-semibold text-white uppercase transition-colors hover:text-accent"
              >
                Sign In
              </a>
            </li>
          </ul>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className="rounded-md p-2 text-white transition-colors hover:text-accent lg:hidden"
          >
            {mobileOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {mobileOpen ? (
          <div className="mx-auto max-w-[1200px] px-4 lg:hidden">
            <ul className="mt-4 flex flex-col gap-4 border-t border-white/15 pt-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      'font-heading block text-sm font-semibold tracking-wide text-white uppercase transition-colors hover:text-accent',
                      item.active && 'text-accent',
                    )}
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
                            className="block text-sm text-muted transition-colors hover:text-white"
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
                  href="#pricing"
                  onClick={() => setMobileOpen(false)}
                  className="bg-gradient-to-b from-gradient-from to-gradient-to font-heading w-full rounded-full border-0 px-8 py-3 text-sm font-semibold text-white"
                >
                  Sign Up
                </ButtonLink>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="font-heading block text-sm font-semibold text-white uppercase transition-colors hover:text-accent"
                >
                  Sign In
                </a>
              </li>
            </ul>
          </div>
        ) : null}
      </nav>
    </header>
  )
}
