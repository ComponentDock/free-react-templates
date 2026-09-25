const members = [
  {
    name: 'Jean Smith',
    role: 'CEO & Founder',
    image: 'https://picsum.photos/seed/digger-team1/200/200',
  },
  {
    name: 'Bob Carry',
    role: 'Operations Director',
    image: 'https://picsum.photos/seed/digger-team2/200/200',
  },
  {
    name: 'Ricky Fisher',
    role: 'Chief Engineer',
    image: 'https://picsum.photos/seed/digger-team3/200/200',
  },
]

export function Team() {
  return (
    <section id="testimonials" className="py-20 bg-light-bg">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center text-heading mb-16">
          Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((m) => (
            <div key={m.name} className="text-center">
              <img
                src={m.image}
                alt={m.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-bold font-heading text-heading">{m.name}</h3>
              <p className="text-sm text-secondary">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
