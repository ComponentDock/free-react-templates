const TEAM = [
  {
    name: 'Mr. Urela',
    blurb: 'Product design mentor with 12 years in the field.',
    image: 'https://picsum.photos/seed/edify-team-1/240/240',
  },
  {
    name: 'Mr. Uttom',
    blurb: 'Full-stack engineer and coding bootcamp lead.',
    image: 'https://picsum.photos/seed/edify-team-2/240/240',
  },
  {
    name: 'Mr. Shakil',
    blurb: 'Data scientist specializing in machine learning.',
    image: 'https://picsum.photos/seed/edify-team-3/240/240',
  },
  {
    name: 'Mr. Arafat',
    blurb: 'Marketing strategist teaching growth fundamentals.',
    image: 'https://picsum.photos/seed/edify-team-4/240/240',
  },
  {
    name: 'Mr. Saiful',
    blurb: 'Language coach with a passion for interactive learning.',
    image: 'https://picsum.photos/seed/edify-team-5/240/240',
  },
] as const

/* "Community experts" recreated from the source's team-area: a centered
   heading and expert cards with an avatar image, name, and blurb,
   rendered as a responsive grid. */

export function Team() {
  return (
    <section className="bg-lavender py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-3xl font-semibold text-indigo dark:text-white sm:text-4xl">
          Community experts
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {TEAM.map((member) => (
            <article
              key={member.name}
              className="rounded-2xl bg-white p-6 text-center shadow-[0_6px_6px_rgba(2,25,65,0.08)] dark:bg-gray-900"
            >
              <img
                src={member.image}
                alt={member.name}
                className="mx-auto h-20 w-20 rounded-full object-cover"
                loading="lazy"
              />
              <h3 className="mt-4 font-display text-lg font-semibold text-indigo dark:text-white">
                {member.name}
              </h3>
              <p className="mt-2 text-sm text-team-muted">{member.blurb}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
