import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const CATEGORIES = [
  'Lifestyle',
  'Business',
  'Fashion',
  'Design',
  'Health',
  'Harmful',
  'Technology',
  'Travel',
  'Food',
  'Creative',
] as const

export function CategoryNav() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav
      aria-label="Category navigation"
      className="border-b border-border bg-white transition-colors dark:bg-gray-950 dark:border-gray-800"
    >
      <div className="mx-auto max-w-[1140px] px-[15px]">
        {/* Mobile toggle */}
        <div className="flex items-center justify-between py-3 sm:hidden">
          <span className="text-sm font-medium text-ink">Categories</span>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label="Toggle category menu"
            className="text-ink"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Desktop list */}
        <ul className="hidden sm:flex sm:items-center sm:justify-center sm:gap-8">
          {CATEGORIES.map((cat) => (
            <li key={cat}>
              <a
                href={`#${cat.toLowerCase()}`}
                className="block py-4 text-xs font-medium uppercase tracking-[1px] text-ink transition-colors hover:text-accent"
              >
                {cat}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile list */}
        {mobileOpen && (
          <ul className="flex flex-col gap-1 pb-4 sm:hidden">
            {CATEGORIES.map((cat) => (
              <li key={cat}>
                <a
                  href={`#${cat.toLowerCase()}`}
                  className="block py-2 text-sm font-medium uppercase tracking-[1px] text-ink transition-colors hover:text-accent"
                >
                  {cat}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  )
}
