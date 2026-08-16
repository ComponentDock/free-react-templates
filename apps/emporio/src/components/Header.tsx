import { useState } from 'react'
import { Menu, Search, ShoppingBag, ShoppingCart, User, X } from 'lucide-react'
import {
  accountLinks,
  brandName,
  cartCount,
  navItems,
  promoLine,
  socials,
  topBarLinks,
} from '../data'
import { SocialIcon } from './social-icons'

/* Reference: .header-area — white utility top bar (hidden on mobile) with
   account links + five social icons, a sticky white main bar with the
   "Emporio" wordmark (red shopping-bag mark), centered nav (Pages/Blog
   dropdowns, red "New" badge on Baby Collection) and right icon links, and
   a dark promo strip with a "Shop Now" link. */
export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  return (
    <header>
      <div className="hidden border-b border-line-soft bg-white sm:block">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between px-4 py-2 text-sm">
          <ul className="flex gap-6">
            {topBarLinks.map((label) => (
              <li key={label}>
                <a href="#home" className="text-copy transition-colors hover:text-brand">
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-6">
            {accountLinks.map((label) => (
              <a key={label} href="#home" className="text-copy transition-colors hover:text-brand">
                {label}
              </a>
            ))}
            <ul className="flex gap-3">
              {socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    aria-label={social.name}
                    className="text-copy transition-colors hover:text-brand"
                  >
                    <SocialIcon name={social.name} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-b border-line-soft bg-white">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between px-4 py-[15px]">
          <a
            href="#home"
            className="flex items-center gap-2 font-heading text-[28px] font-semibold text-charcoal"
          >
            <ShoppingBag className="text-brand" aria-hidden="true" />
            {brandName}
          </a>
          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(item.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  {item.children ? (
                    <>
                      <button
                        type="button"
                        aria-expanded={openMenu === item.label}
                        aria-haspopup="true"
                        onFocus={() => setOpenMenu(item.label)}
                        onBlur={() => setOpenMenu(null)}
                        className="flex items-center gap-1 py-2 font-heading text-base font-semibold text-charcoal transition-colors hover:text-brand"
                      >
                        {item.label}
                      </button>
                      {openMenu === item.label && (
                        <ul className="absolute top-full left-0 z-50 w-48 border border-line-soft bg-white py-2 shadow-lg">
                          {item.children.map((child) => (
                            <li key={child.label}>
                              <a
                                href={child.href}
                                className="block px-4 py-2 text-sm text-copy transition-colors hover:bg-blog hover:text-brand"
                              >
                                {child.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className="flex items-center gap-1 py-2 font-heading text-base font-semibold text-charcoal transition-colors hover:text-brand"
                    >
                      {item.label}
                      {item.badge && (
                        <span className="rounded bg-brand px-1.5 py-0.5 text-[9px] font-medium text-white">
                          {item.badge}
                        </span>
                      )}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-5">
            <button
              type="button"
              aria-label="Search"
              className="text-charcoal transition-colors hover:text-brand"
            >
              <Search aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Account"
              className="text-charcoal transition-colors hover:text-brand"
            >
              <User aria-hidden="true" />
            </button>
            <a
              href="#pages"
              aria-label={`Cart, ${cartCount} items`}
              className="relative text-charcoal transition-colors hover:text-brand"
            >
              <ShoppingCart aria-hidden="true" />
              <span className="absolute -top-2 -right-2 grid h-4 w-4 place-items-center rounded-full bg-brand text-[10px] font-medium text-white">
                {cartCount}
              </span>
            </a>
            <button
              type="button"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((value) => !value)}
              className="lg:hidden"
            >
              <Menu aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-charcoal py-3 text-center text-sm text-white">
        {promoLine}{' '}
        <a
          href="#trending"
          className="ml-2 font-heading font-medium text-brand underline-offset-4 hover:underline"
        >
          Shop Now
        </a>
      </div>

      {mobileOpen && (
        <nav
          aria-label="Mobile navigation"
          className="fixed inset-0 z-[150] overflow-y-auto bg-white px-6 py-6"
        >
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 font-heading text-[24px] font-semibold text-charcoal">
              <ShoppingBag className="text-brand" aria-hidden="true" />
              {brandName}
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="text-charcoal"
            >
              <X aria-hidden="true" />
            </button>
          </div>
          <ul className="mt-8 space-y-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 font-heading text-xl font-medium text-charcoal"
                >
                  {item.label}
                  {item.badge && (
                    <span className="rounded bg-brand px-1.5 py-0.5 text-[9px] font-medium text-white">
                      {item.badge}
                    </span>
                  )}
                </a>
                {item.children && (
                  <ul className="mt-2 space-y-2 border-l-2 border-blog pl-4">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block text-base text-copy hover:text-brand"
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
