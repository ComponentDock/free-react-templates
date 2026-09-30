import { useEffect, useState } from 'react'
import { ChevronDown, Menu, Star, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const menuLink = 'font-heading text-base font-bold text-ink transition-colors hover:text-brand'

const blogItems = [
  { label: 'Blog', href: '#blog' },
  { label: 'Blog Details', href: '#blog' },
  { label: 'Element', href: '#blog' },
] as const

/** Navbar: white bar over the peach hero — Boostly star wordmark left; Home,
 *  About, Services, Blog (orange dropdown) and Contact right, plus the
 *  gradient Join Us button. Sticky: gains a shadow and tighter padding after
 *  scrolling. Mobile: hamburger opens an off-canvas menu with a collapsible
 *  Blog group. */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [blogOpen, setBlogOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileBlogOpen, setMobileBlogOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-[99] w-full bg-white transition-all duration-300',
        scrolled ? 'py-3 shadow-[0_10px_15px_rgba(25,25,25,0.1)]' : 'py-6',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-8">
        <a
          href="#home"
          className="inline-flex items-center gap-2 font-heading text-[25px] font-bold text-ink"
        >
          <Star className="h-6 w-6 fill-brand text-brand" aria-hidden="true" />
          Boostly
        </a>
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-[21px]">
            <li>
              <a href="#home" aria-current="page" className={cn(menuLink, 'py-7')}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className={cn(menuLink, 'py-7')}>
                About
              </a>
            </li>
            <li>
              <a href="#services" className={cn(menuLink, 'py-7')}>
                Services
              </a>
            </li>
            <li className="relative">
              <button
                type="button"
                aria-expanded={blogOpen}
                aria-haspopup="true"
                onClick={() => setBlogOpen((open) => !open)}
                className={cn(menuLink, 'inline-flex items-center gap-1 py-7')}
              >
                Blog
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </button>
              {blogOpen ? (
                <ul className="absolute left-0 top-full z-50 w-[170px] bg-brand py-4 shadow-[0_0_10px_3px_rgba(0,0,0,0.05)]">
                  {blogItems.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="block px-4 py-1.5 font-heading text-base text-white transition-all hover:pl-[13px]"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
            <li>
              <a href="#contact" className={cn(menuLink, 'py-7')}>
                Contact
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="ml-[19px] inline-block rounded-[4px] bg-[linear-gradient(to_left,var(--color-brand),var(--color-brand-mid),var(--color-brand))] bg-[length:200%_auto] px-[34px] py-[14px] font-body text-base font-medium text-white transition-all duration-500 hover:bg-[position:left_center]"
              >
                Join Us
              </a>
            </li>
          </ul>
        </nav>
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen(true)}
          className="text-ink lg:hidden"
        >
          <Menu className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      {mobileOpen ? (
        <div
          id="mobile-menu"
          className="fixed inset-y-0 right-0 z-[2000] w-72 overflow-y-auto bg-white p-6 shadow-2xl lg:hidden"
        >
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-2 font-heading text-[25px] font-bold text-ink">
              <Star className="h-6 w-6 fill-brand text-brand" aria-hidden="true" />
              Boostly
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="text-ink"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <nav aria-label="Mobile">
            <ul className="mt-8 space-y-1">
              <li>
                <a
                  href="#home"
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 font-heading text-xl font-bold text-ink transition-colors hover:text-brand"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 font-heading text-xl font-bold text-ink transition-colors hover:text-brand"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 font-heading text-xl font-bold text-ink transition-colors hover:text-brand"
                >
                  Services
                </a>
              </li>
              <li>
                <button
                  type="button"
                  aria-expanded={mobileBlogOpen}
                  onClick={() => setMobileBlogOpen((open) => !open)}
                  className="flex w-full items-center justify-between py-2 font-heading text-xl font-bold text-ink transition-colors hover:text-brand"
                >
                  Blog
                  <ChevronDown
                    className={cn('h-4 w-4 transition-transform', mobileBlogOpen && 'rotate-180')}
                    aria-hidden="true"
                  />
                </button>
                {mobileBlogOpen ? (
                  <ul className="ml-4 space-y-1 border-l border-ink/10 pl-4">
                    {blogItems.map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-1 font-body text-base text-ink transition-colors hover:text-brand"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 font-heading text-xl font-bold text-ink transition-colors hover:text-brand"
                >
                  Contact
                </a>
              </li>
              <li className="pt-4">
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="inline-block rounded-[4px] bg-[linear-gradient(to_left,var(--color-brand),var(--color-brand-mid),var(--color-brand))] px-[34px] py-[14px] font-body text-base font-medium text-white"
                >
                  Join Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
