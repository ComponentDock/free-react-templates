const variants = [
  {
    border: 'border-primary',
    text: 'text-primary',
    shadow: 'shadow-[3px_5px_0_0_var(--color-primary-shadow)]',
    hover: 'hover:bg-primary hover:text-white',
  },
  {
    border: 'border-secondary',
    text: 'text-secondary',
    shadow: 'shadow-[3px_5px_0_0_var(--color-secondary-shadow)]',
    hover: 'hover:bg-secondary hover:text-white',
  },
  {
    border: 'border-tertiary',
    text: 'text-tertiary',
    shadow: 'shadow-[3px_5px_0_0_var(--color-tertiary-shadow)]',
    hover: 'hover:bg-tertiary hover:text-white',
  },
  {
    border: 'border-quarternary',
    text: 'text-quarternary',
    shadow: 'shadow-[3px_5px_0_0_var(--color-quarternary-shadow)]',
    hover: 'hover:bg-quarternary hover:text-white',
  },
]

export function OutlineButtons() {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {variants.map((v, i) => (
        <button
          key={`outline-${i}`}
          type="button"
          className={`${v.border} ${v.text} ${v.shadow} ${v.hover} rounded border bg-white px-4 py-3 text-sm font-medium transition-all hover:-translate-y-0.5`}
        >
          Default
        </button>
      ))}
    </div>
  )
}
