import { useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { categoryMenu, travelMenu } from '../data'

type MenuKey = 'travel' | 'categories'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [menu, setMenu] = useState<MenuKey | null>(null)
  const [dark, setDark] = useState(false)

  const toggleDark = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
  }

  const toggleMenu = (key: MenuKey) => setMenu((current) => (current === key ? null : key))

  const linkClass =
    'px-4 py-[1.7rem] text-[13px] font-medium uppercase tracking-[0.05em] text-ink transition-colors hover:text-brand dark:text-gray-200 dark:hover:text-brand'

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="relative mx-auto max-w-7xl px-6 pb-3 pt-5">
        <button
          type="button"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((current) => !current)}
          className="absolute left-6 top-1/2 -translate-y-1/2 text-ink md:hidden dark:text-gray-200"
        >
          {mobileOpen ? (
            <X className="h-7 w-7" aria-hidden="true" />
          ) : (
            <Menu className="h-7 w-7" aria-hidden="true" />
          )}
        </button>
        <h1 className="text-center font-sans text-[40px] font-bold leading-none text-ink md:text-[90px] dark:text-white">
          <a href="#home">Gazette</a>
        </h1>
      </div>

      <nav
        aria-label="Primary"
        className="relative mx-auto hidden max-w-7xl items-center justify-center md:flex"
      >
        <a href="#home" aria-current="page" className={cn(linkClass, 'text-brand dark:text-brand')}>
          Home
        </a>

        <div className="relative">
          <button
            type="button"
            aria-expanded={menu === 'travel'}
            onClick={() => toggleMenu('travel')}
            className={cn(linkClass, menu === 'travel' && 'text-brand dark:text-brand')}
          >
            Travel
          </button>
          {menu === 'travel' && (
            <ul className="absolute left-0 top-full z-40 w-44 bg-white shadow-[0_2px_30px_rgba(0,0,0,.2)] dark:bg-gray-900">
              {travelMenu.map((item) => (
                <li key={item}>
                  <a
                    href="#home"
                    className="block px-4 py-2 text-sm text-ink transition-colors hover:bg-brand hover:text-white dark:text-gray-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="relative">
          <button
            type="button"
            aria-expanded={menu === 'categories'}
            onClick={() => toggleMenu('categories')}
            className={cn(linkClass, menu === 'categories' && 'text-brand dark:text-brand')}
          >
            Categories
          </button>
          {menu === 'categories' && (
            <ul className="absolute left-0 top-full z-40 w-44 bg-white shadow-[0_2px_30px_rgba(0,0,0,.2)] dark:bg-gray-900">
              {categoryMenu.map((item) => (
                <li key={item}>
                  <a
                    href="#home"
                    className="block px-4 py-2 text-sm text-ink transition-colors hover:bg-brand hover:text-white dark:text-gray-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <a href="#about" className={linkClass}>
          About
        </a>
        <a href="#contact" className={linkClass}>
          Contact
        </a>

        <button
          type="button"
          aria-label="Toggle dark mode"
          onClick={toggleDark}
          className="absolute right-6 top-1/2 -translate-y-1/2 text-ink transition-colors hover:text-brand dark:text-gray-200 dark:hover:text-brand"
        >
          {dark ? (
            <Sun className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Moon className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      {mobileOpen && (
        <nav
          aria-label="Mobile"
          className="border-t border-line bg-white md:hidden dark:border-gray-800 dark:bg-gray-950"
        >
          <ul className="flex flex-col px-6 py-4">
            <li>
              <a
                href="#home"
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-[13px] font-medium uppercase tracking-[0.05em] text-brand dark:text-brand"
              >
                Home
              </a>
            </li>
            <li>
              <button
                type="button"
                aria-expanded={menu === 'travel'}
                onClick={() => toggleMenu('travel')}
                className="block w-full py-2 text-left text-[13px] font-medium uppercase tracking-[0.05em] text-ink dark:text-gray-200"
              >
                Travel
              </button>
              {menu === 'travel' && (
                <ul className="pl-4">
                  {travelMenu.map((item) => (
                    <li key={item}>
                      <a
                        href="#home"
                        onClick={() => setMobileOpen(false)}
                        className="block py-1.5 text-sm text-ink dark:text-gray-300"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <button
                type="button"
                aria-expanded={menu === 'categories'}
                onClick={() => toggleMenu('categories')}
                className="block w-full py-2 text-left text-[13px] font-medium uppercase tracking-[0.05em] text-ink dark:text-gray-200"
              >
                Categories
              </button>
              {menu === 'categories' && (
                <ul className="pl-4">
                  {categoryMenu.map((item) => (
                    <li key={item}>
                      <a
                        href="#home"
                        onClick={() => setMobileOpen(false)}
                        className="block py-1.5 text-sm text-ink dark:text-gray-300"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <a
                href="#about"
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-[13px] font-medium uppercase tracking-[0.05em] text-ink dark:text-gray-200"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-[13px] font-medium uppercase tracking-[0.05em] text-ink dark:text-gray-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
