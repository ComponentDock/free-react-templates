import { useRef, useState } from 'react'
import { Menu } from 'lucide-react'
import { ButtonLink, cn } from '@free-react-templates/ui'
import { HostingDropdown } from './HostingDropdown'
import { MobileMenu } from './MobileMenu'
import { NAV_LINKS } from '../lib/nav'

const LINK_CLASS =
  'inline-block px-[10px] py-[10px] text-[16px] leading-none tracking-[0.05em] transition-colors hover:text-white focus-visible:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime'

const AUTH_CLASS =
  'rounded-none h-[42px] px-6 text-[16px] font-normal focus-visible:ring-lime/40 focus-visible:ring-offset-slate'

/**
 * The flat slate navigation strip: five destinations set in dim white with the
 * current page in full white, the `Hosting` dropdown, and two square
 * authentication actions on the right — an outlined lime `Register` beside a
 * lime-filled `Login`. Below the desktop breakpoint the strip collapses to a
 * 28px hamburger that opens the off-canvas panel.
 */
export function Navbar() {
  const [active, setActive] = useState('Home')
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)

  return (
    <nav aria-label="Main" className="bg-slate">
      <div className="mx-auto flex h-[75px] w-full max-w-[1140px] items-center px-[15px] py-1">
        <button
          ref={toggleRef}
          type="button"
          aria-label="Open the menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(true)}
          className="grid place-items-center text-white transition-colors hover:text-lime focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime min-[992px]:hidden"
        >
          <Menu aria-hidden="true" className="h-7 w-7" />
        </button>

        <ul className="hidden items-center min-[992px]:flex">
          {NAV_LINKS.map((link) =>
            link.label === 'Hosting' ? (
              <HostingDropdown
                key={link.label}
                active={active === link.label}
                onSelect={() => setActive(link.label)}
              />
            ) : (
              <li key={link.label} className="px-[5px]">
                <a
                  href={link.href}
                  aria-current={active === link.label ? 'page' : undefined}
                  onClick={() => setActive(link.label)}
                  className={cn(LINK_CLASS, active === link.label ? 'text-white' : 'text-white/60')}
                >
                  {link.label}
                </a>
              </li>
            ),
          )}
        </ul>

        <div className="ml-auto flex items-center">
          <ButtonLink
            href="#contact"
            variant="outline"
            className={cn(AUTH_CLASS, 'border border-lime bg-transparent text-white')}
          >
            Register
          </ButtonLink>
          <ButtonLink
            href="#contact"
            className={cn(AUTH_CLASS, 'ml-[15px] bg-lime text-white hover:bg-lime-deep')}
          >
            Login
          </ButtonLink>
        </div>
      </div>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        active={active}
        onNavigate={setActive}
        triggerRef={toggleRef}
      />
    </nav>
  )
}
