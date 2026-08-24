const team = [
  {
    name: 'John McArthur',
    role: 'Designer',
    seed: 'oraxol-team-1',
  },
  {
    name: 'Mark Sky',
    role: 'Developer',
    seed: 'oraxol-team-2',
  },
  {
    name: 'Kyle Becker',
    role: 'Web Designer',
    seed: 'oraxol-team-3',
  },
  {
    name: 'Alan Nortwood',
    role: 'Photographer',
    seed: 'oraxol-team-4',
  },
] as const

export function Team() {
  return (
    <section id="team" className="bg-dark-surface px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
          Designer &amp; Developer
        </h2>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <img
                src={`https://picsum.photos/seed/${member.seed}/300/300`}
                alt={member.name}
                className="mx-auto h-40 w-40 rounded-full object-cover"
                loading="lazy"
              />
              <h3 className="mt-4 text-lg font-semibold text-white">{member.name}</h3>
              <p className="mt-1 text-sm text-muted">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
