import { Search } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const NAV_LINKS = [
  { label: 'Home', href: '#home', active: true },
  { label: 'About', href: '#about' },
  { label: 'Academics', href: '#academics' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Courses', href: '#courses' },
  { label: 'Athletics', href: '#athletics' },
  { label: 'Campus Life', href: '#campus-life' },
]

export function Navbar() {
  return (
    <nav className="border-b border-gray-100 bg-white" aria-label="Main navigation">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a href="#home" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-400 font-display text-lg font-bold text-primary-400">
            S
          </div>
          <span className="font-display text-xl font-bold text-ink">Scholarly</span>
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary-400',
                link.active ? 'border-b-2 border-primary-400 pb-0.5 text-primary-400' : 'text-ink',
              )}
            >
              {link.label}
            </a>
          ))}
          <button
            aria-label="Search"
            className="ml-2 text-gray-400 transition-colors hover:text-ink"
          >
            <Search className="h-5 w-5" />
          </button>
        </div>
      </div>
    </nav>
  )
}
