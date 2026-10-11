import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { FacebookIcon, InstagramIcon, TwitterIcon } from './BrandIcons'
import { ShowcaseSection, SubHeading } from './section'

type DropdownKind = 'none' | 'inline' | 'header'

interface NavVariant {
  label: string
  className: string
  current: 'Discover' | 'Home'
  dropdown: DropdownKind
  social?: boolean
  photo?: boolean
}

const VARIANTS: NavVariant[] = [
  {
    label: 'Primary Color',
    className: 'bg-primary text-white',
    current: 'Discover',
    dropdown: 'none',
  },
  {
    label: 'Success Color',
    className: 'bg-success text-strong',
    current: 'Discover',
    dropdown: 'inline',
  },
  {
    label: 'Info Color',
    className: 'bg-info text-white',
    current: 'Discover',
    dropdown: 'inline',
    social: true,
  },
  {
    label: 'Danger Color',
    className: 'bg-danger text-white',
    current: 'Discover',
    dropdown: 'header',
  },
  {
    label: 'Info Color',
    className: 'bg-info text-white',
    current: 'Home',
    dropdown: 'header',
  },
  { label: 'Dark Color', className: 'bg-dark text-white', current: 'Discover', dropdown: 'inline' },
  {
    label: 'Background image',
    className: 'bg-heading text-white',
    current: 'Discover',
    dropdown: 'inline',
    photo: true,
  },
]

const SOCIALS = [
  { label: 'Facebook', Icon: FacebookIcon },
  { label: 'Twitter', Icon: TwitterIcon },
  { label: 'Instagram', Icon: InstagramIcon },
]

/** One navbar demo: brand, links with a current marker, dropdown and socials. */
function NavStrip({ variant }: { variant: NavVariant }) {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <SubHeading>{variant.label}</SubHeading>
      <nav
        aria-label={`${variant.label} navigation`}
        className={cn(
          'flex flex-wrap items-center justify-between gap-4 rounded px-4 py-3',
          variant.className,
          variant.photo === true &&
            'bg-[linear-gradient(rgba(31,0,0,0.6),rgba(31,0,0,0.6))] bg-[url(https://picsum.photos/seed/structkit-nav/1200/200)] bg-cover bg-center',
        )}
      >
        <span className="text-[16px]">Structkit.</span>
        <ul className="flex flex-wrap items-center gap-4 text-[14px] uppercase">
          {variant.current === 'Home' && (
            <li>
              <a href="#navigations" aria-current="true" className="underline">
                Home (current)
              </a>
            </li>
          )}
          {['Discover', 'Profile', 'Settings'].map((item) => (
            <li key={item}>
              {item === variant.current ? (
                <a href="#navigations" aria-current="true" className="underline">
                  {item} (current)
                </a>
              ) : (
                <a href="#navigations">{item}</a>
              )}
            </li>
          ))}
        </ul>
        {variant.dropdown !== 'none' && (
          <div className="relative">
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              className="flex cursor-pointer items-center gap-2 uppercase"
            >
              Dropdown
              <ChevronDown className="h-3 w-3" aria-hidden="true" />
            </button>
            {open && (
              <ul className="absolute right-0 top-full z-20 mt-2 w-56 rounded border border-line bg-white py-2 text-left shadow-menu">
                {variant.dropdown === 'header' && (
                  <li className="px-4 py-1 text-sm font-semibold uppercase text-muted">
                    Dropdown header
                  </li>
                )}
                {['Action', 'Another action', 'Something else here'].map((item) => (
                  <li key={item}>
                    <a href="#navigations" className="block px-4 py-1 text-sm hover:bg-light">
                      {item}
                    </a>
                  </li>
                ))}
                {variant.dropdown === 'header' && (
                  <>
                    <li className="my-1 border-t border-line" />
                    <li>
                      <a href="#navigations" className="block px-4 py-1 text-sm hover:bg-light">
                        Separated link
                      </a>
                    </li>
                  </>
                )}
              </ul>
            )}
          </div>
        )}
        {variant.social === true && (
          <div className="flex items-center gap-3">
            {SOCIALS.map(({ label, Icon }) => (
              <a key={label} href="#navigations" aria-label={label}>
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        )}
      </nav>
    </div>
  )
}

/** The kit's navigation catalog: seven coloured navbar patterns. */
export function NavigationsShowcase() {
  return (
    <ShowcaseSection id="navigations" title="Navigations">
      <div className="space-y-8">
        {VARIANTS.map((variant, index) => (
          <NavStrip key={`${variant.label}-${index}`} variant={variant} />
        ))}
      </div>
    </ShowcaseSection>
  )
}
