interface OffcanvasToggleProps {
  onClick: () => void
}

export function OffcanvasToggle({ onClick }: OffcanvasToggleProps) {
  return (
    <button
      onClick={onClick}
      className="fixed top-5 right-5 z-[89] text-xs uppercase tracking-[0.1em] text-heading hover:opacity-70 transition-opacity duration-300"
      aria-label="Toggle navigation menu"
    >
      Menu
    </button>
  )
}
