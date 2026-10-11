import { useEffect, useState } from 'react'
import { ChevronDown, CloudDownload, FileText, Layers, Menu } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { FacebookIcon, InstagramIcon, TwitterIcon } from './BrandIcons'

type NavKey = 'components' | 'download'

/** Which showcase band lights up which navbar item (scroll spy map). */
const SECTION_NAV: Record<string, NavKey> = {
  buttons: 'components',
  typography: 'components',
  signup: 'download',
}

const DROPDOWN_ITEMS = [
  { label: 'All Components', href: '#buttons', Icon: Layers },
  { label: 'Documentation', href: '#typography', Icon: FileText },
]

const SOCIAL_LINKS = [
  { label: 'Facebook', href: 'https://www.facebook.com/', Icon: FacebookIcon },
  { label: 'Twitter', href: 'https://twitter.com/', Icon: TwitterIcon },
  { label: 'Instagram', href: 'https://www.instagram.com/', Icon: InstagramIcon },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [scrolled, setScrolled] = useState(() => window.scrollY > 80)
  const [activeNav, setActiveNav] = useState<NavKey>('components')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const nav = SECTION_NAV[entry.target.id]
          if (nav) setActiveNav(nav)
        }
      })
    })
    document.querySelectorAll('main [id]').forEach((section) => {
      observer.observe(section)
    })
    return () => {
      observer.disconnect()
    }
  }, [])

  const brandClass = cn(
    'text-xl font-light tracking-tight',
    scrolled ? 'text-heading' : 'text-white',
  )

  const navLinkClass = (key: NavKey) =>
    cn(
      'flex items-center gap-2 text-sm font-light uppercase tracking-wide transition-colors',
      scrolled ? 'text-heading' : 'text-white',
      scrolled && activeNav === key ? 'text-primary-600' : '',
    )

  return (
    <nav
      className={cn(
        'absolute left-0 z-40 w-full px-4 pt-2.5 sm:px-6',
        scrolled ? 'fixed top-0 bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)]' : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 py-3">
        <a href="#home" className={brandClass}>
          buildkit.
        </a>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className={cn(
            'flex cursor-pointer items-center gap-2 text-xs font-light uppercase lg:hidden',
            scrolled ? 'text-heading' : 'text-white',
          )}
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
          Menu
        </button>

        <div
          id="buildkit-nav-collapse"
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
              className={cn('cursor-pointer', navLinkClass('components'))}
            >
              <Layers className="h-5 w-5" aria-hidden="true" />
              Components
              <ChevronDown className="h-3 w-3" aria-hidden="true" />
            </button>
            {dropdownOpen && (
              <div className="absolute left-0 top-full mt-2 w-52 rounded-md bg-white py-2 shadow-lg">
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

          <a href="#signup" className={navLinkClass('download')}>
            <CloudDownload className="h-5 w-5" aria-hidden="true" />
            Download
          </a>

          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className={cn(scrolled ? 'text-heading' : 'text-white', 'hover:opacity-70')}
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
