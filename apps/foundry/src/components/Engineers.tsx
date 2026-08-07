const engineers = [
  {
    name: 'John Miller',
    role: 'Chief Structural Engineer',
    seed: 'foundry-engineer-1',
  },
  {
    name: 'Brian Smith',
    role: 'Lead Project Engineer',
    seed: 'foundry-engineer-2',
  },
] as const

export function Engineers() {
  return (
    <section id="engineers" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Team</p>
        <span aria-hidden="true" className="mt-3 block h-1 w-14 bg-brand" />
        <h2 className="mt-6 font-display text-4xl font-bold uppercase leading-tight text-ink dark:text-white">
          Our Engineers
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {engineers.map((engineer) => (
            <article key={engineer.name} className="text-center">
              <img
                src={`https://picsum.photos/seed/${engineer.seed}/400/400`}
                alt={engineer.name}
                className="mx-auto h-48 w-48 rounded-full object-cover"
              />
              <h3 className="mt-6 font-display text-2xl font-bold uppercase text-ink dark:text-white">
                {engineer.name}
              </h3>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-brand">
                {engineer.role}
              </p>
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-mist dark:text-gray-400">
                With decades on site and in the drawing office, our engineers turn ambitious
                blueprints into buildings that stand the test of time.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
