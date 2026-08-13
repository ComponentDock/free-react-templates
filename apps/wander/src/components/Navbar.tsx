import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { brandName, navLinks } from '../data'

/* Reference: .site-header — transparent header absolutely positioned over
   the hero (padding 60px 0, z-index above the page) with the Abril Fatface
   brand and a 40x45px hamburger whose three 2px bars rotate into a black X
   when the fullscreen white menu overlay (.site-navbar) is open. */
export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="absolute top-0 left-0 z-[200] w-full px-6 py-[60px] lg:px-16">
        <div className="flex items-center justify-between">
          <a href="#home" className="font-display text-[30px] font-bold leading-none text-white">
            {brandName}
          </a>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((value) => !value)}
            className="relative h-[45px] w-10 cursor-pointer"
          >
            <span
              className={cn(
                'absolute left-0 h-0.5 w-full rounded-[9px] transition-all duration-300',
                open ? 'top-[13px] rotate-45 bg-black' : 'top-0 bg-white',
              )}
            />
            <span
              className={cn(
                'absolute top-[10px] left-0 h-0.5 w-full rounded-[9px] transition-all duration-300',
                open ? 'bg-black opacity-0' : 'bg-white',
              )}
            />
            <span
              className={cn(
                'absolute left-0 h-0.5 w-full rounded-[9px] transition-all duration-300',
                open ? 'top-[13px] -rotate-45 bg-black' : 'top-[20px] bg-white',
              )}
            />
          </button>
        </div>
      </header>
      {open && (
        <nav
          id="site-nav"
          aria-label="Main"
          className="fixed inset-0 z-[150] overflow-y-auto bg-white"
        >
          <ul className="flex min-h-full flex-col items-center justify-center gap-6 px-6 py-24">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'font-display text-[40px] text-ink transition-colors hover:text-brand',
                    link.active && 'text-brand',
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  )
}
