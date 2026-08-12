interface Member {
  name: string
  role: string
  image: string
}

const members: Member[] = [
  {
    name: 'Ethan Welch',
    role: 'UX Designer',
    image: 'https://picsum.photos/seed/consilio-12/400/480',
  },
  {
    name: 'Olivia Hart',
    role: 'Strategy Lead',
    image: 'https://picsum.photos/seed/consilio-13/400/480',
  },
  {
    name: 'Marcus Reid',
    role: 'Financial Analyst',
    image: 'https://picsum.photos/seed/consilio-14/400/480',
  },
]

export function Team() {
  return (
    <section aria-labelledby="team-heading" className="bg-gray-50 py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12">
          <p className="mb-3 flex items-center gap-3 text-sm font-medium uppercase tracking-widest text-eyebrow">
            <span className="h-0.5 w-14 bg-eyebrow" aria-hidden="true" />
            Our Professional Members
          </p>
          <h2
            id="team-heading"
            className="font-display text-3xl font-bold text-brand-deep dark:text-white"
          >
            Our Team Members
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {members.map((member) => (
            <article
              key={member.name}
              className="group overflow-hidden rounded bg-white text-center shadow-sm dark:bg-gray-800"
            >
              <div className="overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-brand-deep dark:text-white">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
