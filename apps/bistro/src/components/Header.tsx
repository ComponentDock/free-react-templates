import { useState } from 'react'
import { ChevronDown, Menu, UtensilsCrossed, X } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { BLOG_MENU, NAV_LINKS } from '../data'

/**
 * Header — sticky white bar (logo left, nav right, outlined "Order Online"
 * button far right; source `.header-area` + `.sticky-bar`). Nav collapses into
 * a toggleable mobile menu below lg with `aria-expanded` per repo a11y
 * conventions.
 */
export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4">
        <a
          href="#home"
          className="flex items-center gap-2 font-display text-2xl font-semibold text-ink"
        >
          <UtensilsCrossed className="h-7 w-7 text-brand" aria-hidden="true" />
          Bistro
        </a>

        {/* Desktop nav — hidden below lg. */}
        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) =>
            link.label === BLOG_MENU.label ? (
              <div key={link.label} className="group relative">
                <a
                  href={link.href}
                  className="flex items-center gap-1 text-[15px] font-medium text-ink transition-colors hover:text-brand"
                >
                  {link.label}
                  <ChevronDown className="h-4 w-4" aria-hidden="true" />
                </a>
                <div className="invisible absolute left-0 top-full z-20 min-w-40 rounded-md border border-gray-100 bg-white py-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                  {BLOG_MENU.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="block px-4 py-2 text-sm text-navy transition-colors hover:text-brand"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-[15px] font-medium text-ink transition-colors hover:text-brand"
              >
                {link.label}
              </a>
            ),
          )}
          <ButtonLink
            href="#booking"
            variant="outline"
            className="border-brand text-brand hover:bg-brand hover:text-white"
          >
            Order Online
          </ButtonLink>
        </nav>

        {/* Mobile toggle. */}
        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
          className="rounded-md p-2 text-ink transition-colors hover:bg-mist lg:hidden"
        >
          {open ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile menu panel. */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-gray-100 bg-white px-4 pb-6 pt-3 lg:hidden"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-[15px] font-medium text-ink transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
          {BLOG_MENU.children.map((child) => (
            <a
              key={child.label}
              href={child.href}
              onClick={() => setOpen(false)}
              className="block py-2 pl-4 text-[15px] text-navy transition-colors hover:text-brand"
            >
              {child.label}
            </a>
          ))}
          <ButtonLink
            href="#booking"
            variant="outline"
            onClick={() => setOpen(false)}
            className="mt-3 border-brand text-brand hover:bg-brand hover:text-white"
          >
            Order Online
          </ButtonLink>
        </div>
      )}
    </header>
  )
}
