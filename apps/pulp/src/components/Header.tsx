interface HeaderProps {
  onOpenMenu: () => void
}

export function Header({ onOpenMenu }: HeaderProps) {
  return (
    <header className="absolute inset-x-0 top-0 z-10 px-6 py-6 sm:px-10">
      <div className="flex items-start justify-between">
        <a href="#home" className="group">
          <span className="block text-xs font-semibold uppercase tracking-[0.3em] text-white transition-colors group-hover:text-gold">
            Pulp
          </span>
          <span className="mt-1 block text-[11px] font-light uppercase tracking-[0.45em] text-white/80">
            Magazine
          </span>
        </a>
        <button
          type="button"
          onClick={onOpenMenu}
          aria-label="Open menu"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <span className="h-0.5 w-8 bg-white" />
          <span className="h-0.5 w-8 bg-white" />
          <span className="h-0.5 w-8 bg-white" />
        </button>
      </div>
    </header>
  )
}
