import { useState } from 'react'
import { ChevronDown, Search } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { Band } from './Band'

interface BarVariant {
  id: string
  classes: string
  shadow: string
  search: boolean
}

const BARS: BarVariant[] = [
  {
    id: 'primary',
    classes: 'bg-kit-primary text-white',
    shadow: 'shadow-bar-primary',
    search: false,
  },
  {
    id: 'success',
    classes: 'bg-kit-success text-white',
    shadow: 'shadow-bar-success',
    search: false,
  },
  { id: 'info', classes: 'bg-kit-info text-white', shadow: 'shadow-bar-info', search: false },
  { id: 'danger', classes: 'bg-kit-danger text-white', shadow: 'shadow-bar-danger', search: false },
  {
    id: 'secondary',
    classes: 'bg-kit-secondary text-white',
    shadow: 'shadow-bar-secondary',
    search: false,
  },
  {
    id: 'transparent',
    classes: 'border border-white/40 bg-transparent text-white',
    shadow: '',
    search: true,
  },
]

const LINKS = ['Home', 'Features', 'Pricing']

const DROPDOWN_ITEMS = ['Action', 'Another action', 'Something else here']

export function NavbarShowcase() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <Band
      title="Navbar"
      lead="The kit's responsive navbar demos: tinted dark bars with brand, links, a dropdown, and a search treatment."
    >
      <div className="space-y-4">
        {BARS.map((bar) => (
          <nav
            key={bar.id}
            aria-label={`${bar.id} navbar demo`}
            className={cn(
              'flex flex-wrap items-center justify-between gap-4 px-4 py-2',
              bar.classes,
              bar.shadow,
            )}
          >
            <span className="text-[1.25rem] font-normal text-white">Brand</span>

            <ul className="flex flex-wrap items-center">
              {LINKS.map((link) => (
                <li key={link}>
                  <a
                    href="#start"
                    className="block px-2.5 py-4 text-[0.8rem] font-normal tracking-wide text-white uppercase hover:bg-white/20"
                  >
                    {link}
                  </a>
                </li>
              ))}
              <li>
                <span className="block px-2.5 py-4 text-[0.8rem] font-normal tracking-wide text-white/50 uppercase">
                  Disabled
                </span>
              </li>
              <li className="relative">
                <button
                  type="button"
                  aria-expanded={openDropdown === bar.id}
                  onClick={() => setOpenDropdown(openDropdown === bar.id ? null : bar.id)}
                  className="flex cursor-pointer items-center gap-1 px-2.5 py-4 text-[0.8rem] font-normal tracking-wide text-white uppercase hover:bg-white/20"
                >
                  Dropdown link
                  <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
                {openDropdown === bar.id ? (
                  <ul className="absolute z-20 mt-0 min-w-[12rem] rounded bg-white py-2 text-[0.8rem] shadow-kit-menu">
                    {DROPDOWN_ITEMS.map((item) => (
                      <li key={item}>
                        <button
                          type="button"
                          onClick={() => setOpenDropdown(null)}
                          className="block w-full cursor-pointer px-4 py-1.5 text-left text-body hover:bg-band"
                        >
                          {item}
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            </ul>

            {bar.search ? (
              <form
                role="search"
                onSubmit={(event) => event.preventDefault()}
                className="flex items-center gap-2"
              >
                <label htmlFor="modkit-navbar-search" className="sr-only">
                  Search
                </label>
                <input
                  id="modkit-navbar-search"
                  type="search"
                  placeholder="Search"
                  className="border-b border-white bg-transparent px-1 py-1 text-[0.9rem] text-white outline-none placeholder:text-white/80"
                />
                <button
                  type="submit"
                  aria-label="Search"
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white text-kit-dark"
                >
                  <Search className="h-4 w-4" aria-hidden="true" />
                </button>
              </form>
            ) : null}
          </nav>
        ))}
      </div>
    </Band>
  )
}
