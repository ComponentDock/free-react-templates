import { useState } from 'react'
import { ChevronDown, MapPin, Menu, Search, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { CALL_US, callUsHref, NAV_LINKS } from '../data'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [blogOpen, setBlogOpen] = useState(false)

  return (
    <header>
      {/* Navy top bar: brand, nav, call-us, sign in. */}
      <div className="bg-navy text-white">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-3">
          <a href="#home" className="flex items-center gap-2 text-xl font-semibold tracking-wide">
            <MapPin className="h-5 w-5 text-brand" aria-hidden="true" />
            Landmark
          </a>

          <nav aria-label="Primary navigation" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {NAV_LINKS.map((item) => (
                <li key={item.label} className="relative">
                  {item.children ? (
                    <div className="relative">
                      <button
                        type="button"
                        aria-expanded={blogOpen}
                        aria-controls="blog-submenu"
                        onClick={() => setBlogOpen((open) => !open)}
                        className="flex items-center gap-1 px-3 py-2 text-lg transition-colors hover:text-brand"
                      >
                        {item.label}
                        <ChevronDown className="h-4 w-4" aria-hidden="true" />
                      </button>
                      {blogOpen && (
                        <ul
                          id="blog-submenu"
                          className="absolute left-0 top-full z-20 w-44 bg-white py-3 text-ink shadow-lg"
                        >
                          {item.children.map((child) => (
                            <li key={child.label}>
                              <a
                                href={child.href}
                                className="block px-4 py-2 text-[17px] text-ink transition-colors hover:bg-brand/10 hover:text-brand"
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
                      href={item.href}
                      className="block px-3 py-2 text-lg transition-colors hover:text-brand"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <a href={callUsHref} className="text-lg transition-colors hover:text-brand">
              Call Us: <span className="border-b border-dotted border-white pb-0.5">{CALL_US}</span>
            </a>
            <button
              type="button"
              className="rounded border border-white/70 px-5 py-2 text-lg transition-colors hover:border-brand hover:text-brand"
            >
              Sign In
            </button>
          </div>

          <button
            type="button"
            className="inline-flex text-white lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* Mobile menu panel (conditionally rendered). */}
        {menuOpen && (
          <nav aria-label="Mobile navigation" className="border-t border-white/15 lg:hidden">
            <ul className="px-4 py-2">
              {NAV_LINKS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-2 text-lg transition-colors hover:text-brand"
                  >
                    {item.label}
                  </a>
                  {item.children?.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      onClick={() => setMenuOpen(false)}
                      className="block py-1 pl-6 text-base text-white/80 transition-colors hover:text-brand"
                    >
                      {child.label}
                    </a>
                  ))}
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 px-4 pb-4 pt-1">
              <a href={callUsHref} className="text-lg transition-colors hover:text-brand">
                Call Us: {CALL_US}
              </a>
              <button
                type="button"
                className="rounded border border-white/70 px-5 py-2 text-left text-lg transition-colors hover:border-brand hover:text-brand"
              >
                Sign In
              </button>
            </div>
          </nav>
        )}
      </div>

      {/* White search row: keyword input + selects + Search pill. */}
      <div className="border-b border-line/50 bg-white">
        <form
          className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-3 px-4 py-4"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="relative min-w-[260px] flex-1">
            <Search
              className="absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted"
              aria-hidden="true"
            />
            <input
              type="text"
              aria-label="Enter Keyword"
              placeholder="Enter Keyword.."
              className="h-[45px] w-full rounded border border-line bg-white pl-11 pr-4 text-[15px] text-ink placeholder:text-muted"
            />
          </div>
          <label className="sr-only" htmlFor="rent-select">
            Rent
          </label>
          <select
            id="rent-select"
            className="h-[45px] rounded border border-line bg-white px-3 text-[15px] text-ink"
          >
            <option>Any rent</option>
            <option>Rent 1</option>
            <option>Rent 2</option>
            <option>Rent 3</option>
            <option>Rent 4</option>
          </select>
          <label className="sr-only" htmlFor="bed-select">
            Bed
          </label>
          <select
            id="bed-select"
            className="h-[45px] rounded border border-line bg-white px-3 text-[15px] text-ink"
          >
            <option>Any beds</option>
            <option>Bed 1</option>
            <option>Bed 2</option>
            <option>Bed 3</option>
            <option>Bed 4</option>
          </select>
          <label className="sr-only" htmlFor="bath-select">
            Bath
          </label>
          <select
            id="bath-select"
            className="h-[45px] rounded border border-line bg-white px-3 text-[15px] text-ink"
          >
            <option>Any baths</option>
            <option>Bath 1</option>
            <option>Bath 2</option>
            <option>Bath 3</option>
            <option>Bath 4</option>
          </select>
          <button
            type="submit"
            className={cn(
              'h-[45px] rounded-full bg-brand px-9 text-base font-medium text-white',
              'transition-colors hover:bg-navy',
            )}
          >
            Search
          </button>
        </form>
      </div>
    </header>
  )
}
