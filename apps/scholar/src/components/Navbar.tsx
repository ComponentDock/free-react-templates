import { ShoppingCart, Search } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Browse Courses', href: '#courses' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#home" className="font-display text-2xl font-bold tracking-wide text-primary-500">
          Scholar
        </a>

        <div className="hidden items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 sm:flex">
          <Search className="h-4 w-4 text-gray-400" aria-hidden="true" />
          <input
            type="text"
            placeholder="Search courses..."
            className="w-48 bg-transparent text-sm text-gray-600 outline-none placeholder:text-gray-400"
            aria-label="Search courses"
          />
        </div>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-primary-500"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="relative text-gray-600 hover:text-primary-500"
            aria-label="Shopping cart, 3 items"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-accent-400 text-[10px] font-bold text-white">
              3
            </span>
          </button>

          <Button
            variant="primary"
            className="hidden rounded-full bg-primary-500 px-5 py-2 text-sm font-semibold text-white hover:bg-primary-600 sm:inline-flex"
          >
            Sign In
          </Button>
        </div>
      </div>
    </header>
  )
}
