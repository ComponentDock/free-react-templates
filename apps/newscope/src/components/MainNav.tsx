import { cn } from '@free-react-templates/ui'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const categories = [
  'Home',
  'News',
  'Entertainment',
  'Fashion',
  'Life Style',
  'Technology',
  'Travel',
]

export function MainNav() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="border-b border-gray-200 bg-white" aria-label="Main navigation">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4">
        <ul className="hidden gap-6 py-3 font-body text-sm font-medium md:flex">
          {categories.map((cat) => (
            <li key={cat}>
              <a
                href="#"
                className={cn(
                  'transition-colors hover:text-brand-pink',
                  cat === 'Home' ? 'text-brand-pink' : 'text-text-dark',
                )}
              >
                {cat}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="flex items-center gap-1 py-3 font-body text-sm font-medium text-text-dark md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          <span>Features</span>
        </button>
      </div>
      {mobileOpen && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <ul className="flex flex-col gap-0 px-4 py-2">
            {categories.map((cat) => (
              <li key={cat}>
                <a
                  href="#"
                  className={cn(
                    'block py-2 font-body text-sm font-medium transition-colors hover:text-brand-pink',
                    cat === 'Home' ? 'text-brand-pink' : 'text-text-dark',
                  )}
                >
                  {cat}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
