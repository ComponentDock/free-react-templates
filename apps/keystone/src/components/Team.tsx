const members = [
  { name: 'Jhon Sunsa', role: 'Designer', seed: 'keystone-team-1' },
  { name: 'Smith J White', role: 'Architect', seed: 'keystone-team-2' },
  { name: 'Jayson Brouni', role: 'Engineer', seed: 'keystone-team-3' },
] as const

export function Team() {
  return (
    <section id="team" className="bg-paper py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Our Team</p>
        <span aria-hidden="true" className="mt-3 block h-1 w-14 bg-brand" />
        <h2 className="mt-6 font-display text-4xl font-bold uppercase leading-tight text-navy dark:text-white">
          The Best Team We Have Ever Had
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {members.map((member) => (
            <article
              key={member.name}
              className="bg-white p-6 text-center shadow-sm dark:bg-gray-900"
            >
              <img
                src={`https://picsum.photos/seed/${member.seed}/400/420`}
                alt={`Portrait of ${member.name}`}
                className="h-64 w-full object-cover"
              />
              <h3 className="mt-6 font-display text-2xl font-bold uppercase text-navy dark:text-white">
                {member.name}
              </h3>
              <p className="mt-1 text-sm uppercase tracking-widest text-brand">{member.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
