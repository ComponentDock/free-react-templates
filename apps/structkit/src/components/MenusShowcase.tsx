import { useState } from 'react'
import { ChevronDown, Home, Settings, User, type LucideIcon } from 'lucide-react'
import { ShowcaseSection, SubHeading } from './section'

const MENU_ITEMS = ['Discover', 'Profile', 'Settings']
const ICON_MENU_ITEMS = [
  { label: 'Discover', Icon: Home },
  { label: 'Profile', Icon: User },
  { label: 'Setting', Icon: Settings },
]

/** A vertical menu list; the current item is tinted and marked. */
function MenuList({
  title,
  items,
  current,
}: {
  title: string
  items: { label: string; Icon?: LucideIcon }[]
  current: string
}) {
  return (
    <div className="overflow-hidden rounded border border-line">
      <p className="border-b border-line bg-light px-4 py-2 font-medium text-heading">{title}</p>
      <ul>
        {items.map(({ label, Icon }) => {
          const isCurrent = label === current
          return (
            <li key={label}>
              <a
                href="#menus"
                aria-current={isCurrent ? 'true' : undefined}
                className={
                  isCurrent
                    ? 'flex items-center gap-3 bg-primary px-4 py-2 text-white'
                    : 'flex items-center gap-3 px-4 py-2 hover:bg-light'
                }
              >
                {Icon !== undefined && <Icon className="h-4 w-4" aria-hidden="true" />}
                {label}
                {isCurrent && <span className="text-white">(current)</span>}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

/** A "Dropdown header" menu: a label, items, then a divided separated link. */
function HeaderMenu() {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative inline-block">
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="flex cursor-pointer items-center gap-2 rounded border border-line px-4 py-2 hover:bg-light"
      >
        <Home className="h-4 w-4" aria-hidden="true" />
        Dropdown header
        <ChevronDown className="h-3 w-3" aria-hidden="true" />
      </button>
      {open && (
        <ul className="absolute left-0 top-full z-20 mt-1 w-56 rounded border border-line bg-white py-2 shadow-menu">
          <li className="px-4 py-1 text-sm font-semibold uppercase text-muted">Dropdown header</li>
          {['Action', 'Another action', 'Something else here'].map((item) => (
            <li key={item}>
              <a href="#menus" className="block px-4 py-1 text-sm hover:bg-light">
                {item}
              </a>
            </li>
          ))}
          <li className="my-1 border-t border-line" />
          <li>
            <a href="#menus" className="block px-4 py-1 text-sm hover:bg-light">
              Separated link
            </a>
          </li>
          <li>
            <a href="#menus" className="block px-4 py-1 text-sm hover:bg-light">
              One more separated link
            </a>
          </li>
        </ul>
      )}
    </div>
  )
}

/** The kit's menu catalog: a plain menu list and an icon-prefixed variant. */
export function MenusShowcase() {
  return (
    <ShowcaseSection id="menus">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <SubHeading>Menu</SubHeading>
          <MenuList
            title="Menu"
            current="Discover"
            items={MENU_ITEMS.map((label) => ({ label }))}
          />
        </div>
        <div>
          <SubHeading>Menu with Icons</SubHeading>
          <div className="space-y-4">
            <MenuList title="Menu" current="" items={ICON_MENU_ITEMS} />
            <HeaderMenu />
          </div>
        </div>
      </div>
    </ShowcaseSection>
  )
}
