import { cn } from '@free-react-templates/ui'
import { brandName, menuCloseLabel, menuOpenLabel } from '../data'

interface HeaderProps {
  menuOpen: boolean
  onToggleMenu: () => void
}

export function Header({ menuOpen, onToggleMenu }: HeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="flex items-center justify-between px-6 py-6 lg:px-12">
        <a
          href="#top"
          aria-label={brandName}
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60"
        >
          <span className="font-sans text-xl font-normal uppercase tracking-[5px] text-white drop-shadow-md">
            {brandName}
          </span>
        </a>

        <button
          type="button"
          onClick={onToggleMenu}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? menuCloseLabel : menuOpenLabel}
          className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-full bg-white/90 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60"
        >
          <span
            className={cn(
              'h-[2px] w-6 bg-black transition-transform duration-300',
              menuOpen && 'translate-y-[7px] rotate-45',
            )}
          />
          <span
            className={cn(
              'h-[2px] w-6 bg-black transition-opacity duration-300',
              menuOpen && 'opacity-0',
            )}
          />
          <span
            className={cn(
              'h-[2px] w-6 bg-black transition-transform duration-300',
              menuOpen && '-translate-y-[7px] -rotate-45',
            )}
          />
        </button>
      </div>
    </header>
  )
}
