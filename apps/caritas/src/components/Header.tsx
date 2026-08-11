import { useState } from 'react'
import { ChevronDown, Menu } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { NAV_LINKS } from '../data'

/* header.main_menu — transparent over the hero photo: logo left, nav links
   (Pages + blog carry dropdowns), white-bordered "learn more" button right
   (.main_menu .btn_2: transparent bg, 1px #fff border, white text).
   ≤992px: hamburger toggle (aria-expanded) + collapsible panel. */
export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const toggleDropdown = (label: string) => {
    setOpenDropdown((current) => (current === label ? null : label))
  }

  const linkClass = (active?: boolean) =>
    cn(
      'inline-block px-4 py-2 text-[15px] font-medium capitalize text-white transition-colors hover:text-brand-pink',
      active && 'text-brand-pink',
    )

  return (
    <header className="absolute top-0 left-0 z-10 w-full">
      <div className="mx-auto flex max-w-6xl items-center px-4 py-5">
        <a href="#home" className="text-[26px] font-bold text-white">
          Caritas
        </a>

        {/* Desktop nav — hidden on ≤992px. */}
        <nav aria-label="Main" className="ml-auto hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div key={link.label} className="relative">
                <button
                  type="button"
                  aria-expanded={openDropdown === link.label}
                  onClick={() => toggleDropdown(link.label)}
                  className={cn(linkClass(link.active), 'flex cursor-pointer items-center gap-1')}
                >
                  {link.label}
                  <ChevronDown aria-hidden="true" className="h-4 w-4" />
                </button>
                {openDropdown === link.label && (
                  <ul className="absolute top-full left-0 min-w-40 bg-white py-2 shadow-lg">
                    {link.children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={child.href}
                          className="block px-4 py-2 text-[15px] text-gray-700 transition-colors hover:text-brand"
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                aria-current={link.active ? 'page' : undefined}
                className={linkClass(link.active)}
              >
                {link.label}
              </a>
            ),
          )}
          <a
            href="#contact"
            aria-label="Learn More"
            className="ml-4 inline-block border border-white bg-transparent px-[39px] py-[10.5px] text-[16px] font-bold uppercase text-white transition-all duration-300 hover:border-transparent hover:bg-[linear-gradient(to_left,#7f00ff_0%,#e100ff_50%,#7f00ff_100%)]"
          >
            Learn More
          </a>
        </nav>

        {/* Mobile toggle — hidden on desktop. */}
        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((current) => !current)}
          className="ml-auto flex cursor-pointer items-center gap-1 border border-white/40 px-3 py-1 text-white lg:hidden"
        >
          <Menu aria-hidden="true" className="h-4 w-4" />
          <span className="text-sm uppercase tracking-wide">Menu</span>
        </button>
      </div>

      {/* Mobile panel — rendered only while open; dropdown children are
          shown inline, expanded. */}
      {mobileOpen && (
        <nav aria-label="Mobile" className="bg-[#2b0a45]/95 backdrop-blur lg:hidden">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block border-t border-white/10 px-5 py-3 text-[16px] font-medium capitalize text-white"
                >
                  {link.label}
                </a>
                {link.children && (
                  <ul>
                    {link.children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block border-t border-white/5 px-10 py-2 text-[15px] text-white/70"
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="block border-t border-white/10 px-5 py-3 text-[16px] font-bold uppercase text-brand-pink"
              >
                Learn More
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
