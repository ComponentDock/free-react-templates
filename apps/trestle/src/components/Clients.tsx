const clients = ['ARQ', 'STL', 'NOVA', 'VERT', 'KOMO'] as const

export function Clients() {
  return (
    <section className="border-y border-line bg-paper py-14 dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ul className="flex flex-wrap items-center justify-center gap-10 sm:gap-16">
          {clients.map((client) => (
            <li
              key={client}
              className="text-2xl font-black tracking-widest text-mist/60 transition-colors hover:text-ink dark:text-gray-500 dark:hover:text-white"
            >
              {client}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
