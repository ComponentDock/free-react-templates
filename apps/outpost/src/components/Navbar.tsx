import { useEffect, useState } from 'react'
import { Box, ChevronDown, Menu, Search, X } from 'lucide-react'
import { ButtonLink, cn } from '@free-react-templates/ui'

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
  { label: 'Packages', href: '#packages' },
  {
    label: 'Pages',
    href: '#services',
    children: [
      { label: 'About', href: '#services' },
      { label: 'Book trip', href: '#newsletter' },
      { label: 'Elements', href: '#places' },
    ],
  },
  {
    label: 'Blog',
    href: '#blog',
    children: [
      { label: 'Blog', href: '#blog' },
      { label: 'Blog Details', href: '#newsletter' },
    ],
  },
  { label: 'Contact', href: '#contact' },
]

const LINK_CLASS =
  'block text-[12px] font-semibold uppercase tracking-[1px] text-white transition-colors hover:text-brand'

/* Transparent header over the hero: cube wordmark, uppercase white links with
   two hover/click dropdowns, an outlined "Book a Trip" button, a search
   toggle opening an overlay, and a hamburger panel on mobile. Scrolling past
   the hero fixes a black bar with a soft shadow. */
export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      data-variant={scrolled ? 'solid' : 'transparent'}
      className={cn(
        'inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'fixed bg-ink py-[10px] shadow-[0px_3px_16px_rgba(0,0,0,0.1)]'
          : 'absolute bg-transparent',
      )}
    >
      <div className="mx-auto flex max-w-[1140px] items-center justify-between gap-6 px-4">
        <a href="#home" className="flex items-center gap-2 text-[24px] font-bold text-white">
          <Box className="h-6 w-6" aria-hidden="true" />
          outpost
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-[45px]">
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
                      <ul className="absolute left-0 top-full w-[200px] bg-white shadow-[0px_3px_16px_rgba(0,0,0,0.1)]">
                        {item.children.map((child) => (
                          <li
                            key={child.label}
                            className="border-b border-hairline last:border-b-0"
                          >
                            <a
                              href={child.href}
                              className="block px-5 py-3 text-[12px] font-medium uppercase tracking-[1px] text-body transition-colors hover:bg-brand hover:text-white"
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

        <div className="flex items-center gap-5">
          <ButtonLink
            href="#newsletter"
            className="hidden rounded-none border border-white bg-transparent px-[28px] py-[7px] text-[12px] font-semibold uppercase tracking-[1px] text-white hover:border-brand hover:bg-transparent hover:text-brand sm:inline-flex"
          >
            Book a Trip
          </ButtonLink>
          <button
            type="button"
            aria-label="Toggle search"
            aria-expanded={searchOpen}
            aria-controls="outpost-search-panel"
            onClick={() => setSearchOpen((previous) => !previous)}
            className="text-white transition-colors hover:text-brand focus-visible:ring-2 focus-visible:ring-brand"
          >
            <Search className="h-[18px] w-[18px]" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="outpost-menu"
            onClick={() => setOpen((previous) => !previous)}
            className="text-white transition-colors hover:text-brand focus-visible:ring-2 focus-visible:ring-brand lg:hidden"
          >
            {open ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {searchOpen ? (
        <div id="outpost-search-panel" className="border-t border-hairline bg-white px-4 py-6">
          <form
            className="mx-auto flex max-w-[1140px] items-center gap-3"
            onSubmit={(event) => event.preventDefault()}
          >
            <label htmlFor="outpost-search" className="sr-only">
              Search
            </label>
            <input
              id="outpost-search"
              name="q"
              type="search"
              placeholder="Search Here"
              className="h-12 w-full border border-hairline px-4 text-ink outline-none focus:border-brand"
            />
            <button
              type="submit"
              className="brand-gradient h-12 shrink-0 px-6 text-[12px] font-semibold uppercase tracking-[1px] text-white"
            >
              Search
            </button>
            <button
              type="button"
              aria-label="Close search"
              onClick={() => setSearchOpen(false)}
              className="shrink-0 text-body transition-colors hover:text-brand"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </form>
        </div>
      ) : null}

      {open ? (
        <nav
          id="outpost-menu"
          aria-label="Mobile"
          className="max-h-[340px] overflow-y-auto border-t border-white/10 bg-black/95 lg:hidden"
        >
          <ul className="mx-auto max-w-[1140px] px-4 py-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.label} className="border-b border-hairline/20 last:border-b-0">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-[12px] text-[12px] font-semibold uppercase tracking-[1px] text-white hover:text-brand"
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
                          className="block py-2 pl-4 text-[12px] text-white/80 hover:text-brand"
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
