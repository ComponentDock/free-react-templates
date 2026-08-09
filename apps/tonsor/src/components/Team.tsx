const team = [
  {
    name: 'Peter Baker',
    role: 'Head Hair Cut Specialist',
    src: 'https://picsum.photos/seed/tonsor-team-1/480/560',
  },
  {
    name: 'Nancy Holmes',
    role: 'Spa & Makeup Specialist',
    src: 'https://picsum.photos/seed/tonsor-team-2/480/560',
  },
  {
    name: 'Gavin Hansen',
    role: 'Hair Styling Expert',
    src: 'https://picsum.photos/seed/tonsor-team-3/480/560',
  },
] as const

export function Team() {
  return (
    <section id="barbers" className="bg-white py-24 dark:bg-gray-950 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            We Have All Famous Barbers
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm font-light leading-relaxed text-mist">
            Our chairs are staffed by award-winning barbers who treat every client like a regular —
            because after the first visit, you are one.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <figure key={member.name} className="group overflow-hidden rounded-md">
              <img
                src={member.src}
                alt={member.name}
                className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="pt-5 text-center">
                <h3 className="font-display text-xl font-semibold text-ink transition-colors group-hover:text-brand dark:text-white">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-mist">
                  {member.role}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
