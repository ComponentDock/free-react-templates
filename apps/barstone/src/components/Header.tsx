import { useState } from 'react'
import { ChevronDown, Menu, Scale, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { blogMenu, headerCta, navLinks, siteName } from '../data'

const navItemClass =
  'block px-[25px] py-[38px] text-[16px] text-black transition-colors hover:text-gold'

/** 88px transparent header floating on the hero's cream band; 40px with a drawer on mobile. */
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-[40px] max-w-[1140px] items-center justify-between px-4 lg:h-[88px]">
        <a
          href="#top"
          className="flex items-center gap-2 font-serif text-[26px] leading-none text-gold lg:text-[28px]"
        >
          <Scale aria-hidden="true" className="size-6 lg:size-7" />
          {siteName}
        </a>

        <nav aria-label="Main" className="hidden items-center lg:flex">
          <ul className="flex items-center">
            {navLinks.map((link) => (
              <li
                key={link.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(link.label)}
                onMouseLeave={() => setOpenMenu(null)}
                onFocus={() => setOpenMenu(link.label)}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                    setOpenMenu(null)
                  }
                }}
              >
                <a
                  href={link.href}
                  aria-current={link.href === '#top' ? 'page' : undefined}
                  className={cn(navItemClass, 'flex items-center gap-1 capitalize')}
                >
                  {link.label}
                  {link.children ? (
                    <ChevronDown aria-hidden="true" className="size-4 text-gold" />
                  ) : null}
                </a>

                {link.children && openMenu === link.label ? (
                  <ul
                    aria-label="Blog"
                    className="absolute top-full left-0 w-[180px] rounded-[8px] bg-white py-2 shadow-[0_10px_30px_rgba(22,29,34,0.15)]"
                  >
                    {link.children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={child.href}
                          className="block px-5 py-2 text-[15px] text-[#8a8a8a] hover:text-gold"
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

          <a
            href={headerCta.href}
            className="ml-6 rounded-[50px] border border-hairline bg-white px-[41px] py-[9px] text-[16px] text-gold transition-colors hover:border-gold hover:bg-gold hover:text-white"
          >
            {headerCta.label}
          </a>
        </nav>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="barstone-menu"
          aria-label="Menu"
          onClick={() => {
            setMenuOpen((open) => !open)
          }}
          className="flex size-[33px] items-center justify-center text-ink lg:hidden"
        >
          {menuOpen ? (
            <X aria-hidden="true" className="size-6" />
          ) : (
            <Menu aria-hidden="true" className="size-6" />
          )}
        </button>
      </div>

      {menuOpen ? (
        <nav id="barstone-menu" aria-label="Mobile" className="bg-white lg:hidden">
          <ul>
            {navLinks.map((link) => (
              <li key={`mobile-${link.label}`}>
                <a
                  href={link.href}
                  onClick={() => {
                    setMenuOpen(false)
                  }}
                  className="block border-b border-hairline px-5 py-4 text-[16px] capitalize"
                >
                  {link.label}
                </a>
              </li>
            ))}
            {blogMenu.map((child) => (
              <li key={`mobile-child-${child.label}`}>
                <a
                  href={child.href}
                  onClick={() => {
                    setMenuOpen(false)
                  }}
                  className="block border-b border-hairline px-8 py-3 text-[15px] text-[#8a8a8a]"
                >
                  {child.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
