import { useState } from 'react'
import {
  ChevronDown,
  DollarSign,
  Flower2,
  Home,
  Search,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { Band } from './Band'

type NavTheme = 'primary' | 'secondary' | 'success' | 'danger' | 'info' | 'transparent'
type IconName = 'home' | 'flower' | 'usd' | 'shield'

const ICONS: Record<IconName, LucideIcon> = {
  home: Home,
  flower: Flower2,
  usd: DollarSign,
  shield: ShieldCheck,
}

const THEME_FILLS: Record<NavTheme, string> = {
  primary: 'bg-flair-primary shadow-nav-primary',
  secondary: 'bg-flair-secondary shadow-nav-secondary',
  success: 'bg-flair-success shadow-nav-success',
  danger: 'bg-flair-danger shadow-nav-danger',
  info: 'bg-flair-info shadow-nav-info',
  transparent: 'bg-transparent',
}

interface NavLink {
  label: string
  current?: boolean
  disabled?: boolean
  dropdown?: boolean
}

/** Icons keyed by the label the reference renders them beside. */
const LINK_ICONS: Record<string, IconName> = {
  Home: 'home',
  Features: 'flower',
  Pricing: 'usd',
  'Dropdown link': 'shield',
}

function LinkIcon({ name }: { name: IconName }) {
  const Icon = ICONS[name]
  return <Icon className="h-5 w-5" aria-hidden="true" />
}

interface NavDemo {
  id: string
  theme: NavTheme
  brand: string
  links: NavLink[]
  withIcons?: boolean
  search?: boolean
  divider?: boolean
  overPhoto?: boolean
}

const BASIC_LINKS: NavLink[] = [
  { label: 'Home' },
  { label: 'Features' },
  { label: 'Pricing' },
  { label: 'Dropdown link', dropdown: true },
]

const ICON_LINKS: NavLink[] = [
  { label: 'Home' },
  { label: 'Features' },
  { label: 'Pricing' },
  { label: 'Dropdown link', dropdown: true },
]

const NAV_DEMOS: NavDemo[] = [
  { id: 'primary', theme: 'primary', brand: 'Brand', links: BASIC_LINKS },
  {
    id: 'success',
    theme: 'success',
    brand: 'Brand',
    search: true,
    divider: true,
    links: [
      { label: 'Home', current: true },
      { label: 'Link' },
      { label: 'Dropdown', dropdown: true },
      { label: 'Disabled', disabled: true },
    ],
  },
  { id: 'info', theme: 'info', brand: 'Brand', links: ICON_LINKS, withIcons: true },
  { id: 'danger', theme: 'danger', brand: 'Brand', links: ICON_LINKS, withIcons: true },
  {
    id: 'secondary',
    theme: 'secondary',
    brand: 'Brand',
    links: ICON_LINKS,
    withIcons: true,
    overPhoto: true,
  },
  {
    id: 'transparent',
    theme: 'transparent',
    brand: 'Transparent',
    links: ICON_LINKS,
    withIcons: true,
    overPhoto: true,
  },
]

const DROPDOWN_ITEMS = ['Action', 'Another action', 'Something else here']

/** One demo navbar: dark bar, uppercase 0.8rem items, React-state dropdown. */
function DemoNavbar({
  demo,
  open,
  onToggle,
}: {
  demo: NavDemo
  open: boolean
  onToggle: () => void
}) {
  return (
    <nav
      aria-label={`${demo.theme} navbar example`}
      className={cn('mb-4 flex items-center px-4 py-2', THEME_FILLS[demo.theme])}
    >
      <a href="#" className="mr-4 text-[1.25rem] leading-none text-white">
        {demo.brand}
      </a>
      <ul className="ml-auto flex items-center">
        {demo.links.map((link) =>
          link.dropdown ? (
            <li key={link.label} className="relative">
              <button
                type="button"
                aria-expanded={open}
                onClick={onToggle}
                className="flex cursor-pointer items-center gap-1 px-2.5 py-4 text-[0.8rem] font-normal tracking-wide text-white uppercase transition-colors hover:bg-white/20"
              >
                {demo.withIcons && <LinkIcon name={LINK_ICONS[link.label] as IconName} />}
                {link.label}
                <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
              {open && (
                <ul className="absolute top-12 left-0 z-10 min-w-[12rem] rounded bg-white py-2 text-[0.8rem] shadow-menu">
                  {DROPDOWN_ITEMS.map((item, index) => (
                    <li key={item}>
                      {demo.divider && index === DROPDOWN_ITEMS.length - 1 && (
                        <span className="my-1 block h-px bg-gray-200" />
                      )}
                      <a
                        href="#"
                        className="block px-4 py-1.5 text-flair-dark hover:bg-flair-light"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ) : (
            <li key={link.label}>
              <a
                href="#"
                aria-disabled={link.disabled}
                className={cn(
                  'flex items-center gap-1 px-2.5 py-4 text-[0.8rem] font-normal tracking-wide text-white uppercase transition-colors',
                  link.disabled ? 'pointer-events-none opacity-50' : 'hover:bg-white/20',
                  link.current && 'bg-white/20',
                )}
              >
                {demo.withIcons && <LinkIcon name={LINK_ICONS[link.label] as IconName} />}
                {link.label}
                {link.current && <span className="sr-only">(current)</span>}
              </a>
            </li>
          ),
        )}
      </ul>
      {demo.search && (
        <form className="ml-4 flex items-center gap-2" onSubmit={(event) => event.preventDefault()}>
          <input
            type="search"
            aria-label="Search"
            placeholder="Search"
            className="border-b border-white bg-transparent text-[0.9rem] text-white placeholder-white outline-none"
          />
          <button
            type="submit"
            aria-label="Submit search"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white text-[0.9rem] text-[#888]"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
          </button>
        </form>
      )}
    </nav>
  )
}

/** Six stacked dark navbar demos; the last two sit over a photo band. */
export function NavbarShowcase() {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggle = (id: string) => setOpenId((previous) => (previous === id ? null : id))

  const renderBar = (demo: NavDemo) => (
    <DemoNavbar
      key={demo.id}
      demo={demo}
      open={openId === demo.id}
      onToggle={() => toggle(demo.id)}
    />
  )

  return (
    <>
      <Band className="pb-0">{NAV_DEMOS.filter((demo) => !demo.overPhoto).map(renderBar)}</Band>
      <div
        className="flex min-h-[80vh] flex-col justify-center bg-cover bg-center px-6 py-16"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/flairkit-navbar/1920/1080)' }}
      >
        <div className="mx-auto w-full max-w-6xl">
          {NAV_DEMOS.filter((demo) => demo.overPhoto).map(renderBar)}
        </div>
      </div>
    </>
  )
}
