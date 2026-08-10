import { useEffect, useRef, useState } from 'react'
import { ChevronDown, Menu } from 'lucide-react'
import { navLinks, recipeCategories } from '../data'

interface NavbarProps {
  onOpenPanel: () => void
}

export function Navbar({ onOpenPanel }: NavbarProps) {
  const [recipesOpen, setRecipesOpen] = useState(false)
  const menuRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    if (!recipesOpen) return
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setRecipesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [recipesOpen])

  return (
    <header className="relative z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <button
          type="button"
          aria-label="Open trending panel"
          onClick={onOpenPanel}
          className="text-ink transition-colors hover:text-brand"
        >
          <Menu className="h-6 w-6" />
        </button>

        <div className="text-center">
          <a href="#home" className="font-display text-3xl font-semibold text-ink">
            Savory
          </a>
          <p className="text-[11px] tracking-[0.2em] text-meta uppercase">Food Blog</p>
        </div>

        <a
          href="#login"
          className="hidden text-sm font-semibold text-ink transition-colors hover:text-brand sm:block"
        >
          Login / Register
        </a>
      </div>

      <nav aria-label="Primary" className="hidden border-t border-gray-100 md:block">
        <ul className="mx-auto flex max-w-7xl items-center justify-center gap-8 px-4 py-3">
          {navLinks.map((link) =>
            link === 'Recipes' ? (
              <li key={link} ref={menuRef} className="relative">
                <button
                  type="button"
                  aria-expanded={recipesOpen}
                  aria-controls="recipes-mega-menu"
                  onClick={() => setRecipesOpen((open) => !open)}
                  className="flex items-center gap-1 text-[15px] font-semibold text-ink transition-colors hover:text-brand"
                >
                  {link}
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
                {recipesOpen && (
                  <div
                    id="recipes-mega-menu"
                    className="absolute left-1/2 top-full w-56 -translate-x-1/2 border border-gray-100 bg-white p-4 shadow-lg"
                  >
                    <ul className="space-y-2">
                      {recipeCategories.map((category) => (
                        <li key={category}>
                          <a
                            href="#recipes"
                            onClick={() => setRecipesOpen(false)}
                            className="block text-sm font-medium text-ink transition-colors hover:text-brand"
                          >
                            {category}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ) : (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  className="text-[15px] font-semibold text-ink transition-colors hover:text-brand"
                >
                  {link}
                </a>
              </li>
            ),
          )}
        </ul>
      </nav>
    </header>
  )
}
