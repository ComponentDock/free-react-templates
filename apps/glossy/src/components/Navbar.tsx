import { useState } from 'react'
import { ChevronDown, Moon, Sun } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { darkModeLabel, navItems } from '../data'

/** Transparent navbar with coral active/hover links, Blog dropdown and dark toggle. */
export function Navbar() {
  const [dark, setDark] = useState(false)

  const toggleDark = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
  }

  return (
    <nav aria-label="Main" className="border-b border-borderline bg-white">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-3">
        <ul className="flex flex-wrap items-center gap-1">
          {navItems.map((item) => (
            <li key={item.label} className="group relative">
              <a
                href="#"
                className={cn(
                  'inline-flex items-center gap-1 px-3 py-2 font-sans text-sm font-semibold text-heading transition-colors hover:text-brand',
                  item.active && 'text-brand',
                )}
              >
                {item.label}
                {item.dropdown && <ChevronDown className="h-4 w-4" aria-hidden="true" />}
              </a>
              {item.dropdown && (
                <div className="invisible absolute top-full left-0 z-30 min-w-[160px] bg-white opacity-0 shadow-lg transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  {item.dropdown.map((label) => (
                    <a
                      key={label}
                      href="#"
                      className="block px-4 py-2 font-sans text-sm text-heading transition-colors hover:text-brand"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
        <button
          type="button"
          aria-label={darkModeLabel}
          aria-pressed={dark}
          onClick={toggleDark}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-borderline text-heading transition-colors hover:border-brand hover:text-brand"
        >
          {dark ? (
            <Sun className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Moon className="h-4 w-4" aria-hidden="true" />
          )}
        </button>
      </div>
    </nav>
  )
}
