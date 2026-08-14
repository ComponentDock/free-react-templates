import { useEffect, useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { ButtonLink, cn } from '@free-react-templates/ui'
import { brand, navLinks, type NavLink } from '../data'

/** Transparent-over-hero header (source: .header-area.header-transparent +
 *  .main-header.header-sticky): EXPOSURE wordmark left, six white Rubik nav
 *  links (Blog opens a dropdown on a translucent dark panel), a coral
 *  "Contact now" button right, and a hamburger toggler below lg. On scroll
 *  the bar switches to a solid #000 background. */
export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [blogOpen, setBlogOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const renderLink = (link: NavLink) =>
    'dropdown' in link ? (
      <div key={link.label} className="relative">
        <a
          href={link.href}
          onClick={(event) => {
            event.preventDefault()
            setBlogOpen((value) => !value)
          }}
          aria-expanded={blogOpen}
          className="flex items-center gap-1 px-[10px] py-[39px] text-base text-white transition-colors hover:text-brand"
        >
          {link.label}
          <ChevronDown
            className={cn('h-4 w-4 transition-transform', blogOpen && 'rotate-180')}
            aria-hidden="true"
          />
        </a>
        {blogOpen && (
          <ul className="absolute left-0 top-full w-[170px] bg-[rgba(43,43,43,0.7)] py-[17px] shadow-lg">
            {link.dropdown.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replaceAll(' ', '-')}`}
                  onClick={() => setBlogOpen(false)}
                  className="block px-[10px] py-[6px] text-base text-white transition-colors hover:pl-[13px] hover:text-brand"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    ) : (
      <a
        key={link.label}
        href={link.href}
        className="px-[10px] py-[39px] text-base text-white transition-colors hover:text-brand"
      >
        {link.label}
      </a>
    )

  return (
    <header
      data-variant={scrolled ? 'solid' : 'transparent'}
      className={cn(
        'fixed inset-x-0 top-0 z-50 px-[15px] transition-all duration-300',
        scrolled && 'bg-black',
      )}
    >
      <div className="mx-auto flex h-24 max-w-[1400px] items-center justify-between px-[15px] lg:px-[30px]">
        <a
          href="#home"
          className="font-heading text-2xl font-bold uppercase tracking-[0.15em] text-white"
          aria-label="Exposure"
        >
          {brand.name}
        </a>

        <nav aria-label="Primary" className="hidden items-center lg:flex">
          {navLinks.map(renderLink)}
        </nav>

        <div className="flex items-center gap-6">
          <ButtonLink
            href="#contact"
            className="hidden rounded-none bg-brand px-[45px] py-[30px] font-heading text-base font-normal uppercase tracking-[1px] text-white hover:bg-brand-hover lg:inline-flex"
          >
            Contact now
          </ButtonLink>
          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="flex h-11 w-11 items-center justify-center text-white lg:hidden"
          >
            {menuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cn('bg-black px-4 pb-4 pt-2 lg:hidden', menuOpen ? 'block' : 'hidden')}
      >
        <nav aria-label="Mobile" className="flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-white/10 py-3 text-base text-white transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
          <ButtonLink
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-3 rounded-none bg-brand px-[45px] py-[22px] text-center font-heading text-base font-normal uppercase tracking-[1px] text-white hover:bg-brand-hover"
          >
            Contact now
          </ButtonLink>
        </nav>
      </div>
    </header>
  )
}
