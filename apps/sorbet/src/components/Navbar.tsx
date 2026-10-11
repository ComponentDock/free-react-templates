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
 * The band's navbar floats absolutely over the hero photo: transparent until
 * the page scrolls, then a solid black bar (as in the reference).
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

  const textClass = scrolled ? 'text-white' : 'text-heading'

  return (
    <nav
      className={cn(
        'absolute left-0 top-0 z-40 w-full px-4 py-4 sm:px-6',
        scrolled ? 'fixed bg-black' : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
        <a href="#home" className={cn('text-xl font-semibold tracking-tight', textClass)}>
          sorbet
        </a>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className={cn(
            'flex cursor-pointer items-center gap-2 text-xs uppercase lg:hidden',
            textClass,
          )}
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
          Menu
        </button>

        <div
          className={cn(
            'w-full flex-col items-start gap-4 lg:flex lg:w-auto lg:flex-row lg:items-center',
            menuOpen ? 'flex' : 'hidden',
          )}
        >
          <div className="relative">
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={cn('flex cursor-pointer items-center gap-2 text-sm', textClass)}
            >
              <Layers className="h-4 w-4" aria-hidden="true" />
              Components
              <ChevronDown className="h-3 w-3" aria-hidden="true" />
            </button>
            {dropdownOpen && (
              <div
                className={cn(
                  'absolute left-0 top-full mt-2 w-52 rounded bg-white py-2 shadow-menu',
                )}
              >
                {DROPDOWN_ITEMS.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-body hover:bg-light"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {label}
                  </a>
                ))}
              </div>
            )}
          </div>

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

          <KitLink
            href="#signup"
            color="primary"
            variant="white"
            size="md"
            className="gap-2 rounded-full px-5 text-primary-500"
          >
            <CloudDownload className="h-4 w-4" aria-hidden="true" />
            Download
          </KitLink>
        </div>
      </div>
    </nav>
  )
}
