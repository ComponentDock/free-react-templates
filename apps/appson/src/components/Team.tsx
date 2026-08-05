const members = [
  { name: 'John Deo', role: 'front-end developer' },
  { name: 'Sarah Kim', role: 'back-end developer' },
  { name: 'Alex Chen', role: 'UI/UX designer' },
  { name: 'Maria Garcia', role: 'project manager' },
] as const

const stats = [
  { value: '20K', label: 'Happy Clients' },
  { value: '5K', label: 'Projects Done' },
  { value: '30K', label: 'Cups of Coffee' },
  { value: '50', label: 'Team Members' },
] as const

export function Team() {
  return (
    <section id="team" className="bg-paper py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            Meet my team
          </h2>
          <p className="mt-4 leading-relaxed text-muted dark:text-gray-400">
            The people behind Appson — passionate, curious, and always shipping.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member, index) => (
            <article
              key={member.name}
              className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm dark:border-gray-800 dark:bg-gray-900"
            >
              <img
                src={`https://picsum.photos/seed/appson-team-${index + 1}/300/300`}
                alt={`Appson team member ${index + 1}`}
                className="mx-auto h-24 w-24 rounded-full object-cover"
              />
              <h3 className="mt-5 font-display text-lg font-semibold text-ink dark:text-white">
                {member.name}
              </h3>
              <p className="mt-1 text-sm text-muted dark:text-gray-400">{member.role}</p>
            </article>
          ))}
        </div>

        <dl className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-8 text-center lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-display text-4xl font-bold text-primary-600">{stat.value}</dd>
              <p className="mt-2 text-sm text-muted dark:text-gray-400">{stat.label}</p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
