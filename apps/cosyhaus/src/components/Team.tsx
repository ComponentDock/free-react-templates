const team = [
  {
    name: 'Jhon Sansa',
    role: 'Creative Director',
    image: 'https://picsum.photos/seed/cosyhaus-t1/400/400',
  },
  {
    name: 'Anna Williams',
    role: 'Creative Director',
    image: 'https://picsum.photos/seed/cosyhaus-t2/400/400',
  },
  {
    name: 'Mark Rivera',
    role: 'Creative Director',
    image: 'https://picsum.photos/seed/cosyhaus-t3/400/400',
  },
] as const

export function Team() {
  return (
    <section className="bg-paper-alt py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block font-display text-sm font-medium uppercase tracking-[0.25em] text-brand">
            Creative Director
          </span>
          <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-ink dark:text-white">
            Our Team Members
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <div className="mx-auto h-64 w-64 overflow-hidden rounded-full">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold uppercase tracking-wide text-ink dark:text-white">
                <a href="#" className="hover:text-brand">
                  {member.name}
                </a>
              </h3>
              <span className="text-sm text-mist">{member.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
