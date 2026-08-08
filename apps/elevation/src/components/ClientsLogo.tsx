const clients = ['Vertex & Co', 'Arcform Studio', 'Skyline Works', 'Granite Group'] as const

export function ClientsLogo() {
  return (
    <section className="border-t border-gray-100 py-14 dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 text-center sm:px-6 lg:grid-cols-4">
        {clients.map((client) => (
          <p
            key={client}
            className="font-display text-lg font-bold uppercase tracking-widest text-gray-400 transition-colors hover:text-brand"
          >
            {client}
          </p>
        ))}
      </div>
    </section>
  )
}
