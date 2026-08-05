const members = [
  { name: 'Jemy Sedonce', role: 'Co. Founder', seed: 'colid-team-1' },
  { name: 'Deborah Brown', role: 'UX Designer', seed: 'colid-team-2' },
  { name: 'Harry Banks', role: 'Founder', seed: 'colid-team-3' },
  { name: 'Victoria Clark', role: 'Creative Director', seed: 'colid-team-4' },
] as const

export function Team() {
  return (
    <section id="team" className="bg-paper py-16 dark:bg-gray-900 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold uppercase tracking-wide text-gray-900 dark:text-white sm:text-4xl">
            Special Team
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit voluptates, temporibus
            at, facere harum fugiat!
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member) => (
            <div
              key={member.name}
              className="rounded-md bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-lg dark:bg-gray-950"
            >
              <img
                src={`https://picsum.photos/seed/${member.seed}/300/300`}
                alt={member.name}
                className="mx-auto h-28 w-28 rounded-full object-cover"
              />
              <h3 className="mt-5 font-bold text-gray-900 dark:text-white">{member.name}</h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
