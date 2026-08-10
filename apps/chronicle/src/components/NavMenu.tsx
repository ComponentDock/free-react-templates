import { ChevronDown, Search, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { navItems, searchPlaceholder, subMenuLinks } from '../data'

interface NavMenuProps {
  menuOpen: boolean
  onClose: () => void
}

export function NavMenu({ menuOpen, onClose }: NavMenuProps) {
  return (
    <>
      <nav aria-label="Main" className="hidden border-b border-black/10 bg-white lg:block">
        <ul className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-6">
          {navItems.map((item) => (
            <li key={item.label} className="group relative">
              <a
                href="#"
                className={cn(
                  'inline-flex items-center gap-1 px-4 py-3 text-base text-ink transition-colors hover:text-brand',
                  item.active && 'text-brand',
                )}
              >
                {item.label}
                {item.dropdown && <ChevronDown className="h-4 w-4" aria-hidden="true" />}
              </a>
              {item.dropdown && (
                <div className="invisible absolute top-full left-0 z-30 w-48 bg-white opacity-0 shadow-[0_15px_30px_0_rgba(0,0,0,0.05)] transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  {item.dropdown.map((label) => (
                    <div key={label} className="group/sub relative">
                      <a
                        href="#"
                        className="block px-4 py-2.5 text-sm text-ink transition-colors hover:bg-tile hover:text-brand"
                      >
                        {label}
                      </a>
                      {label === 'Menu Two' && item.label === 'Categories' && (
                        <div className="invisible absolute top-0 left-full w-48 bg-white opacity-0 shadow-[0_15px_30px_0_rgba(0,0,0,0.05)] transition-all duration-150 group-hover/sub:visible group-hover/sub:opacity-100 group-focus-within/sub:visible group-focus-within/sub:opacity-100">
                          {subMenuLinks.map((sub) => (
                            <a
                              key={sub}
                              href="#"
                              className="block px-4 py-2.5 text-sm text-ink transition-colors hover:bg-tile hover:text-brand"
                            >
                              {sub}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {menuOpen && (
        <aside
          aria-label="Menu"
          className="fixed top-0 right-0 z-50 flex h-full w-[360px] max-w-full flex-col overflow-y-auto bg-white p-8 shadow-xl lg:hidden"
        >
          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="mb-8 flex h-10 w-10 items-center justify-center self-end text-ink transition-colors hover:text-brand"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href="#"
                  className={cn(
                    'block py-2 text-base text-ink transition-colors hover:text-brand',
                    item.active && 'text-brand',
                  )}
                >
                  {item.label}
                </a>
                {item.dropdown && (
                  <>
                    {item.dropdown.map((label) => (
                      <a
                        key={label}
                        href="#"
                        className="block py-1.5 pl-4 text-sm text-meta/70 transition-colors hover:text-brand"
                      >
                        {label}
                      </a>
                    ))}
                    {subMenuLinks.map((label) => (
                      <a
                        key={label}
                        href="#"
                        className="block py-1.5 pl-4 text-sm text-meta/70 transition-colors hover:text-brand"
                      >
                        {label}
                      </a>
                    ))}
                  </>
                )}
              </li>
            ))}
          </ul>
          <form
            role="search"
            aria-label="Mobile search"
            onSubmit={(event) => event.preventDefault()}
            className="mt-8 border-t border-black/10 pt-8"
          >
            <label htmlFor="mobile-search" className="sr-only">
              Search
            </label>
            <div className="flex items-center gap-2 border-2 border-tile px-3">
              <Search className="h-4 w-4 text-meta/70" aria-hidden="true" />
              <input
                id="mobile-search"
                type="search"
                placeholder={searchPlaceholder}
                className="h-[45px] w-full bg-transparent text-base text-ink placeholder:text-meta/70 focus:outline-none"
              />
            </div>
          </form>
        </aside>
      )}
    </>
  )
}
