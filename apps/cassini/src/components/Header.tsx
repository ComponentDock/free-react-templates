import { Menu } from 'lucide-react'

interface HeaderProps {
  onMenuToggle: () => void
}

export default function Header({ onMenuToggle }: HeaderProps) {
  return (
    <header className="flex items-center justify-between px-10 py-6">
      <a
        href="/"
        className="text-2xl font-bold text-white"
        style={{ fontFamily: 'var(--font-primary)' }}
      >
        Cassini
      </a>
      <button
        type="button"
        onClick={onMenuToggle}
        className="text-white transition-colors hover:text-[var(--color-brand)]"
        aria-label="Open menu"
      >
        <Menu className="h-7 w-7" />
      </button>
    </header>
  )
}
