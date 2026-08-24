const team = [
  {
    name: 'Jason Smith',
    role: 'President & CEO',
    image: 'https://picsum.photos/seed/pulse-team1/400/400',
  },
  {
    name: 'Jeffrey Rockenson',
    role: 'Executive Vice President',
    image: 'https://picsum.photos/seed/pulse-team2/400/400',
  },
  {
    name: 'Jason Smith',
    role: 'General Manager',
    image: 'https://picsum.photos/seed/pulse-team3/400/400',
  },
  {
    name: 'Jason Smith',
    role: 'Strategic Consultant',
    image: 'https://picsum.photos/seed/pulse-team4/400/400',
  },
]

const socials = ['Facebook', 'Twitter', 'LinkedIn', 'Instagram']

export function Team() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-navy-700 sm:text-4xl">Meet Our Team</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-500">
          Our talented team is dedicated to delivering exceptional results for every project.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div key={member.name + member.role} className="group text-center">
              <div className="relative mx-auto h-64 w-64 overflow-hidden rounded-full">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-navy-700">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
              <ul className="mt-3 flex justify-center gap-2">
                {socials.map((s) => (
                  <li key={s}>
                    <a
                      href="#"
                      aria-label={`${member.name} ${s}`}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-xs text-gray-500 transition-colors hover:bg-pulse-400 hover:text-white"
                    >
                      {s[0]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
