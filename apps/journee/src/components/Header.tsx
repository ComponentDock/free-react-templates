import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import {
  blogDropdown,
  hotlineHref,
  hotlineLabel,
  menuCloseLabel,
  menuTriggerLabel,
  mobileNavLabel,
  navItems,
  navLabel,
  pagesDropdown,
  siteName,
} from '../data'

export function Header() {
  const [open, setOpen] = useState(false)
  const [blogOpen, setBlogOpen] = useState(false)
  const [pagesOpen, setPagesOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-[1320px] items-center justify-between px-6 py-4">
        <a href="#home-section" className="font-script text-4xl text-[#ff6e00]">
          {siteName}
        </a>
        <nav aria-label={navLabel} className="hidden lg:block">
          <ul className="flex items-center">
            {navItems.map((item) => (
              <li key={item.label} className="relative">
                <a
                  href={item.href}
                  onMouseEnter={() => {
                    if (item.label === 'Blog') setBlogOpen(true)
                    if (item.label === 'pages') setPagesOpen(true)
                  }}
                  onMouseLeave={() => {
                    if (item.label === 'Blog') setBlogOpen(false)
                    if (item.label === 'pages') setPagesOpen(false)
                  }}
                  className="flex items-center gap-1 px-5 py-9 font-sans text-[15px] capitalize text-white transition-colors hover:text-brand"
                >
                  {item.label}
                  {item.dropdown && <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />}
                </a>
                {item.label === 'Blog' && blogOpen && (
                  <ul className="absolute left-0 top-full w-40 bg-white py-2 shadow-lg">
                    {blogDropdown.map((link) => (
                      <li key={link}>
                        <a
                          href="#blog-section"
                          className="block px-4 py-2 text-sm capitalize text-ink hover:text-sky"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
                {item.label === 'pages' && pagesOpen && (
                  <ul className="absolute left-0 top-full w-40 bg-white py-2 shadow-lg">
                    {pagesDropdown.map((link) => (
                      <li key={link}>
                        <a
                          href="#popular-section"
                          className="block px-4 py-2 text-sm capitalize text-ink hover:text-sky"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden items-center lg:flex">
          <a
            href={hotlineHref}
            className="rounded-full bg-brand px-9 py-3 font-heading text-[15px] font-medium text-black transition-colors hover:bg-transparent hover:text-brand hover:ring-2 hover:ring-brand"
          >
            {hotlineLabel}
          </a>
        </div>
        <button
          type="button"
          aria-label={open ? menuCloseLabel : menuTriggerLabel}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center text-white lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav aria-label={mobileNavLabel} className="bg-ink/95 px-6 pb-6 backdrop-blur lg:hidden">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.label} className="border-b border-white/10 last:border-0">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-3 font-sans text-[15px] capitalize text-white hover:text-brand"
                >
                  {item.label}
                  {item.dropdown && <ChevronDown className="h-4 w-4" aria-hidden="true" />}
                </a>
                {item.label === 'Blog' &&
                  blogDropdown.map((link) => (
                    <a
                      key={link}
                      href="#blog-section"
                      onClick={() => setOpen(false)}
                      className="block py-2 pl-6 text-sm capitalize text-white/80 hover:text-sky"
                    >
                      {link}
                    </a>
                  ))}
                {item.label === 'pages' &&
                  pagesDropdown.map((link) => (
                    <a
                      key={link}
                      href="#popular-section"
                      onClick={() => setOpen(false)}
                      className="block py-2 pl-6 text-sm capitalize text-white/80 hover:text-sky"
                    >
                      {link}
                    </a>
                  ))}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
