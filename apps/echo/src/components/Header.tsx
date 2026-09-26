import { Menu } from 'lucide-react'

interface HeaderProps {
  onMenuToggle: () => void
}

export function Header({ onMenuToggle }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between bg-white px-6 py-4 shadow-sm lg:px-8">
      <a
        href="#home"
        className="flex items-center gap-3 text-lg font-bold uppercase tracking-wide text-ink"
      >
        <span
          className="inline-block h-10 w-10 rounded-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://picsum.photos/seed/echo-author/400/400')`,
          }}
          aria-hidden="true"
        />
        Echo
      </a>
      <button onClick={onMenuToggle} className="text-ink lg:hidden" aria-label="Open menu">
        <Menu className="h-6 w-6" />
      </button>
    </header>
  )
}
