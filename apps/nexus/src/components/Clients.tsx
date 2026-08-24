const CLIENTS = [
  { name: 'Goldline', seed: 'nexus-client-goldline' },
  { name: 'Foxhub', seed: 'nexus-client-foxhub' },
  { name: 'Ideaa', seed: 'nexus-client-ideaa' },
  { name: 'Nirastate', seed: 'nexus-client-nirastate' },
  { name: 'Treva', seed: 'nexus-client-treva' },
]

export function Clients() {
  return (
    <section id="clients" className="bg-light-bg py-20">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="mb-12 text-3xl font-bold text-text">Our clients</h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {CLIENTS.map((client) => (
            <div
              key={client.name}
              className="flex flex-col items-center justify-center bg-white p-8 shadow-sm transition-all hover:shadow-md"
            >
              <img
                src={`https://picsum.photos/seed/${client.seed}/120/40`}
                alt={client.name}
                className="mb-3 h-10 object-contain"
              />
              <span className="text-sm font-bold uppercase tracking-wider text-brand-pink">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
