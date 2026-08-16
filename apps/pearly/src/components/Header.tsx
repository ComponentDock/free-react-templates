import { useEffect, useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { blogDropdown, clinicName, navLinks } from '../data'

/* Tooth glyph used for the clinic logo and hero decoration. */
export function ToothMark({
  className,
  ...props
}: { className?: string } & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M12 3.5c-2.2 0-3.6 1.3-5 1.3-1.6 0-2.6-1.3-4.3-1.3C1 3.5 1 5.9 1 7.2c0 2.3 1.7 4.9 2.1 7.1.5 2.7.4 6.2 2.3 6.2h1.2c1.6 0 1.4-3.2 2.4-5 .6-1.1 1-3.2 2-3.2s1.4 2.1 2 3.2c1 1.8.8 5 2.4 5h1.2c1.9 0 1.8-3.5 2.3-6.2C20.3 12.1 22 9.5 22 7.2c0-1.3 0-3.7-1.7-3.7-1.7 0-2.7 1.3-4.3 1.3-1.4 0-2.8-1.3-4-1.3Z" />
    </svg>
  )
}

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
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
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled || menuOpen
          ? 'bg-white shadow-[0_2px_20px_rgba(18,44,119,0.08)]'
          : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="flex items-center gap-2 text-navy"
          aria-label={`${clinicName} — dental clinic home`}
        >
          <ToothMark className="h-9 w-9 text-mint" />
          <span className="text-2xl font-bold tracking-tight">{clinicName}</span>
        </a>

        <nav aria-label="Primary navigation" className="hidden lg:block">
          <ul className="flex items-center gap-8 text-[15px] font-medium text-navy">
            {navLinks.slice(0, 3).map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-mint">
                  {link.label}
                </a>
              </li>
            ))}
            <li className="relative">
              <button
                type="button"
                onClick={() => setBlogOpen((open) => !open)}
                aria-expanded={blogOpen}
                className="flex items-center gap-1 hover:text-mint"
              >
                Blog
                <ChevronDown
                  className={cn('h-4 w-4 transition-transform', blogOpen && 'rotate-180')}
                />
              </button>
              {blogOpen && (
                <ul className="absolute left-0 top-full mt-3 w-44 border border-navy/10 bg-white py-2 shadow-lg">
                  {blogDropdown.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        onClick={() => setBlogOpen(false)}
                        className="block px-4 py-2 text-sm text-body hover:bg-mist hover:text-navy"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <a href={navLinks[4].href} className="hover:text-mint">
                {navLinks[4].label}
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden bg-mint px-[33px] py-[13px] text-[15px] font-medium text-white transition-colors hover:bg-navy sm:inline-block"
          >
            Make Appointment
          </a>
          <button
            type="button"
            className="text-navy lg:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-navy/10 bg-white px-4 pb-6 pt-2 lg:hidden"
        >
          <ul className="flex flex-col gap-1 text-[15px] font-medium text-navy">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2.5 hover:text-mint"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-3 inline-block bg-mint px-[33px] py-[13px] text-[15px] font-medium text-white hover:bg-navy"
          >
            Make Appointment
          </a>
        </nav>
      )}
    </header>
  )
}
