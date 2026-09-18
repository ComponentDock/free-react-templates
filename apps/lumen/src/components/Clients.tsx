const CLIENTS = ['Acme Corp', 'Globex', 'Initech', 'Hooli', 'Stark Industries', 'Wayne Enterprises']

export function Clients() {
  return (
    <section id="clients" className="bg-surface-dark py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-primary-400">
            Our Clients
          </h2>
          <h3 className="mt-3 font-display text-3xl font-bold text-text-light md:text-4xl">
            Lumen has been honored to partner up with these clients
          </h3>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {CLIENTS.map((client) => (
            <div
              key={client}
              className="flex items-center justify-center rounded-lg bg-white/5 px-4 py-8"
            >
              <span className="font-display text-sm font-medium tracking-wide text-text-gray">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
