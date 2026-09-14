const clients = ['client-1', 'client-2', 'client-3', 'client-4', 'client-5']

export function Clients() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {clients.map((c) => (
            <img
              key={c}
              src={`https://picsum.photos/seed/vibrance-${c}/150/80`}
              alt={`Client ${c.split('-')[1]}`}
              className="h-12 w-auto opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
