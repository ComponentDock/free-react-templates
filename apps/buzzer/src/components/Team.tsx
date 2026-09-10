const team = [
  {
    image: 'https://picsum.photos/seed/buzzer-team1/300/350',
    name: 'Alex Morgan',
    role: 'Lead Consultant',
  },
  {
    image: 'https://picsum.photos/seed/buzzer-team2/300/350',
    name: 'Jessica Park',
    role: 'Strategy Director',
  },
  {
    image: 'https://picsum.photos/seed/buzzer-team3/300/350',
    name: 'David Kim',
    role: 'Marketing Head',
  },
] as const

const socials = ['Twitter', 'Facebook', 'Pinterest'] as const

export function Team() {
  return (
    <section id="team" className="py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Our Team
          </span>
          <h2 className="mt-3 text-3xl font-bold text-ink dark:text-white lg:text-4xl">
            Meet with our amazing team
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="group overflow-hidden rounded-xl bg-white shadow-sm dark:bg-gray-800"
            >
              <div className="overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  width={300}
                  height={288}
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-bold text-ink dark:text-white">{member.name}</h3>
                <p className="mt-1 text-sm text-slate">{member.role}</p>
                <div className="mt-4 flex items-center justify-center gap-3">
                  {socials.map((name) => (
                    <a
                      key={name}
                      href="#team"
                      aria-label={`${member.name} on ${name}`}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-slate transition-colors hover:border-brand hover:text-brand dark:border-gray-700"
                    >
                      <span className="sr-only">{name}</span>
                      <svg
                        className="h-3.5 w-3.5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="10" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
