import { cn } from '@free-react-templates/ui'

interface NavbarProps {
  className?: string
}

export function Navbar({ className }: NavbarProps) {
  return (
    <header className={cn('absolute top-0 left-0 z-50 w-full', className)}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="text-2xl font-semibold tracking-wide text-white">
          Filament
        </a>
        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-8">
            {['Home', 'Generic', 'Elements'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium uppercase tracking-wider text-white/80 transition-colors hover:text-white"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
