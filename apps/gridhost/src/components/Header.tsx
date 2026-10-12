import { useRef, useState } from 'react'
import { Menu, Phone } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { CONTACT, NAV_LINKS } from '../lib/site'
import { useScrolled } from '../lib/use-scrolled'
import { MobileMenu } from './MobileMenu'
import { NavDropdown } from './NavDropdown'
import { Wordmark } from './Wordmark'

/**
 * The header sits transparent on top of the navy hero and swaps to the solid
 * `header-sticky` bar with tighter link padding once the page scrolls, hiding
 * the desktop menu and the phone chip below `lg` in favour of the panel toggle.
 */
export function Header() {
  const scrolled = useScrolled()
  const [active, setActive] = useState('Home')
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)

  return (
    <header
      data-scrolled={scrolled}
      className={cn(
        'inset-x-0 top-0 z-[90]',
        scrolled ? 'fixed bg-header-sticky shadow-header' : 'absolute bg-transparent',
      )}
    >
      <div
        className={cn(
          'mx-auto flex w-full max-w-[1140px] items-center justify-between px-[20px] lg:px-[50px]',
          scrolled ? 'py-[8px]' : 'py-[14px]',
        )}
      >
        <Wordmark />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <NavDropdown
                  key={link.label}
                  link={{ ...link, children: link.children }}
                  active={active === link.label}
                  compact={scrolled}
                  onSelect={setActive}
                />
              ) : (
                <li key={link.label}>
                  <a
                    href={link.href}
                    aria-current={active === link.label ? 'page' : undefined}
                    onClick={() => setActive(link.label)}
                    className={cn(
                      'inline-block font-heading text-[14px] font-medium tracking-[0.02em] uppercase transition-colors focus-visible:text-brand focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-brand',
                      scrolled ? 'px-[13px] py-[27px]' : 'px-[19px] py-[39px]',
                      active === link.label ? 'text-brand' : 'text-white',
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ),
            )}
          </ul>
        </nav>

        <a
          href={CONTACT.telHref}
          aria-label={`Call support on ${CONTACT.phone}`}
          className="group relative hidden h-[53px] items-center gap-[9px] overflow-hidden rounded-pill bg-brand px-[29px] font-heading text-[14px] font-medium tracking-[1px] text-white uppercase lg:inline-flex focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 origin-left scale-x-0 bg-brand-hover transition-transform duration-500 ease-[cubic-bezier(.5,1.6,.4,.7)] group-hover:scale-x-100 group-focus-visible:scale-x-100"
          />
          <Phone aria-hidden="true" className="relative z-[1] h-[22px] w-[22px]" />
          <span className="relative z-[1]">{CONTACT.phone}</span>
        </a>

        <button
          ref={toggleRef}
          type="button"
          aria-label="Open the menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(true)}
          className="grid place-items-center text-white transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand lg:hidden"
        >
          <Menu aria-hidden="true" className="h-7 w-7" />
        </button>
      </div>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        active={active}
        onNavigate={setActive}
        triggerRef={toggleRef}
      />
    </header>
  )
}
