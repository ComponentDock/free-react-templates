import { Moon, Sun } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface NavbarProps {
  isDark?: boolean
  onToggleDark?: () => void
}

export function Navbar({ isDark = false, onToggleDark }: NavbarProps) {
  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="text-xl font-bold text-[--color-heading]">
          Calmark
        </a>
        <div className="hidden items-center gap-6 md:flex">
          <a
            href="#calendar"
            className="text-sm font-medium text-[--color-body] transition-colors hover:text-[--color-accent]"
          >
            Calendar
          </a>
          <a
            href="#features"
            className="text-sm font-medium text-[--color-body] transition-colors hover:text-[--color-accent]"
          >
            Features
          </a>
          <button
            onClick={onToggleDark}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className={cn(
              'flex h-9 w-9 items-center justify-center rounded-full border border-[--color-border] transition-colors hover:bg-gray-100',
            )}
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </div>
    </nav>
  )
}
