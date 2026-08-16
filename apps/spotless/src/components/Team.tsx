const team = [
  { name: 'Danny George', role: 'Cleaner', seed: 'spotless-team-1' },
  { name: 'Andrew Horton', role: 'Cleaner', seed: 'spotless-team-2' },
  { name: 'Georgia Foster', role: 'Cleaner', seed: 'spotless-team-3' },
  { name: 'Sue Burns', role: 'Cleaner', seed: 'spotless-team-4' },
] as const

export function Team() {
  return (
    <section id="team" className="bg-light-gray py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
          <div>
            <p className="font-accent text-base font-semibold uppercase tracking-[4px] text-brand">
              Our team
            </p>
            <h2 className="mt-4 text-4xl font-medium text-heading">Better Life For Everyone</h2>
          </div>
          <a href="#contact" className="btn-pill shrink-0">
            Join us
          </a>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <article key={member.name} className="rounded-2xl bg-white p-6 text-center shadow-md">
              <img
                src={`https://picsum.photos/seed/${member.seed}/300/340`}
                alt={`${member.name}, ${member.role}`}
                className="mx-auto h-44 w-40 rounded-full object-cover"
              />
              <h3 className="mt-6 text-lg font-medium text-heading">{member.name}</h3>
              <p className="mt-1 font-accent text-sm font-semibold text-brand">{member.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
