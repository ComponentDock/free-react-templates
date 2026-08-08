const clients = ['Vantage', 'Northline', 'Arclight', 'Forma', 'Kestrel'] as const

export function Clients() {
  return (
    <section
      aria-label="Trusted by"
      className="border-y border-black/5 bg-white py-12 dark:border-white/10 dark:bg-gray-950"
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-12 gap-y-6 px-4 sm:px-6">
        {clients.map((client) => (
          <span
            key={client}
            className="font-display text-xl font-bold uppercase tracking-widest text-slate/40 transition-colors hover:text-brand dark:text-white/30"
          >
            {client}
          </span>
        ))}
      </div>
    </section>
  )
}
