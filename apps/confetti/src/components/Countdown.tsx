const items = [
  { value: 96, label: 'Days' },
  { value: 15, label: 'Hrs' },
  { value: 7, label: 'Min' },
  { value: 2, label: 'Sec' },
]

export function Countdown() {
  return (
    <section className="relative -mt-16 z-10 px-4">
      <div className="mx-auto flex max-w-4xl justify-center gap-4 sm:gap-8">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center rounded-full bg-brand px-5 py-4 text-white shadow-lg sm:px-8 sm:py-6"
          >
            <span className="font-display text-2xl font-bold sm:text-4xl">{item.value}</span>
            <span className="mt-1 text-xs font-medium uppercase tracking-wide sm:text-sm">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
