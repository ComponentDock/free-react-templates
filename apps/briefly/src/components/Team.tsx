const team = [
  {
    img: 'https://picsum.photos/seed/briefly-team1/400/500',
    name: 'Ethel Davis',
    role: 'Senior Barrister at Law',
  },
  {
    img: 'https://picsum.photos/seed/briefly-team2/400/500',
    name: 'Ethel Davis',
    role: 'Senior Barrister at Law',
  },
  {
    img: 'https://picsum.photos/seed/briefly-team3/400/500',
    name: 'Ethel Davis',
    role: 'Senior Barrister at Law',
  },
] as const

export function Team() {
  return (
    <section id="team" className="bg-gray-50 py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            Meet Our Experienced Team
          </h2>
          <p className="mt-4 text-smoke dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt
            labore dolore magna aliqua enim minim veniam quis nostrud.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {team.map((member, i) => (
            <div key={i} className="text-center">
              <img
                src={member.img}
                alt={member.name}
                className="mx-auto h-72 w-full rounded-lg object-cover"
                loading="lazy"
              />
              <h3 className="mt-4 font-display text-lg font-bold text-ink dark:text-white">
                {member.name}
              </h3>
              <p className="mt-1 text-sm text-primary-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
