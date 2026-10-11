import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const LINK_CLASS = 'text-[14px] text-white/70 transition-colors duration-300 hover:text-white'

const DROPDOWN_ITEMS = [
  { label: 'Menu One' },
  { label: 'Menu Two', children: ['Sub Menu One', 'Sub Menu Two', 'Sub Menu Three'] },
  { label: 'Menu Three' },
] as const

const MOBILE_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact Us', href: '#contact' },
] as const

const MOBILE_ITEM_CLASS = 'block py-[8px] text-[14px] text-black transition-colors duration-300'

const DROPDOWN_LINK_CLASS =
  'block px-[20px] py-[6px] text-[14px] text-black transition-colors duration-300 hover:text-brand'

/* Absolute (not fixed) transparent header over the hero: the wordmark sits
   left, the links right, and the whole bar scrolls away with the hero.
   Below the lg breakpoint the links collapse into a white off-canvas panel. */
export function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState(false)

  return (
    <header className="absolute top-0 left-0 z-30 w-full py-[20px]">
      <div className="mx-auto flex max-w-[1140px] items-center justify-between px-4">
        <a href="#hero" className="font-display text-[24px] text-white">
          trekvoyage
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-[30px] lg:flex">
          <a href="#hero" className={LINK_CLASS}>
            Home
          </a>
          <div
            className="relative"
            onMouseEnter={() => setOpenMenu('Dropdown')}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button
              type="button"
              aria-expanded={openMenu === 'Dropdown'}
              onClick={() => setOpenMenu('Dropdown')}
              className={cn(LINK_CLASS, 'inline-flex items-center gap-[6px]')}
            >
              Dropdown
              <ChevronDown className="h-[14px] w-[14px]" aria-hidden="true" />
            </button>
            {openMenu === 'Dropdown' ? (
              <ul className="dropdown-shadow absolute top-full left-0 min-w-[180px] bg-white py-[10px]">
                <li className="px-[20px] py-[6px] text-[14px] font-bold text-black">Elements</li>
                {DROPDOWN_ITEMS.map((item) => (
                  <li key={item.label}>
                    {'children' in item ? (
                      <>
                        <button
                          type="button"
                          className={DROPDOWN_LINK_CLASS}
                          onClick={() => setOpenGroup(true)}
                        >
                          {item.label}
                        </button>
                        {openGroup ? (
                          <ul>
                            {item.children.map((child) => (
                              <li key={child}>
                                <a href="#hero" className={cn(DROPDOWN_LINK_CLASS, 'pl-[40px]')}>
                                  {child}
                                </a>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </>
                    ) : (
                      <a href="#hero" className={DROPDOWN_LINK_CLASS}>
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          <a href="#services" className={LINK_CLASS}>
            Services
          </a>
          <a href="#about" className={LINK_CLASS}>
            About
          </a>
          <a href="#contact" className={LINK_CLASS}>
            Contact Us
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white lg:hidden"
        >
          <Menu className="h-[26px] w-[26px]" aria-hidden="true" />
        </button>
      </div>

      {mobileOpen ? (
        <div
          id="mobile-navigation"
          className="panel-shadow fixed top-0 right-0 z-50 h-full w-[300px] overflow-y-auto bg-white px-[30px] py-[40px] lg:hidden"
        >
          <button
            type="button"
            aria-label="Close navigation"
            onClick={() => setMobileOpen(false)}
            className="ml-auto block text-black"
          >
            <X className="h-[24px] w-[24px]" aria-hidden="true" />
          </button>
          <ul className="mt-[20px]">
            <li>
              <a href="#hero" className={cn(MOBILE_ITEM_CLASS, 'hover:text-brand')}>
                Home
              </a>
            </li>
            <li>
              <button
                type="button"
                aria-expanded={openGroup}
                onClick={() => setOpenGroup(!openGroup)}
                className="flex w-full items-center justify-between py-[8px] text-left text-[14px] text-black transition-colors duration-300 hover:text-brand"
              >
                Dropdown
                <ChevronDown
                  aria-hidden="true"
                  className={cn(
                    'h-[20px] w-[20px] rounded-full border border-panel p-[3px]',
                    openGroup && 'rotate-180',
                  )}
                />
              </button>
              <ul>
                <li>
                  <span className="block py-[8px] pl-[20px] text-[14px] text-black">Menu One</span>
                </li>
                <li>
                  <span className="block py-[8px] pl-[20px] text-[14px] text-black">Menu Two</span>
                  <ul>
                    {['Sub Menu One', 'Sub Menu Two', 'Sub Menu Three'].map((child) => (
                      <li key={child}>
                        <a
                          href="#hero"
                          className={cn(MOBILE_ITEM_CLASS, 'pl-[40px] hover:text-brand')}
                        >
                          {child}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <span className="block py-[8px] pl-[20px] text-[14px] text-black">
                    Menu Three
                  </span>
                </li>
              </ul>
            </li>
            {MOBILE_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} className={cn(MOBILE_ITEM_CLASS, 'hover:text-brand')}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  )
}
