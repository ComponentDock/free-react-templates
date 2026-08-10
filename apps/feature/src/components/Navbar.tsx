import { useEffect, useState, type FocusEvent } from 'react'
import { Moon, Sun } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const menuLinks = ['Lifestyle', 'Travels', 'Gallery', 'About Me'] as const
const blogDropdownLinks = ['Commercial', 'Apartment', 'House', 'Building'] as const

const menuLinkClass =
  'px-[15px] py-[10px] text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft transition-colors hover:text-brand-500 dark:text-gray-300 dark:hover:text-brand-500'

export function Navbar() {
  const [dark, setDark] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    return () => {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  const closeDropdown = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setDropdownOpen(false)
    }
  }

  return (
    <header className="border-b border-line-300 bg-white transition-colors dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-10 lg:px-16">
        <a
          href="#home"
          className="font-display text-[40px] leading-10 text-black transition-colors dark:text-white"
        >
          Feature<span className="text-brand-500">.</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center lg:flex">
          <a
            href="#home"
            aria-current="page"
            className={cn(
              menuLinkClass,
              'text-brand-500 underline decoration-brand-500 decoration-2 underline-offset-8 dark:text-brand-500',
            )}
          >
            Home
          </a>
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
            onFocus={() => setDropdownOpen(true)}
            onBlur={closeDropdown}
          >
            <button
              type="button"
              aria-expanded={dropdownOpen}
              className={cn(menuLinkClass, 'inline-flex items-center')}
            >
              Blog
            </button>
            {dropdownOpen && (
              <ul className="absolute left-0 top-full w-35 bg-white py-2 shadow-[0_14px_33px_-9px_rgba(0,0,0,0.75)] dark:bg-gray-900">
                {blogDropdownLinks.map((label) => (
                  <li key={label}>
                    <a
                      href="#"
                      className="block px-4 py-2 text-[13px] text-gray-500 transition-colors hover:text-brand-500 dark:text-gray-300"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {menuLinks.map((label) => (
            <a key={label} href="#" className={menuLinkClass}>
              {label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setDark((current) => !current)}
          aria-label="Toggle dark mode"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line-300 text-ink-body transition-colors hover:border-brand-500 hover:text-brand-500 dark:border-gray-700 dark:text-gray-300"
        >
          {dark ? (
            <Sun className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Moon className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>
    </header>
  )
}
