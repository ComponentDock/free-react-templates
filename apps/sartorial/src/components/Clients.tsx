export function Clients() {
  const clients = ['Client 1', 'Client 2', 'Client 3', 'Client 4', 'Client 5']

  return (
    <section className="border-b border-gray-100 bg-white py-8">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {clients.map((client) => (
            <div
              key={client}
              className="flex h-12 w-24 items-center justify-center opacity-40 grayscale transition-all hover:opacity-80 hover:grayscale-0"
            >
              <img
                src={`https://picsum.photos/seed/${client.toLowerCase().replace(' ', '')}/120/48`}
                alt={client}
                className="h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
