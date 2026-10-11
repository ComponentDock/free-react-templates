import { useEffect, useState } from 'react'
import { ChevronDown, MapPin, Menu, Phone, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { BUTTON_CLASS, BUTTON_SOLID } from '../lib/buttonStyles'

interface NavChild {
  label: string
  href: string
}

interface NavItem {
  label: string
  href: string
  children?: readonly NavChild[]
}

const NAV_ITEMS: readonly NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Events', href: '#events' },
  { label: 'About', href: '#about' },
  {
    label: 'Blog',
    href: '#instagram',
    children: [
      { label: 'Blog', href: '#instagram' },
      { label: 'Blog Details', href: '#testimonials' },
      { label: 'Events Details', href: '#events' },
      { label: 'Element', href: '#faq' },
    ],
  },
  { label: 'Contact', href: '#contact' },
]

const PHONE = '+10 (67) 678 2567'

const LINK_CLASS =
  'relative text-[16px] font-medium text-navy transition-colors after:absolute after:-bottom-[3px] after:left-0 after:h-[2px] after:w-0 after:bg-periwinkle after:transition-all hover:text-periwinkle hover:after:w-full'

/* White header over the hero: yellow pin wordmark, navy Josefin Sans links
   with a growing periwinkle underline (Blog opens a navy-gradient dropdown),
   and a yellow phone button. Scrolling past the hero fixes a white bar with a
   soft shadow; below the lg breakpoint the links collapse into a panel. */
export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      data-variant={scrolled ? 'sticky' : 'top'}
      className={cn(
        'inset-x-0 top-0 z-50 bg-white transition-all duration-300',
        scrolled ? 'fixed py-[10px] shadow-[0_10px_15px_rgba(0,9,94,0.08)]' : 'absolute py-[22px]',
      )}
    >
      <div className="mx-auto flex max-w-[1140px] items-center justify-between gap-6 px-4">
        <a href="#home" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-white">
            <MapPin className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="font-display text-[26px] font-bold text-navy">Wanderbug</span>
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-[42px]">
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
                      aria-expanded={openMenu === item.label}
                      onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)}
                      className={cn(LINK_CLASS, 'flex items-center gap-1')}
                    >
                      {item.label}
                      <ChevronDown className="h-3 w-3" aria-hidden="true" />
                    </button>
                    {openMenu === item.label ? (
                      <ul className="gradient-navy absolute top-full left-0 w-[190px] py-[17px] shadow-[0_0_10px_3px_rgba(0,9,94,0.08)]">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <a
                              href={child.href}
                              className="block px-[10px] py-[6px] text-[16px] text-white transition-all hover:pl-[13px] hover:text-brand"
                            >
                              {child.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </>
                ) : (
                  <a href={item.href} className={LINK_CLASS}>
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="tel:+1067678256720"
            className={cn(BUTTON_CLASS, BUTTON_SOLID, 'hidden px-[30px] py-[13px] sm:inline-flex')}
          >
            <Phone className="h-[17px] w-[17px]" aria-hidden="true" />
            {PHONE}
          </a>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="wanderbug-menu"
            onClick={() => setOpen((previous) => !previous)}
            className="text-navy transition-colors hover:text-periwinkle focus-visible:ring-2 focus-visible:ring-periwinkle lg:hidden"
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
          id="wanderbug-menu"
          aria-label="Mobile"
          className="max-h-[360px] overflow-y-auto border-t border-navy/10 bg-white lg:hidden"
        >
          <ul className="mx-auto max-w-[1140px] px-4 py-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.label} className="border-b border-navy/5 last:border-b-0">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-[12px] text-[16px] font-medium text-navy hover:text-periwinkle"
                >
                  {item.label}
                </a>
                {item.children ? (
                  <ul className="pb-2">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="block py-2 pl-4 text-[14px] text-body hover:text-periwinkle"
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
        </nav>
      ) : null}
    </header>
  )
}
