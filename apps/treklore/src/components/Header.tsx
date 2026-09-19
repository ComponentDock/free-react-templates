import { useState } from 'react'
import { cn } from '@free-react-templates/ui'

const navLinks = ['Home', 'About us', 'Services', 'News', 'Contact']

const socialIcons = [
  {
    name: 'Pinterest',
    path: 'M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641 0 12.017 0z',
  },
  {
    name: 'Facebook',
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
  {
    name: 'Twitter',
    path: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z',
  },
  {
    name: 'Dribbble',
    path: 'M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.81zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.91 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z',
  },
  {
    name: 'Behance',
    path: 'M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.767-.64.16-1.315.25-2.04.25H0V4.51h6.938v-.007zM6.545 10.16c.6 0 1.096-.166 1.486-.5.39-.333.58-.82.58-1.47 0-.42-.06-.78-.18-1.09-.12-.3-.29-.53-.51-.68-.22-.15-.47-.26-.76-.32-.29-.06-.58-.09-.89-.09H3.36v4.15h3.185zm.326 5.87c.34 0 .66-.04.96-.13.3-.09.56-.23.77-.4.21-.17.38-.39.5-.65.12-.26.18-.58.18-.95 0-.75-.22-1.3-.65-1.63-.44-.33-1.03-.5-1.77-.5H3.36v4.26h3.511zM21.063 4.84h-5.31v1.57h5.31V4.84zm.74 5.3c-.35-.47-.83-.84-1.43-1.12-.6-.28-1.26-.42-1.98-.42-.67 0-1.29.12-1.85.36-.56.24-1.03.57-1.4.98-.37.42-.65.91-.84 1.48-.19.57-.28 1.17-.28 1.8 0 .63.1 1.24.29 1.82.2.58.48 1.08.85 1.5.37.42.83.75 1.37.99.55.24 1.15.36 1.81.36.92 0 1.71-.25 2.37-.75.66-.5 1.09-1.35 1.28-2.56h-3.7c-.06.57-.35.87-.86.87-.38 0-.67-.12-.88-.37-.21-.25-.32-.6-.33-1.05h6.3c.03-.2.04-.43.04-.7 0-.82-.15-1.54-.44-2.17l.01-.02zm-6.38.64c.08-.53.27-.94.57-1.24.3-.3.67-.45 1.12-.45.42 0 .77.15 1.06.44.29.3.47.7.52 1.22h-3.27z',
  },
  {
    name: 'LinkedIn',
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav role="navigation" aria-label="Main navigation" className="bg-navy/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          {/* Logo */}
          <a
            href="/"
            className="font-display text-2xl font-bold uppercase tracking-wider text-white"
          >
            Treklore
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-8 md:flex" role="menubar">
            {navLinks.map((link) => (
              <li key={link} role="none">
                <a
                  role="menuitem"
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className="font-display text-sm font-medium uppercase tracking-wide text-white/80 transition hover:text-white"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side: phone + social */}
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="tel:00-5644567833"
              className="text-sm text-white/70 transition hover:text-white"
            >
              Call us: 00-56 445 678 33
            </a>
            <div className="flex items-center gap-2">
              {socialIcons.map((icon) => (
                <a
                  key={icon.name}
                  href="#"
                  aria-label={icon.name}
                  className="text-white/50 transition hover:text-white"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d={icon.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="flex flex-col gap-1 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <span
              className={cn(
                'h-0.5 w-6 bg-white transition-transform',
                mobileOpen && 'translate-y-1.5 rotate-45',
              )}
            />
            <span
              className={cn('h-0.5 w-6 bg-white transition-opacity', mobileOpen && 'opacity-0')}
            />
            <span
              className={cn(
                'h-0.5 w-6 bg-white transition-transform',
                mobileOpen && '-translate-y-1.5 -rotate-45',
              )}
            />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-white/10 px-4 pb-4 md:hidden">
            <ul className="flex flex-col gap-3 py-3">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block font-display text-sm font-medium uppercase tracking-wide text-white/80 hover:text-white"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            <a href="tel:00-5644567833" className="text-sm text-white/70">
              Call us: 00-56 445 678 33
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
