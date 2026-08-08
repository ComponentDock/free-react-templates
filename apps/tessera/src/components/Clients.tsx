const clients = [
  'Client Logo 1',
  'Client Logo 2',
  'Client Logo 3',
  'Client Logo 4',
  'Client Logo 5',
  'Client Logo 6',
  'Client Logo 7',
]

export function Clients() {
  return (
    <section aria-label="Clients" className="bg-white py-16 dark:bg-gray-950 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-ink dark:text-white lg:text-4xl">
            Our Clients
          </h2>
          <p className="mt-4 leading-relaxed text-mist dark:text-white/60">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in.
          </p>
        </div>
        <ul className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-7">
          {clients.map((client) => (
            <li
              key={client}
              className="flex h-20 items-center justify-center rounded-lg bg-paper px-4 font-display text-sm font-semibold uppercase tracking-wide text-mist dark:bg-gray-900 dark:text-white/50"
            >
              {client}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
