const members = [
  {
    image: 'https://picsum.photos/seed/chamfer-team-1/400/500',
    name: 'Jhon Sunsa',
    role: 'Creative Director',
  },
  {
    image: 'https://picsum.photos/seed/chamfer-team-2/400/500',
    name: 'Maria Lane',
    role: 'Lead Designer',
  },
  {
    image: 'https://picsum.photos/seed/chamfer-team-3/400/500',
    name: 'Alex Rivera',
    role: 'Project Manager',
  },
] as const

export function TeamGrid() {
  return (
    <section className="bg-light-bg py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-display text-3xl font-bold uppercase tracking-wider text-dark-text md:text-4xl">
          Meet Our Team
        </h2>
        <div className="mx-auto mt-4 h-1 w-16 bg-brand-red" />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {members.map((member) => (
            <div key={member.name} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="mx-auto h-80 w-full object-cover"
              />
              <h3 className="mt-4 font-display text-lg font-bold uppercase tracking-wider text-dark-text">
                <a href="#contact" className="transition-colors hover:text-brand-red">
                  {member.name}
                </a>
              </h3>
              <p className="mt-1 font-display text-sm font-medium uppercase tracking-wider text-muted-gray">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
