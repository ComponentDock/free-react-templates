import { useEffect, useState } from 'react'
import { ChevronDown, Menu, Phone, X } from 'lucide-react'
import { BRAND, NAV_LINKS, PHONE, type NavLink } from '../data'
import { cn } from '@free-react-templates/ui'

interface NavItemProps {
  item: NavLink
  mobile?: boolean
  onNavigate?: () => void
}

/** Desktop dropdown link — hover state is scoped to its own container
    (li) so moving from the trigger into the flyout keeps it open and
    leaving the whole box closes everything. */
function DesktopDropdown({ item, onNavigate }: NavItemProps) {
  const [open, setOpen] = useState(false)
  const children = item.children!
  return (
    <li
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      data-testid="nav-dropdown"
    >
      <a
        href="#destination"
        className="flex items-center gap-1 px-3 py-2 text-sm transition-colors hover:text-white"
        aria-expanded={open}
        aria-haspopup="true"
      >
        {item.label}
        <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
      </a>
      {open && (
        <ul className="absolute left-0 top-full min-w-44 border border-black/10 bg-white py-2 shadow-lg">
          {children.map((child) =>
            child.children ? (
              <li key={child.label} className="relative" data-testid="sub-dropdown">
                {/* Nested flyout keeps its own hover state (Barrister
                    pattern: the child container owns enter/leave). */}
                <NestedDropdown item={child} />
              </li>
            ) : (
              <li key={child.label}>
                <a
                  href="#destination"
                  onClick={onNavigate}
                  className="block px-4 py-2 text-sm text-ink/70 hover:bg-brand-tint hover:text-brand-deep"
                >
                  {child.label}
                </a>
              </li>
            ),
          )}
        </ul>
      )}
    </li>
  )
}

function NestedDropdown({ item }: { item: NavLink }) {
  const [open, setOpen] = useState(false)
  const children = item.children!
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <a
        href="#destination"
        className="flex items-center justify-between gap-3 px-4 py-2 text-sm text-ink/70 hover:bg-brand-tint hover:text-brand-deep"
        aria-expanded={open}
        aria-haspopup="true"
      >
        {item.label}
        <ChevronDown className="h-3.5 w-3.5 -rotate-90" aria-hidden="true" />
      </a>
      {open && (
        <ul className="absolute left-full top-0 min-w-44 border border-black/10 bg-white py-2 shadow-lg">
          {children.map((child) => (
            <li key={child.label}>
              <a
                href="#destination"
                className="block px-4 py-2 text-sm text-ink/70 hover:bg-brand-tint hover:text-brand-deep"
              >
                {child.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

/** Navbar — transparent over the hero, solid white once scrolled.
    Desktop links centered with a Destination dropdown + phone right;
    mobile hamburger opens a panel with the links (dropdowns expanded
    inline). */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = scrolled ? 'text-ink/70 hover:text-ink' : 'text-white/50 hover:text-white'

  return (
    <header
      className={cn(
        'fixed top-0 z-40 w-full transition-colors',
        scrolled ? 'bg-white shadow-md' : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6">
        <a
          href="#home"
          className={cn('font-display text-2xl font-bold', scrolled ? 'text-ink' : 'text-white')}
        >
          {BRAND}
        </a>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden items-center lg:flex">
          <ul className="flex items-center">
            {NAV_LINKS.map((item) =>
              item.children ? (
                <DesktopDropdown key={item.label} item={item} />
              ) : (
                <li key={item.label}>
                  <a
                    href={`#${item.label.toLowerCase()}`}
                    className={cn('px-3 py-2 text-sm transition-colors', linkClass)}
                  >
                    {item.label}
                  </a>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <a
            href="#contact"
            className={cn('flex items-center gap-2 text-sm transition-colors', linkClass)}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {PHONE}
          </a>
        </div>

        {/* Mobile trigger */}
        <button
          type="button"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
          className={cn(
            'flex h-10 w-10 items-center justify-center lg:hidden',
            scrolled ? 'text-ink' : 'text-white',
          )}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile panel (rendered only while open) */}
      {mobileOpen && (
        <nav
          aria-label="Mobile navigation"
          className={cn(
            'border-t px-6 pb-6 pt-2 lg:hidden',
            scrolled ? 'border-black/10 bg-white' : 'border-white/10 bg-ink',
          )}
        >
          <ul className="flex flex-col">
            {NAV_LINKS.map((item) => (
              <li key={item.label} className="py-1">
                <a
                  href={`#${item.label.toLowerCase()}`}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    'block py-1.5 text-sm font-medium',
                    scrolled ? 'text-ink/80 hover:text-ink' : 'text-white/80 hover:text-white',
                  )}
                >
                  {item.label}
                </a>
                {item.children?.map((child) => (
                  <ul key={child.label} className="pl-4">
                    <li>
                      <a
                        href="#destination"
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          'block py-1.5 text-sm',
                          scrolled
                            ? 'text-ink/60 hover:text-ink'
                            : 'text-white/60 hover:text-white',
                        )}
                      >
                        {child.label}
                      </a>
                    </li>
                    {child.children?.map((sub) => (
                      <li key={sub.label}>
                        <a
                          href="#destination"
                          onClick={() => setMobileOpen(false)}
                          className={cn(
                            'block py-1.5 pl-4 text-sm',
                            scrolled
                              ? 'text-ink/50 hover:text-ink'
                              : 'text-white/50 hover:text-white',
                          )}
                        >
                          {sub.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                ))}
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className={cn(
                  'flex items-center gap-2 text-sm',
                  scrolled ? 'text-ink/70' : 'text-white/70',
                )}
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {PHONE}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
