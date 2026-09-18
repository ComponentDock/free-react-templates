const CLIENTS = [
  { name: 'Client Alpha', seed: 'foliox-client-1' },
  { name: 'Client Beta', seed: 'foliox-client-2' },
  { name: 'Client Gamma', seed: 'foliox-client-3' },
  { name: 'Client Delta', seed: 'foliox-client-4' },
  { name: 'Client Epsilon', seed: 'foliox-client-5' },
  { name: 'Client Zeta', seed: 'foliox-client-6' },
]

export function Clients() {
  return (
    <section id="clients" className="bg-surface py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold text-heading">Our Clients</h2>
          <div className="mx-auto mt-3 h-1 w-12 bg-primary" />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8">
          {CLIENTS.map((client) => (
            <img
              key={client.name}
              src={`https://picsum.photos/seed/${client.seed}/150/80`}
              alt={client.name}
              className="h-12 w-auto object-contain grayscale transition-all duration-300 hover:grayscale-0"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
