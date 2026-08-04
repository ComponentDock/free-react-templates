const members = [
  { name: 'Rala Emaia', role: 'Senior Director', seed: 1 },
  { name: 'jhon Smith', role: 'Head of Care', seed: 2 },
] as const

export function Team() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-semibold text-ink dark:text-white lg:text-4xl">
          Our Team
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-sm font-light leading-relaxed text-mist dark:text-gray-400">
          The caring people behind every happy tail.
        </p>
        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {members.map((member) => (
            <article key={member.name} className="text-center">
              <img
                src={`https://picsum.photos/seed/pawcare-team-${member.seed}/360/300`}
                alt={member.name}
                className="mx-auto w-full max-w-xs object-cover shadow-sm"
              />
              <h3 className="mt-6 text-xl font-semibold text-ink dark:text-white">{member.name}</h3>
              <p className="mt-1 text-sm text-brand">{member.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
