const members = [
  {
    name: 'James Anderson',
    role: 'CEO, Co-Founder',
    bio: 'James brings over 15 years of experience in digital strategy and business development. His vision has guided Websmith from a small startup to a leading digital agency.',
    image: 'https://picsum.photos/seed/websmith-team1/400/500',
  },
  {
    name: 'Chris Peters',
    role: 'CTO, Co-Founder',
    bio: 'Chris is the technical mastermind behind our projects. With deep expertise in modern web technologies, he ensures every solution we deliver is robust and scalable.',
    image: 'https://picsum.photos/seed/websmith-team2/400/500',
  },
] as const

export function Team() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <p className="mb-2 text-center text-sm font-medium uppercase tracking-[0.2em] text-muted">
          Meet The Team
        </p>
        <h2 className="mb-16 text-center text-[2.2rem] font-bold text-black">Creative Minds</h2>
        <div className="grid gap-12 md:grid-cols-2">
          {members.map((member) => (
            <div key={member.name}>
              <img
                src={member.image}
                alt={`Photo of ${member.name}`}
                className="mb-6 w-full rounded-lg object-cover"
              />
              <h3 className="text-xl font-bold text-black">{member.name}</h3>
              <p className="mb-4 text-sm font-medium uppercase tracking-wide text-brand">
                {member.role}
              </p>
              <p className="leading-relaxed text-muted-dark">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
