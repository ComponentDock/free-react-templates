const members = [
  { name: 'Lloyd Wilson', role: 'CEO, Founder', seed: 'facet-team-1' },
  { name: 'Rachel Parker', role: 'Senior Architect', seed: 'facet-team-2' },
  { name: 'Ian Smith', role: 'Interior Designer', seed: 'facet-team-3' },
  { name: 'Alicia Henderson', role: 'Project Manager', seed: 'facet-team-4' },
  { name: 'Jacob Bolton', role: 'Structural Engineer', seed: 'facet-team-5' },
] as const

export function Team() {
  return (
    <section id="team" aria-label="Our team" className="bg-paper py-20 dark:bg-gray-900 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-xs font-bold uppercase tracking-[3px] text-brand">
          Our Team
        </p>
        <h2 className="mt-3 text-center font-display text-3xl font-extrabold text-ink dark:text-white">
          Behind those Beautiful Works
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {members.map((member) => (
            <article key={member.name} className="text-center">
              <img
                src={`https://picsum.photos/seed/${member.seed}/300/300`}
                alt={member.name}
                className="mx-auto h-32 w-32 rounded-full object-cover"
              />
              <h3 className="mt-4 font-display text-lg font-bold text-ink dark:text-white">
                {member.name}
              </h3>
              <p className="mt-1 text-sm text-mist dark:text-white/60">{member.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
