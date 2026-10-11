import { useState } from 'react'
import { ChevronDown, Heart } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { ShowcaseSection, SubHeading } from './section'

const MENU_LINKS = [
  { label: 'Discover (current)', href: '#menus', current: true },
  { label: 'Profile', href: '#menus', current: false },
  { label: 'Settings', href: '#menus', current: false },
]

const ICON_MENU_ITEMS = [
  { label: 'Action', separated: false },
  { label: 'Another action', separated: false },
  { label: 'Something else here', separated: false },
  { label: 'Separated link', separated: true },
  { label: 'One more separated link', separated: true },
]

export function MenusShowcase() {
  const [open, setOpen] = useState(false)

  return (
    <ShowcaseSection id="menus" title="Menu">
      <div className="space-y-4">
        <SubHeading>Menu</SubHeading>
        <div className="flex flex-wrap items-center gap-6 rounded border border-gray-100 px-4 py-3">
          <span className="text-lg text-heading">Menu</span>
          {MENU_LINKS.map(({ label, href, current }) => (
            <a
              key={label}
              href={href}
              className={cn('text-sm', current ? 'text-primary-600' : 'text-body')}
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <SubHeading>Menu with Icons</SubHeading>
        <div className="relative inline-block">
          <button
            type="button"
            aria-haspopup="true"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="flex cursor-pointer items-center gap-2 rounded bg-primary-600 px-4 py-2 text-sm text-white shadow-material"
          >
            <Heart className="h-4 w-4" aria-hidden="true" />
            Menu
            <ChevronDown className="h-3 w-3" aria-hidden="true" />
          </button>
          {open && (
            <div className="absolute left-0 top-full z-10 mt-1 w-56 rounded bg-white py-2 shadow-lg">
              <p className="px-4 py-2 text-xs uppercase tracking-wide text-gray-400">
                Dropdown header
              </p>
              {ICON_MENU_ITEMS.map(({ label, separated }) => (
                <a
                  key={label}
                  href="#menus"
                  className={cn(
                    'block px-4 py-2 text-sm text-body hover:bg-light',
                    separated ? 'border-t border-gray-100' : '',
                  )}
                >
                  {label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </ShowcaseSection>
  )
}
