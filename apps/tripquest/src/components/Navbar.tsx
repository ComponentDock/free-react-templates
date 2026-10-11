import { useEffect, useState } from 'react'
import { ChevronDown, Menu, Plane, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { BehanceMark, DribbbleMark, FacebookMark, TwitterMark } from './BrandIcons'

interface NavChild {
  label: string
  href: string
  children?: readonly NavChild[]
}

interface NavItem {
  label: string
  href: string
  children?: readonly NavChild[]
}

const UTILITY_LINKS = [
  { label: 'Visit Us', href: '#contact' },
  { label: 'Buy Tickets', href: '#packages' },
] as const

const SOCIALS = [
  { label: 'Facebook', href: '#contact', Mark: FacebookMark },
  { label: 'Twitter', href: '#contact', Mark: TwitterMark },
  { label: 'Dribbble', href: '#contact', Mark: DribbbleMark },
  { label: 'Behance', href: '#contact', Mark: BehanceMark },
] as const

const NAV_ITEMS: readonly NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Packages', href: '#packages' },
  { label: 'Hotels', href: '#services' },
  { label: 'Insurance', href: '#services' },
  {
    label: 'Blog',
    href: '#blog',
    children: [
      { label: 'Blog Home', href: '#blog' },
      { label: 'Blog Single', href: '#blog' },
    ],
  },
  {
    label: 'Pages',
    href: '#home',
    children: [
      { label: 'Elements', href: '#services' },
      {
        label: 'Level 2',
        href: '#testimonials',
        children: [
          { label: 'Item One', href: '#destinations' },
          { label: 'Item Two', href: '#testimonials' },
        ],
      },
    ],
  },
  { label: 'Contact', href: '#contact' },
]

const NAV_LINK =
  'text-[12px] font-medium uppercase tracking-[1px] text-white transition-colors duration-300 hover:text-brand'
const SUBMENU_LINK =
  'block px-[16px] py-[7px] text-[12px] text-ink transition-colors duration-300 hover:text-brand'
const MOBILE_LINK = 'block py-[12px] text-[13px] uppercase tracking-[1px] text-white'

/* Fixed header over the hero: a translucent utility bar (contact links left,
   social marks right) above the translucent menu bar with the round logo mark
   and uppercase links — Blog and Pages open white dropdown panels, and the
   whole bar turns solid charcoal once the page scrolls past the hero. */
export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      id="header"
      data-variant={scrolled ? 'scrolled' : 'top'}
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled ? 'header-scrolled' : 'bg-transparent',
      )}
    >
      {scrolled ? null : (
        <div data-testid="utility-bar" className="hidden border-b border-white/10 lg:block">
          <div className="mx-auto flex max-w-[1140px] items-center justify-between px-4 py-[10px]">
            <ul className="flex items-center gap-[30px]">
              {UTILITY_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[12px] text-white transition-colors duration-300 hover:text-brand"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="flex items-center gap-[16px]">
              {SOCIALS.map(({ label, href, Mark }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className="inline-flex text-white transition-colors duration-300 hover:text-brand"
                  >
                    <Mark className="h-[13px] w-[13px]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div
        className={cn(
          'transition-colors duration-300',
          scrolled ? 'bg-transparent' : 'menu-translucent',
        )}
      >
        <div className="mx-auto flex max-w-[1140px] items-center justify-between gap-6 px-4 py-[14px]">
          <a href="#home" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand">
              <Plane className="h-[18px] w-[18px]" aria-hidden="true" />
            </span>
            <span className="font-display text-[22px] font-semibold lowercase text-white">
              tripquest
            </span>
          </a>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-[34px]">
              {NAV_ITEMS.map((item) => (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => {
                    if (item.children) setOpenMenu(item.label)
                  }}
                  onMouseLeave={() => {
                    if (item.children) setOpenMenu(null)
                  }}
                >
                  {item.children ? (
                    <>
                      <button
                        type="button"
                        aria-haspopup="true"
                        aria-expanded={openMenu === item.label}
                        onClick={() => setOpenMenu(item.label)}
                        className={cn(NAV_LINK, 'flex items-center gap-1')}
                      >
                        {item.label}
                        <ChevronDown className="h-3 w-3" aria-hidden="true" />
                      </button>
                      {openMenu === item.label ? (
                        <ul className="absolute top-full left-0 w-[190px] bg-white py-[10px] shadow-[0_0_30px_rgba(127,137,161,0.25)]">
                          {item.children.map((child) => (
                            <li key={child.label}>
                              <a href={child.href} className={SUBMENU_LINK}>
                                {child.label}
                              </a>
                              {child.children ? (
                                <ul className="pb-[6px]">
                                  {child.children.map((leaf) => (
                                    <li key={leaf.label}>
                                      <a href={leaf.href} className={cn(SUBMENU_LINK, 'pl-[30px]')}>
                                        {leaf.label}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              ) : null}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </>
                  ) : (
                    <a href={item.href} className={NAV_LINK}>
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="tripquest-menu"
            onClick={() => setOpen((previous) => !previous)}
            className="text-white transition-colors duration-300 hover:text-brand focus-visible:ring-2 focus-visible:ring-brand lg:hidden"
          >
            {open ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="tripquest-menu"
          aria-label="Mobile"
          className="max-h-[70vh] overflow-y-auto header-scrolled lg:hidden"
        >
          <ul className="mx-auto max-w-[1140px] px-4 py-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.label} className="border-b border-white/10 last:border-b-0">
                <a href={item.href} onClick={() => setOpen(false)} className={MOBILE_LINK}>
                  {item.label}
                </a>
                {item.children ? (
                  <ul className="pb-2">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="block py-[6px] pl-[16px] text-[12px] text-white/70"
                        >
                          {child.label}
                        </a>
                        {child.children ? (
                          <ul>
                            {child.children.map((leaf) => (
                              <li key={leaf.label}>
                                <a
                                  href={leaf.href}
                                  onClick={() => setOpen(false)}
                                  className="block py-[6px] pl-[32px] text-[12px] text-white/50"
                                >
                                  {leaf.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
