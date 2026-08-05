const clients = ['Hexlab', 'Vantage', 'Northwind', 'Pixelcraft', 'Orbital'] as const

export function Clients() {
  return (
    <section aria-label="Client logos" className="bg-white py-14 dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 sm:grid-cols-3 sm:px-6 lg:grid-cols-5">
        {clients.map((client) => (
          <p
            key={client}
            className="text-center text-lg font-semibold tracking-wide text-gray-400 transition-colors hover:text-primary-600 dark:text-gray-500 dark:hover:text-primary-400"
          >
            {client}
          </p>
        ))}
      </div>
    </section>
  )
}
