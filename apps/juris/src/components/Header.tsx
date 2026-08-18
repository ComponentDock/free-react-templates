import { useEffect, useState } from 'react'
import { ChevronDown, Mail, Menu, Phone, Scale, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { callUsHref, EMAIL, mailtoHref, NAV_LINKS, PHONE } from '../data'
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from './BrandIcons'

const SOCIALS = [
  { label: 'Facebook', Icon: FacebookIcon },
  { label: 'Twitter', Icon: TwitterIcon },
  { label: 'Instagram', Icon: InstagramIcon },
  { label: 'Linkedin', Icon: LinkedinIcon },
]

const linkClass =
  'relative px-3 py-2 text-[18px] text-ink transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-[3px] after:w-0 after:bg-brand after:transition-all after:duration-300 hover:text-brand hover:after:w-full'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [blogOpen, setBlogOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header>
      {/* Near-black top bar: contact info left, social icons right. */}
      <div className="bg-topbar text-white">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-3 text-sm">
          <ul className="flex flex-wrap items-center gap-4">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" aria-hidden="true" />
              <a href={callUsHref} className="transition-colors hover:text-white/80">
                {PHONE}
              </a>
            </li>
            <li className="flex items-center gap-2 border-l border-white/20 pl-4">
              <Mail className="h-4 w-4" aria-hidden="true" />
              <a href={mailtoHref} className="transition-colors hover:text-white/80">
                {EMAIL}
              </a>
            </li>
          </ul>
          <ul className="hidden items-center gap-3 sm:flex">
            {SOCIALS.map(({ label, Icon }) => (
              <li key={label}>
                <a
                  href="#home"
                  aria-label={label}
                  className="block transition-colors hover:text-white/80"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* White nav row: logo, menu, CTAs. Sticky with shadow after scroll. */}
      <div
        data-testid="nav-row"
        className={cn(
          'sticky top-0 z-40 border-b border-line/60 bg-white transition-shadow',
          scrolled && 'shadow-md',
        )}
      >
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-4">
          <a href="#home" className="flex items-center gap-2" aria-label="Juris home">
            <Scale className="h-7 w-7 text-brand" aria-hidden="true" />
            <span className="font-serif text-3xl font-medium tracking-wide text-ink">Juris</span>
          </a>

          <nav aria-label="Primary navigation" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {NAV_LINKS.map((item) => (
                <li key={item.label} className="relative">
                  {item.children ? (
                    <div className="relative">
                      <button
                        type="button"
                        aria-expanded={blogOpen}
                        aria-controls="blog-submenu"
                        onClick={() => setBlogOpen((open) => !open)}
                        className={cn(linkClass, 'flex items-center gap-1')}
                      >
                        {item.label}
                        <ChevronDown className="h-4 w-4" aria-hidden="true" />
                      </button>
                      {blogOpen && (
                        <ul
                          id="blog-submenu"
                          className="absolute left-0 top-full z-50 w-48 bg-white py-3 text-ink shadow-lg"
                        >
                          {item.children.map((child) => (
                            <li key={child.label}>
                              <a
                                href={child.href}
                                className="block px-4 py-2 text-[17px] transition-colors hover:bg-brand/5 hover:text-brand"
                              >
                                {child.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <a href={item.href} className={linkClass}>
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-6 lg:flex">
            <a
              href="#contact"
              className="border border-brand px-6 py-2.5 text-[17px] text-brand transition-colors hover:bg-brand hover:text-white"
            >
              Make An Appointment
            </a>
            <a
              href={callUsHref}
              className="text-[17px] text-ink transition-colors hover:text-brand"
            >
              Call Us: <span className="border-b border-dotted border-brand pb-0.5">{PHONE}</span>
            </a>
          </div>

          <button
            type="button"
            className="inline-flex text-ink lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* Mobile menu panel (conditionally rendered). */}
        {menuOpen && (
          <nav
            aria-label="Mobile navigation"
            id="mobile-menu"
            className="border-t border-line/60 lg:hidden"
          >
            <ul className="px-4 py-2">
              {NAV_LINKS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-2 text-lg text-ink transition-colors hover:text-brand"
                  >
                    {item.label}
                  </a>
                  {item.children?.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      onClick={() => setMenuOpen(false)}
                      className="block py-1 pl-6 text-base text-body transition-colors hover:text-brand"
                    >
                      {child.label}
                    </a>
                  ))}
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 border-t border-line/60 px-4 py-4">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="border border-brand px-6 py-2.5 text-center text-[17px] text-brand transition-colors hover:bg-brand hover:text-white"
              >
                Make An Appointment
              </a>
              <a href={callUsHref} className="text-center text-[17px] text-ink">
                Call Us: {PHONE}
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
