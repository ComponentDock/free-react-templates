interface HamburgerToggleProps {
  isOpen: boolean
  onToggle: () => void
}

export function HamburgerToggle({ isOpen, onToggle }: HamburgerToggleProps) {
  return (
    <button
      onClick={onToggle}
      aria-label="Toggle menu"
      aria-expanded={isOpen}
      className="group flex h-[30px] w-[30px] flex-col justify-center gap-[3px] transition-all"
    >
      <span
        className={`block h-1 bg-black transition-all duration-300 ${
          isOpen ? 'w-[30px] rotate-45 translate-y-[8px]' : 'w-[30px]'
        }`}
      />
      <span
        className={`block h-1 bg-black transition-all duration-300 ${
          isOpen ? 'w-[30px] opacity-0' : 'w-[24px] group-hover:ml-[6px]'
        }`}
      />
      <span
        className={`block h-1 bg-black transition-all duration-300 ${
          isOpen ? 'w-[30px] -rotate-45 -translate-y-[4px]' : 'w-[15px] group-hover:ml-[15px]'
        }`}
      />
      <span
        className={`block h-1 bg-black transition-all duration-300 ${
          isOpen ? 'w-[30px] opacity-0' : 'w-[30px]'
        }`}
      />
    </button>
  )
}
