const members = [
  { name: 'Mike Janathon', seed: 'petcare-team-1' },
  { name: 'Mike J Smith', seed: 'petcare-team-2' },
  { name: 'Pule W Smith', seed: 'petcare-team-3' },
] as const

export function Team() {
  return (
    <section id="team" className="bg-paper py-14 dark:bg-gray-900 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-extrabold text-navy dark:text-white">
          Our Team Mambers
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center font-light text-muted dark:text-gray-400">
          Meet the caring doctors behind Petcare.
        </p>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <article
              key={member.name}
              className="overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800"
            >
              <img
                src={`https://picsum.photos/seed/${member.seed}/480/480`}
                alt={`Portrait of ${member.name}`}
                loading="lazy"
                className="w-full object-cover"
              />
              <div className="p-6 text-center">
                <span className="block text-xl font-semibold text-navy dark:text-white">
                  {member.name}
                </span>
                <h3 className="mt-1 text-sm font-bold uppercase tracking-wide text-brand">
                  Doctor
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
