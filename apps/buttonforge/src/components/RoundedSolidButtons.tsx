const colors = [
  {
    bg: 'bg-primary',
    shadow: 'shadow-[3px_5px_0_0_var(--color-primary-shadow)]',
    hover: 'hover:bg-primary/90',
  },
  {
    bg: 'bg-secondary',
    shadow: 'shadow-[3px_5px_0_0_var(--color-secondary-shadow)]',
    hover: 'hover:bg-secondary/90',
  },
  {
    bg: 'bg-tertiary',
    shadow: 'shadow-[3px_5px_0_0_var(--color-tertiary-shadow)]',
    hover: 'hover:bg-tertiary/90',
  },
  {
    bg: 'bg-quarternary',
    shadow: 'shadow-[3px_5px_0_0_var(--color-quarternary-shadow)]',
    hover: 'hover:bg-quarternary/90',
  },
]

export function RoundedSolidButtons() {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {colors.map((c, i) => (
        <button
          key={`rounded-solid-${i}`}
          type="button"
          className={`${c.bg} ${c.shadow} ${c.hover} rounded-full px-4 py-3 text-sm font-medium text-white transition-all hover:-translate-y-0.5`}
        >
          Default
        </button>
      ))}
    </div>
  )
}
