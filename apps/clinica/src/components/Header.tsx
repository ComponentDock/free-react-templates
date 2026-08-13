import { useEffect, useState } from 'react'
import { Menu, Phone, Plus, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { blogSubmenu, brand, navLinks, phone } from '../data'

/** White sticky header: logo left, centered nav (Blog carries a hover
 *  submenu), blue-gradient phone button right. On scroll it becomes fixed
 *  with a soft shadow and compact link padding; below lg a slide-down
 *  mobile panel lists the nav links and keeps the phone button. */
export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = cn(
    'px-6 py-4 text-[16px] font-semibold capitalize text-[#102039] transition-colors hover:text-brand',
    scrolled && 'py-[20px]',
  )

  return (
    <header
      data-testid="site-header"
      className={cn(
        'fixed inset-x-0 top-0 z-[1999] w-full bg-white transition-all',
        scrolled && 'shadow-[0_10px_15px_rgba(25,25,25,0.1)]',
      )}
    >
      <div className="mx-auto flex max-w-[1320px] items-center justify-between px-4 lg:px-8">
        <a href="#home-section" className="flex items-center gap-2 py-4">
          <Plus className="h-7 w-7 text-brand" strokeWidth={3} aria-hidden="true" />
          <span className="font-sans text-2xl font-bold text-[#030431]">{brand.name}.</span>
        </a>

        <nav aria-label="Main" className="hidden items-center lg:flex">
          {navLinks.map((item) =>
            item.label === 'Blog' ? (
              <div key={item.label} className="group relative">
                <a href={item.href} className={linkClass}>
                  {item.label}
                </a>
                <div className="invisible absolute left-0 top-full w-[170px] bg-white/90 p-4 opacity-0 shadow-[0_0_10px_3px_rgba(0,0,0,0.05)] transition-all group-hover:visible group-hover:opacity-100">
                  {blogSubmenu.map((sub) => (
                    <a
                      key={sub}
                      href="#blog-section"
                      className="block py-2 text-[16px] font-semibold capitalize text-[#102039] transition-colors hover:text-brand"
                    >
                      {sub}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a key={item.label} href={item.href} className={linkClass}>
                {item.label}
              </a>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact-section"
            className="hidden items-center gap-2 rounded-md bg-[linear-gradient(to_left,#559af3,#1462f3,#559af3)] bg-[length:200%_auto] px-6 py-4 text-[16px] font-semibold text-white transition-all hover:bg-[position:right_center] md:inline-flex"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {phone}
          </a>
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="clinica-mobile-menu"
            onClick={() => setOpen(true)}
            className="text-[#030431] lg:hidden"
          >
            <Menu className="h-7 w-7" aria-hidden="true" />
          </button>
        </div>
      </div>

      {open && (
        <div
          id="clinica-mobile-menu"
          data-testid="mobile-menu"
          className="border-t border-gray-100 bg-white px-6 pb-6 lg:hidden"
        >
          <div className="flex items-center justify-between py-4">
            <span className="flex items-center gap-2 font-sans text-xl font-bold text-[#030431]">
              <Plus className="h-5 w-5 text-brand" strokeWidth={3} aria-hidden="true" />
              {brand.name}.
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="text-[#030431]"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <nav aria-label="Mobile" className="flex flex-col">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-gray-100 py-3 text-[16px] font-semibold capitalize text-[#102039] transition-colors hover:text-brand"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact-section"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex items-center gap-2 rounded-md bg-[linear-gradient(to_left,#559af3,#1462f3,#559af3)] px-6 py-4 text-[16px] font-semibold text-white"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {phone}
          </a>
        </div>
      )}
    </header>
  )
}
