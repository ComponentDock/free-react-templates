const colors = [
  {
    border: 'border-blue',
    text: 'text-blue',
    shadow: 'shadow-[3px_5px_0_0_var(--color-blue-shadow)]',
    hover: 'hover:bg-blue hover:text-white',
  },
  {
    border: 'border-indigo',
    text: 'text-indigo',
    shadow: 'shadow-[3px_5px_0_0_var(--color-indigo-shadow)]',
    hover: 'hover:bg-indigo hover:text-white',
  },
  {
    border: 'border-purple',
    text: 'text-purple',
    shadow: 'shadow-[3px_5px_0_0_var(--color-purple-shadow)]',
    hover: 'hover:bg-purple hover:text-white',
  },
  {
    border: 'border-pink',
    text: 'text-pink',
    shadow: 'shadow-[3px_5px_0_0_var(--color-pink-shadow)]',
    hover: 'hover:bg-pink hover:text-white',
  },
  {
    border: 'border-red',
    text: 'text-red',
    shadow: 'shadow-[3px_5px_0_0_var(--color-red-shadow)]',
    hover: 'hover:bg-red hover:text-white',
  },
  {
    border: 'border-orange',
    text: 'text-orange',
    shadow: 'shadow-[3px_5px_0_0_var(--color-orange-shadow)]',
    hover: 'hover:bg-orange hover:text-white',
  },
  {
    border: 'border-yellow',
    text: 'text-yellow',
    shadow: 'shadow-[3px_5px_0_0_var(--color-yellow-shadow)]',
    hover: 'hover:bg-yellow hover:text-white',
  },
  {
    border: 'border-green',
    text: 'text-green',
    shadow: 'shadow-[3px_5px_0_0_var(--color-green-shadow)]',
    hover: 'hover:bg-green hover:text-white',
  },
  {
    border: 'border-teal',
    text: 'text-teal',
    shadow: 'shadow-[3px_5px_0_0_var(--color-teal-shadow)]',
    hover: 'hover:bg-teal hover:text-white',
  },
  {
    border: 'border-cyan',
    text: 'text-cyan',
    shadow: 'shadow-[3px_5px_0_0_var(--color-cyan-shadow)]',
    hover: 'hover:bg-cyan hover:text-white',
  },
]

export function RoundedOutlineButtons() {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-5 lg:grid-cols-10">
      {colors.map((c, i) => (
        <button
          key={`rounded-outline-${i}`}
          type="button"
          className={`${c.border} ${c.text} ${c.shadow} ${c.hover} rounded-full border bg-white px-4 py-3 text-sm font-medium transition-all hover:-translate-y-0.5`}
        >
          Default
        </button>
      ))}
    </div>
  )
}
