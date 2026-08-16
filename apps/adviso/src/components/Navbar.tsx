import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { blogDropdown, navLinks } from '../data'

/** Transparent navbar over the hero: white wordmark, uppercase links with a
 *  Blog dropdown, a mint-underline "Let's Talk" link, and a mobile hamburger
 *  that expands into a stacked menu. */
export function Navbar() {
  const [open, setOpen] = useState(false)
  const [blogOpen, setBlogOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="flex items-center justify-between px-6 py-7 lg:px-16">
        <a
          href="#home"
          className="font-display text-2xl font-semibold uppercase tracking-wide text-white"
        >
          Adviso<span className="text-brand">.</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) =>
            link.label === 'Blog' ? (
              <div key={link.label} className="relative">
                <button
                  type="button"
                  aria-expanded={blogOpen}
                  onClick={() => setBlogOpen((value) => !value)}
                  className="text-sm font-medium uppercase tracking-wide text-white transition-colors hover:text-brand"
                >
                  {link.label}
                </button>
                {blogOpen && (
                  <div className="absolute left-0 top-full mt-4 bg-white py-2 shadow-lg">
                    {blogDropdown.map((item) => (
                      <a
                        key={item}
                        href="#blog"
                        onClick={() => setBlogOpen(false)}
                        className="block whitespace-nowrap px-5 py-2 text-sm text-ink hover:text-brand"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium uppercase tracking-wide text-white transition-colors hover:text-brand"
              >
                {link.label}
              </a>
            ),
          )}
        </nav>

        <div className="hidden items-center lg:flex">
          <a href="#contact" className="link-underline">
            Let&apos;s Talk
          </a>
        </div>

        <button
          type="button"
          className="p-2 text-white lg:hidden"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? (
            <X className="h-7 w-7" aria-hidden="true" />
          ) : (
            <Menu className="h-7 w-7" aria-hidden="true" />
          )}
        </button>
      </div>

      {open && (
        <nav aria-label="Mobile navigation" className="bg-ink px-6 pb-6 lg:hidden">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-3 text-sm font-medium uppercase tracking-wide text-white"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="link-underline mt-5 w-fit">
              Let&apos;s Talk
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
