const members = [
  { name: 'Macau Wilium', role: 'Massage Master', seed: 'amber-team-1' },
  { name: 'Dan Jacky', role: 'Mens Cut', seed: 'amber-team-2' },
  { name: 'Luka Luka', role: 'Mens Cut', seed: 'amber-team-3' },
  { name: 'Rona Dana', role: 'Ladies Cut', seed: 'amber-team-4' },
] as const

export function Team() {
  return (
    <section
      id="team"
      className="bg-lavender py-20 transition-colors dark:bg-gray-900 lg:py-[120px]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            Our Team
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold uppercase text-ink dark:text-white sm:text-4xl">
            Our Cutter Masters
          </h2>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member) => (
            <div
              key={member.name}
              className="overflow-hidden rounded-2xl border border-gray-100 bg-white text-center shadow-sm transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-950"
            >
              <img
                src={`https://picsum.photos/seed/${member.seed}/500/500`}
                alt={`Portrait of ${member.name}`}
                loading="lazy"
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-ink dark:text-white">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
