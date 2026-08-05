const clients = ['Acme Corp', 'Globex', 'Initech', 'Umbrella', 'Wayne Enterprises'] as const

export function Clients() {
  return (
    <section id="clients" className="bg-night py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {clients.map((client) => (
            <li key={client} className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500">
              {client}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
