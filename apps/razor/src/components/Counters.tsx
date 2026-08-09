const counters = [
  { value: '40', label: 'Places' },
  { value: '120', label: 'Events' },
  { value: '500', label: 'Photos' },
  { value: '12', label: 'Speakers' },
] as const

export function Counters() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 lg:py-[100px]">
      <img
        src="https://picsum.photos/seed/razor-counter/1600/500"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 text-center sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {counters.map((counter) => (
          <div key={counter.label}>
            <p className="font-display text-5xl font-bold text-brand">{counter.value}</p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-white/85">
              {counter.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
