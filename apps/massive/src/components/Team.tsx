const members = [
  {
    src: 'https://picsum.photos/seed/massive-team-1/320/320',
    name: 'Alex Morgan',
    role: 'Chief Executive Officer',
  },
  {
    src: 'https://picsum.photos/seed/massive-team-2/320/320',
    name: 'Sofiya Rahman',
    role: 'Lead Product Designer',
  },
  {
    src: 'https://picsum.photos/seed/massive-team-3/320/320',
    name: 'Jason Doe',
    role: 'Head of Engineering',
  },
  {
    src: 'https://picsum.photos/seed/massive-team-4/320/320',
    name: 'Emma Wilson',
    role: 'Marketing Director',
  },
] as const

export function Team() {
  return (
    <section id="team" aria-label="Team" className="bg-gray-50 py-16 sm:py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal dark:text-cyan">
            People
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl dark:text-white">
            Our Expert Team
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-gray-600 dark:text-gray-400">
            Rapidiously monetize market-driven web services. Completely synthesize end-to-end models
            and emerging niches.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member) => (
            <div
              key={member.name}
              className="overflow-hidden rounded-2xl border border-gray-100 bg-white text-center shadow-sm transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-950"
            >
              <img
                src={member.src}
                alt={member.name}
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-ink dark:text-white">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-teal dark:text-cyan">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
