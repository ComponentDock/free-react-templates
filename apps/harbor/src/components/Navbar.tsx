import { useEffect, useRef, useState } from 'react'
import { cn } from '@free-react-templates/ui'
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
  { label: 'About', href: '#services' },
  { label: 'Hosting', href: '#pricing' },
  {
    label: 'Pages',
    href: '#pricing',
    children: [
      { label: 'Pricing', href: '#pricing' },
      { label: 'Blog Details', href: '#work' },
      { label: '404', href: '#choose-plan' },
    ],
  },
  { label: 'News', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

/**
 * Transparent logo/nav row that floats over the hero. The "Pages" item opens a
 * dropdown on hover *and* on click (keyboard/touch), and the whole menu
 * collapses into a toggleable panel under the `md` breakpoint.
 */
export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const navRef = useRef<HTMLElement>(null)

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
    <nav ref={navRef} aria-label="Main" className="py-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4">
        <a href="#home" className="transition-opacity hover:opacity-90">
          <Wordmark />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
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
                        setOpenDropdown(openDropdown === item.label ? null : item.label)
                      }
                    : undefined
                }
                className={cn(
                  'inline-flex items-center gap-1 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:text-brand',
                  item.active && 'border-b border-white',
                )}
              >
                {item.label}
                {item.children ? <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" /> : null}
              </a>

              {item.children && openDropdown === item.label ? (
                <ul className="absolute left-0 top-full z-10 mt-3 w-44 rounded-md bg-white py-2 shadow-lg">
                  {item.children.map((child) => (
                    <li key={child.label}>
                      <a
                        href={child.href}
                        className="block px-5 py-2 text-sm font-medium uppercase tracking-wide text-[#111] transition-colors hover:text-brand"
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

        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          className="rounded-md p-2 text-white transition-colors hover:text-brand md:hidden"
        >
          {mobileOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {mobileOpen ? (
        <div className="mx-auto max-w-6xl px-4 md:hidden">
          <ul className="mt-4 flex flex-col gap-4 border-t border-navy-700 pt-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:text-brand"
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
          </ul>
        </div>
      ) : null}
    </nav>
  )
}
