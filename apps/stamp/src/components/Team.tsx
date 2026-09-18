const TEAM = [
  {
    name: 'Andrew Flentop',
    role: 'System Engineer',
    image: 'https://picsum.photos/seed/stamp-team1/300/300',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Project Manager',
    image: 'https://picsum.photos/seed/stamp-team2/300/300',
  },
  {
    name: 'James Crawford',
    role: 'Quality Inspector',
    image: 'https://picsum.photos/seed/stamp-team3/300/300',
  },
  {
    name: 'Maria Santos',
    role: 'Operations Lead',
    image: 'https://picsum.photos/seed/stamp-team4/300/300',
  },
] as const

const SOCIAL_LINKS = ['Facebook', 'Twitter', 'LinkedIn', 'Instagram'] as const

export function Team() {
  return (
    <section id="team" className="bg-paper py-24">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-12 text-3xl font-semibold text-ink">Meet Experienced Professional</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((member) => (
            <div key={member.name} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="mx-auto mb-4 h-48 w-48 rounded-full object-cover"
                loading="lazy"
              />
              <h3 className="text-lg font-semibold text-ink">{member.name}</h3>
              <p className="text-mist">{member.role}</p>
              <div className="mt-3 flex items-center justify-center gap-3">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s}
                    href="#"
                    aria-label={`${member.name} ${s}`}
                    className="text-sm text-mist hover:text-brand transition-colors"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
