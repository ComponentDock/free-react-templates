import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { ShowcaseSection } from './section'

const DROPDOWN_ITEMS = ['Action', 'Another action', 'Something else here']

const NAV_PREVIEWS = [
  {
    id: 'primary',
    brand: 'Primary',
    accent: 'text-primary-600',
    links: ['Discover (current)', 'Profile', 'Settings'],
    dropdown: [] as string[],
    align: 'start',
  },
  {
    id: 'success',
    brand: 'Success',
    accent: 'text-success',
    links: ['Discover', 'Profile'],
    dropdown: DROPDOWN_ITEMS,
    align: 'start',
  },
  {
    id: 'info',
    brand: 'Info',
    accent: 'text-info',
    links: ['Discover', 'Profile', 'Settings'],
    dropdown: [] as string[],
    align: 'center',
  },
  {
    id: 'warning',
    brand: 'Warning',
    accent: 'text-warning',
    links: ['Discover', 'Settings'],
    dropdown: DROPDOWN_ITEMS,
    align: 'center',
  },
  {
    id: 'danger',
    brand: 'Danger',
    accent: 'text-danger',
    links: ['Discover', 'Profile', 'Settings'],
    dropdown: [] as string[],
    align: 'start',
  },
  {
    id: 'dark',
    brand: 'Dark',
    accent: 'text-heading',
    links: ['Discover', 'Profile'],
    dropdown: DROPDOWN_ITEMS,
    align: 'start',
  },
  {
    id: 'background',
    brand: 'Background image',
    accent: 'text-white',
    links: ['Discover', 'Profile', 'Settings'],
    dropdown: [] as string[],
    align: 'start',
  },
]

export function NavigationsShowcase() {
  const [openPreview, setOpenPreview] = useState<string | null>(null)

  return (
    <ShowcaseSection id="navigations" title="Navigations">
      {NAV_PREVIEWS.map(({ id, brand, accent, links, dropdown, align }) => (
        <nav
          key={id}
          aria-label={`${brand} navigation`}
          className={cn(
            'flex flex-wrap items-center gap-6 rounded border border-gray-100 px-5 py-3',
            align === 'center' ? 'justify-center' : 'justify-between',
            id === 'background' ? 'bg-heading' : 'bg-white',
          )}
        >
          <span className={cn('text-lg', accent)}>{brand}</span>
          <div className="flex flex-wrap items-center gap-4">
            {links.map((label) => (
              <a
                key={`${id}-${label}`}
                href="#navigations"
                className="text-sm text-body hover:text-primary-600"
              >
                {label}
              </a>
            ))}
            {dropdown.length > 0 && (
              <div className="relative">
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={openPreview === id}
                  onClick={() => setOpenPreview(openPreview === id ? null : id)}
                  className="flex cursor-pointer items-center gap-1 text-sm text-body"
                >
                  {brand} menu
                  <ChevronDown className="h-3 w-3" aria-hidden="true" />
                </button>
                {openPreview === id && (
                  <div className="absolute right-0 top-full z-10 mt-1 w-52 rounded bg-white py-2 shadow-lg">
                    <p className="px-4 py-2 text-xs uppercase tracking-wide text-gray-400">
                      Dropdown header
                    </p>
                    {dropdown.map((item) => (
                      <a
                        key={`${id}-${item}`}
                        href="#navigations"
                        className="block px-4 py-2 text-sm text-body hover:bg-light"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </nav>
      ))}
    </ShowcaseSection>
  )
}
