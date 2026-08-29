const colors = [
  {
    bg: 'bg-blue',
    shadow: 'shadow-[3px_5px_0_0_var(--color-blue-shadow)]',
    hover: 'hover:bg-blue/90',
  },
  {
    bg: 'bg-indigo',
    shadow: 'shadow-[3px_5px_0_0_var(--color-indigo-shadow)]',
    hover: 'hover:bg-indigo/90',
  },
  {
    bg: 'bg-purple',
    shadow: 'shadow-[3px_5px_0_0_var(--color-purple-shadow)]',
    hover: 'hover:bg-purple/90',
  },
  {
    bg: 'bg-pink',
    shadow: 'shadow-[3px_5px_0_0_var(--color-pink-shadow)]',
    hover: 'hover:bg-pink/90',
  },
  {
    bg: 'bg-red',
    shadow: 'shadow-[3px_5px_0_0_var(--color-red-shadow)]',
    hover: 'hover:bg-red/90',
  },
  {
    bg: 'bg-orange',
    shadow: 'shadow-[3px_5px_0_0_var(--color-orange-shadow)]',
    hover: 'hover:bg-orange/90',
  },
  {
    bg: 'bg-yellow',
    shadow: 'shadow-[3px_5px_0_0_var(--color-yellow-shadow)]',
    hover: 'hover:bg-yellow/90',
  },
  {
    bg: 'bg-green',
    shadow: 'shadow-[3px_5px_0_0_var(--color-green-shadow)]',
    hover: 'hover:bg-green/90',
  },
  {
    bg: 'bg-teal',
    shadow: 'shadow-[3px_5px_0_0_var(--color-teal-shadow)]',
    hover: 'hover:bg-teal/90',
  },
  {
    bg: 'bg-cyan',
    shadow: 'shadow-[3px_5px_0_0_var(--color-cyan-shadow)]',
    hover: 'hover:bg-cyan/90',
  },
]

export function RoundedSolidButtons() {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-5 lg:grid-cols-10">
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
