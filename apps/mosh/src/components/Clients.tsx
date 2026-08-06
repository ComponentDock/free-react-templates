const clients = [
  { src: 'https://picsum.photos/seed/mosh-client-1/240/120', name: 'Client Alpha' },
  { src: 'https://picsum.photos/seed/mosh-client-2/240/120', name: 'Client Beta' },
  { src: 'https://picsum.photos/seed/mosh-client-3/240/120', name: 'Client Gamma' },
  { src: 'https://picsum.photos/seed/mosh-client-4/240/120', name: 'Client Delta' },
  { src: 'https://picsum.photos/seed/mosh-client-5/240/120', name: 'Client Epsilon' },
  { src: 'https://picsum.photos/seed/mosh-client-6/240/120', name: 'Client Zeta' },
] as const

export function Clients() {
  return (
    <section id="about" aria-label="Clients" className="bg-paper py-16 sm:py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-500 dark:text-primary-300">
            Clients
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl dark:text-white">
            All our clients love our work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-gray-600 dark:text-gray-400">
            Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus
            blandit.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {clients.map((client) => (
            <img
              key={client.name}
              src={client.src}
              alt={client.name}
              loading="lazy"
              className="h-16 w-full rounded-xl border border-gray-100 bg-white object-contain p-3 opacity-70 grayscale transition-opacity hover:opacity-100 dark:border-gray-800 dark:bg-gray-950"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
