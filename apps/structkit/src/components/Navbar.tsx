import { useEffect, useState } from 'react'
import { ChevronDown, CloudDownload, FileText, Layers, Menu } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { FacebookIcon, InstagramIcon, TwitterIcon } from './BrandIcons'
import { KitLink } from './KitButton'

const DROPDOWN_ITEMS = [
  { label: 'All Components', href: '#buttons', Icon: Layers },
  { label: 'Documentation', href: '#typography', Icon: FileText },
]

const SOCIAL_LINKS = [
  { label: 'Facebook', href: 'https://www.facebook.com/', Icon: FacebookIcon },
  { label: 'Twitter', href: 'https://twitter.com/', Icon: TwitterIcon },
  { label: 'Instagram', href: 'https://www.instagram.com/', Icon: InstagramIcon },
]

/**
 * The kit's navbar floats over the hero photo: white-on-photo while the page is
 * at rest, then a fixed white bar with a soft shadow once the page scrolls.
 */
export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [scrolled, setScrolled] = useState(() => window.scrollY > 80)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const textClass = scrolled ? 'text-heading' : 'text-white'

  return (
    <nav
      className={cn(
        'absolute left-0 top-0 z-40 w-full px-4 py-5 sm:px-6',
        scrolled ? 'fixed bg-white shadow-nav' : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4">
        <a href="#home" className={cn('text-[20px] font-normal', textClass)}>
          Structkit.
        </a>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className={cn(
            'flex cursor-pointer items-center gap-2 text-[14px] uppercase lg:hidden',
            textClass,
          )}
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
          Menu
        </button>

        <div
          className={cn(
            'w-full flex-col items-start gap-5 text-[14px] uppercase lg:flex lg:w-auto lg:flex-row lg:items-center',
            menuOpen ? 'flex' : 'hidden',
          )}
        >
          <div className="relative">
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={cn('flex cursor-pointer items-center gap-2 uppercase', textClass)}
            >
              <Layers className="h-4 w-4 opacity-60" aria-hidden="true" />
              Components
              <ChevronDown className="h-3 w-3" aria-hidden="true" />
            </button>
            {dropdownOpen && (
              <div className="absolute left-0 top-full z-50 mt-2 w-52 rounded bg-white py-2 shadow-menu">
                {DROPDOWN_ITEMS.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-2 px-4 py-2 text-sm normal-case text-body hover:bg-light"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="#cards" className={cn('flex items-center gap-2 uppercase', textClass)}>
            <CloudDownload className="h-4 w-4 opacity-60" aria-hidden="true" />
            Download
          </a>

          <KitLink
            href="#cards"
            color="primary"
            variant="white"
            size="md"
            className="gap-2 px-5 text-[14px] uppercase text-primary"
          >
            <Layers className="h-4 w-4" aria-hidden="true" />
            Premium
          </KitLink>

          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className={cn('hover:opacity-70', textClass)}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
