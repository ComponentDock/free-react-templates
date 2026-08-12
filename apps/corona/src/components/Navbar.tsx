import { useEffect, useState } from 'react'
import { ChevronDown, Menu, Search, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Courses', href: '#courses' },
]

const PAGES_DROPDOWN = [
  { label: 'Elements', href: '#features' },
  { label: 'Course Details', href: '#courses' },
]

const BLOG_DROPDOWN = [
  { label: 'Blog Home', href: '#blog' },
  { label: 'Blog Details', href: '#blog' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdown, setDropdown] = useState<'pages' | 'blog' | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleDropdown = (key: 'pages' | 'blog') =>
    setDropdown((current) => (current === key ? null : key))

  return (
    <nav
      data-variant={scrolled ? 'solid' : 'transparent'}
      className={cn(
        'fixed inset-x-0 top-0 z-50 px-[15px] py-[25px] transition-all duration-300',
        scrolled ? 'bg-white shadow-[0_21.213px_30px_0_rgba(158,158,158,0.3)]' : 'bg-transparent',
      )}
      aria-label="Main"
    >
      <div className="mx-auto flex max-w-[1140px] items-center justify-between">
        {/* Logo wordmark (source: a.navbar-brand, Playfair serif). */}
        <a
          href="#home"
          className={cn(
            'font-display text-[30px] font-black',
            scrolled ? 'text-ink' : 'text-white',
          )}
        >
          Corona
        </a>

        {/* Desktop menu (source: ul.navbar-nav, uppercase Roboto). */}
        <ul className="hidden items-center md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={cn(
                  'block px-4 py-2 text-[13px] font-medium uppercase tracking-wide transition-colors',
                  scrolled ? 'text-ink hover:text-brand' : 'text-white hover:text-brand',
                )}
              >
                {link.label}
              </a>
            </li>
          ))}

          {/* Pages dropdown. */}
          <li className="relative">
            <button
              type="button"
              onClick={() => toggleDropdown('pages')}
              aria-expanded={dropdown === 'pages'}
              aria-haspopup="true"
              className={cn(
                'flex items-center gap-1 px-4 py-2 text-[13px] font-medium uppercase tracking-wide transition-colors',
                scrolled ? 'text-ink hover:text-brand' : 'text-white hover:text-brand',
              )}
            >
              Pages <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
            {dropdown === 'pages' && (
              <ul className="absolute left-0 top-full min-w-[180px] bg-[#222222] py-2 shadow-lg">
                {PAGES_DROPDOWN.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={() => setDropdown(null)}
                      className="block px-5 py-2 text-[13px] font-medium uppercase text-white hover:text-brand"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Blog dropdown. */}
          <li className="relative">
            <button
              type="button"
              onClick={() => toggleDropdown('blog')}
              aria-expanded={dropdown === 'blog'}
              aria-haspopup="true"
              className={cn(
                'flex items-center gap-1 px-4 py-2 text-[13px] font-medium uppercase tracking-wide transition-colors',
                scrolled ? 'text-ink hover:text-brand' : 'text-white hover:text-brand',
              )}
            >
              Blog <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
            {dropdown === 'blog' && (
              <ul className="absolute left-0 top-full min-w-[180px] bg-[#222222] py-2 shadow-lg">
                {BLOG_DROPDOWN.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={() => setDropdown(null)}
                      className="block px-5 py-2 text-[13px] font-medium uppercase text-white hover:text-brand"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <a
              href="#contacts"
              className={cn(
                'block px-4 py-2 text-[13px] font-medium uppercase tracking-wide transition-colors',
                scrolled ? 'text-ink hover:text-brand' : 'text-white hover:text-brand',
              )}
            >
              Contacts
            </a>
          </li>

          <li aria-hidden="true" className="pl-2">
            <Search className={cn('h-[18px] w-[18px]', scrolled ? 'text-ink' : 'text-white')} />
          </li>
        </ul>

        {/* Mobile burger toggle. */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="rounded-md p-2 text-white md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu panel (source: collapse panel on #222222). */}
      {open && (
        <div className="absolute inset-x-0 top-[84px] border-t border-gray-100 bg-[#222222] px-[15px] py-4 shadow-lg md:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded px-4 py-2 text-[13px] font-medium uppercase tracking-wide text-white hover:bg-white/10"
                >
                  {link.label}
                </a>
              </li>
            ))}
            {[...PAGES_DROPDOWN, ...BLOG_DROPDOWN].map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded px-4 py-2 text-[13px] font-medium uppercase tracking-wide text-white hover:bg-white/10"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contacts"
                onClick={() => setOpen(false)}
                className="block rounded px-4 py-2 text-[13px] font-medium uppercase tracking-wide text-white hover:bg-white/10"
              >
                Contacts
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
