import { useState } from 'react'
import { Menu, Moon, Sun } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const navLinks = ['Blog', 'About', 'Contact'] as const

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(false)

  const toggleDark = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white transition-colors dark:bg-gray-950">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="flex items-center font-sans text-2xl font-bold text-ink dark:text-white"
        >
          I
          <span className="[-webkit-text-fill-color:transparent] [-webkit-text-stroke:1px_#111111] dark:[-webkit-text-stroke:1px_#fff]">
            nkwe
          </span>
          ll.
        </a>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Toggle dark mode"
            onClick={toggleDark}
            className="flex h-10 w-10 items-center justify-center rounded-[4px] text-ink transition-colors hover:text-brand dark:text-gray-300"
          >
            {dark ? (
              <Sun className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Moon className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
          <button
            type="button"
            aria-expanded={open}
            onClick={() => setOpen((current) => !current)}
            className="flex items-center gap-2 text-xs font-medium uppercase tracking-[2px] text-ink transition-colors hover:text-brand lg:hidden dark:text-gray-300"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
            Menu
          </button>
        </div>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((label, index) => (
            <a
              key={label}
              href="#blog"
              aria-current={index === 0 ? 'page' : undefined}
              className={cn(
                'text-xs font-medium uppercase tracking-[2px] text-ink transition-colors hover:text-brand dark:text-gray-300 dark:hover:text-brand',
                index === 0 && 'text-brand dark:text-brand',
              )}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>

      {open && (
        <nav
          aria-label="Mobile"
          className="border-t border-gray-100 bg-white px-6 py-4 lg:hidden dark:border-gray-800 dark:bg-gray-950"
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((label, index) => (
              <li key={label}>
                <a
                  href="#blog"
                  aria-current={index === 0 ? 'page' : undefined}
                  className={cn(
                    'text-xs font-medium uppercase tracking-[2px] text-ink transition-colors hover:text-brand dark:text-gray-300',
                    index === 0 && 'text-brand dark:text-brand',
                  )}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
