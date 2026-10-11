import { useEffect, useState } from 'react'
import { ChevronDown, Globe, Mail, Menu, Phone, X } from 'lucide-react'
import { ButtonLink, cn } from '@free-react-templates/ui'
import { BLOG_DROPDOWN, NAV_LINKS, NAV_TAIL_LINKS, UTILITY } from '../data/content'
import { FacebookIcon, LinkedinIcon, TruckMark, TwitterIcon } from './icons'

const SOCIALS = [
  { label: 'Twitter', href: 'https://twitter.com', Icon: TwitterIcon },
  { label: 'Facebook', href: 'https://facebook.com', Icon: FacebookIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com', Icon: LinkedinIcon },
  { label: 'Website', href: 'https://example.com', Icon: Globe },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [blogOpen, setBlogOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 bg-header transition-shadow',
        scrolled ? 'shadow-[0_10px_15px_rgba(25,25,25,0.1)]' : 'shadow-none',
      )}
    >
      <div className="hidden border-b border-white/10 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-sm text-white/80">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone aria-hidden="true" className="h-4 w-4 text-accent" />
              Phone: {UTILITY.phone}
            </span>
            <span className="flex items-center gap-2">
              <Mail aria-hidden="true" className="h-4 w-4 text-accent" />
              Email: {UTILITY.email}
            </span>
          </div>
          <div className="flex items-center gap-3">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-white/70 transition-colors hover:text-accent"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3">
          <TruckMark className="h-8 w-8 text-accent" />
          <span className="font-display text-3xl font-semibold uppercase tracking-wide text-white">
            Vitesse
          </span>
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
          className="text-white lg:hidden"
        >
          {mobileOpen ? (
            <X aria-hidden="true" className="h-7 w-7" />
          ) : (
            <Menu aria-hidden="true" className="h-7 w-7" />
          )}
        </button>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="text-sm uppercase tracking-widest text-white transition-colors hover:text-accent"
            >
              {label}
            </a>
          ))}
          <div
            className="relative"
            onMouseEnter={() => setBlogOpen(true)}
            onMouseLeave={() => setBlogOpen(false)}
            onFocus={() => setBlogOpen(true)}
          >
            <button
              type="button"
              aria-expanded={blogOpen}
              onClick={() => setBlogOpen((open) => !open)}
              className="flex items-center gap-1 text-sm uppercase tracking-widest text-white transition-colors hover:text-accent"
            >
              Blog
              <ChevronDown aria-hidden="true" className="h-4 w-4" />
            </button>
            <ul
              className={cn(
                'absolute left-0 top-full w-48 border-t-2 border-accent bg-header py-2 shadow-lg',
                blogOpen ? 'block' : 'hidden',
              )}
            >
              {BLOG_DROPDOWN.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={() => setBlogOpen(false)}
                    className="block px-4 py-2 text-sm uppercase tracking-widest text-white/80 hover:bg-white/5 hover:text-accent"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {NAV_TAIL_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="text-sm uppercase tracking-widest text-white transition-colors hover:text-accent"
            >
              {label}
            </a>
          ))}
          <ButtonLink
            href="#quote"
            className="btn rounded-[5px] px-8 py-3 text-white"
            aria-label="Get A Quote"
          >
            <span>Get A Quote</span>
          </ButtonLink>
        </nav>
      </div>

      <nav
        aria-label="Mobile"
        className={cn('flex-col gap-4 px-6 pb-6 lg:hidden', mobileOpen ? 'flex' : 'hidden')}
      >
        {[...NAV_LINKS, { label: 'Blog', href: '#blog' }, ...NAV_TAIL_LINKS].map(
          ({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="text-sm uppercase tracking-widest text-white transition-colors hover:text-accent"
            >
              {label}
            </a>
          ),
        )}
        <ButtonLink href="#quote" className="btn rounded-[5px] px-8 py-3 text-white">
          <span>Get A Quote</span>
        </ButtonLink>
      </nav>
    </header>
  )
}
