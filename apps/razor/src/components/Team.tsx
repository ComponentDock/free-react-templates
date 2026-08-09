const members = [
  { name: 'James Edison', role: 'Master Barber', seed: 'razor-team-1' },
  { name: 'Roger Scott', role: 'Senior Stylist', seed: 'razor-team-2' },
  { name: 'David Moore', role: 'Beard Specialist', seed: 'razor-team-3' },
  { name: 'Leo Carter', role: 'Shave Expert', seed: 'razor-team-4' },
] as const

export function Team() {
  return (
    <section
      id="team"
      className="bg-ink py-20 text-white transition-colors dark:bg-black lg:py-[120px]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-4xl font-bold uppercase lg:text-5xl">Our Expert Team</h2>
          <p className="mt-4 text-white/70">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
          </p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member) => (
            <article key={member.name} className="group text-center">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={`https://picsum.photos/seed/${member.seed}/400/400`}
                  alt={member.name}
                  className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold uppercase">{member.name}</h3>
              <p className="mt-1 text-sm text-brand">{member.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
