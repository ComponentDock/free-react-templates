const clients = ['Google', 'Puma', 'PayPal', 'Adobe']

export function ClientLogos() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-center justify-center gap-12 opacity-40">
          {clients.map((client) => (
            <span key={client} className="text-2xl font-bold tracking-wider text-gray-400">
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
