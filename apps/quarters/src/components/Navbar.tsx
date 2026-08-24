import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { BRAND_NAME, NAV_ITEMS, type NavItem } from '../data'

const navLinkClass =
  'inline-block px-5 py-7 text-[15px] font-normal tracking-[0.05em] text-white/60 transition-colors hover:text-white'

function DesktopDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false)
  return (
    <li
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      className="relative"
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        className={cn(navLinkClass, 'flex cursor-pointer items-center gap-1', open && 'text-white')}
      >
        {item.label}
        <ChevronDown aria-hidden="true" className="h-3.5 w-3.5" />
      </button>
      {open && (
        <ul className="absolute left-0 top-full min-w-[200px] bg-white py-2 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.25)]">
          {item.children?.map((child) =>
            child.children ? (
              <li key={child.label} className="group relative">
                <span className="block px-5 py-2 text-[15px] text-gray-700">{child.label}</span>
                <ul className="pl-5">
                  {child.children.map((sub) => (
                    <li key={sub.label}>
                      <a
                        href={sub.href}
                        className="block px-5 py-1.5 text-[14px] text-gray-500 transition-colors hover:text-brand"
                      >
                        {sub.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={child.label}>
                <a
                  href={child.href}
                  className="block px-5 py-2 text-[15px] text-gray-700 transition-colors hover:text-brand"
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

/* nav.site-navbar — transparent, absolute over the hero (top 1rem, z-99);
   brand "Quarters." with the trailing period in the tan; desktop links white
   at 60% idle → #fff hover/active; Apartments dropdown on hover/focus; mobile:
   hamburger opens a 300px white slide-in panel from the right. */
export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav aria-label="Main" className="absolute left-0 right-0 top-4 z-[99] w-full">
      <div className="mx-auto flex max-w-7xl items-center px-4">
        <a
          href="#home"
          className="font-heading text-[28px] font-bold uppercase tracking-wide text-white"
        >
          {BRAND_NAME}
          <span className="text-brand">.</span>
        </a>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((current) => !current)}
          className="ml-auto flex cursor-pointer items-center text-white lg:hidden"
        >
          <Menu aria-hidden="true" className="h-7 w-7" />
        </button>

        <ul className="ml-auto hidden items-center lg:flex">
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <DesktopDropdown key={item.label} item={item} />
            ) : (
              <li key={item.label}>
                <a
                  href={item.href}
                  aria-current={item.active ? 'page' : undefined}
                  className={cn(navLinkClass, item.active && 'text-white')}
                >
                  {item.label}
                </a>
              </li>
            ),
          )}
        </ul>
      </div>

      {/* Mobile slide-in panel — 300px white, shadow, close button. */}
      {mobileOpen && (
        <div
          role="dialog"
          aria-label="Mobile menu"
          className="fixed inset-y-0 right-0 z-[100] flex w-[300px] flex-col bg-white shadow-[-10px_0_20px_-10px_rgba(0,0,0,0.1)]"
        >
          <div className="flex items-center justify-between px-5 py-4">
            <a
              href="#home"
              onClick={() => setMobileOpen(false)}
              className="font-heading text-[22px] font-bold uppercase text-black"
            >
              {BRAND_NAME}
              <span className="text-brand">.</span>
            </a>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="cursor-pointer text-gray-700"
            >
              <X aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <ul className="flex flex-col px-5">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block border-b border-gray-100 py-3 text-[15px] text-gray-700 transition-colors hover:text-brand"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
