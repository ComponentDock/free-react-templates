const members = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    image: 'stall-team-1',
    desc: 'Leading the company with vision and passion for quality.',
  },
  {
    name: 'Michael Chen',
    role: 'Head of Design',
    image: 'stall-team-2',
    desc: 'Creating beautiful and functional product designs.',
  },
  {
    name: 'Emily Davis',
    role: 'Marketing Director',
    image: 'stall-team-3',
    desc: 'Building brand awareness and customer relationships.',
  },
]

export function Team() {
  return (
    <section id="team" className="bg-light-bg py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-black uppercase tracking-wide text-heading">
          Our Team
        </h2>
        <div className="mx-auto mt-2 h-1 w-16 bg-brand" />
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((m) => (
            <div key={m.name} className="bg-white p-6 text-center shadow-sm">
              <img
                src={`https://picsum.photos/seed/${m.image}/200/200`}
                alt={m.name}
                className="mx-auto h-32 w-32 rounded-full object-cover"
                width={128}
                height={128}
              />
              <h3 className="mt-4 text-lg font-bold text-heading">{m.name}</h3>
              <p className="text-sm font-semibold uppercase text-brand">{m.role}</p>
              <p className="mt-3 text-sm text-body">{m.desc}</p>
              <div className="mt-4 flex justify-center gap-3">
                <a
                  href="#facebook"
                  aria-label={`${m.name} on Facebook`}
                  className="text-sm font-bold text-gray-400 hover:text-brand"
                >
                  f
                </a>
                <a
                  href="#twitter"
                  aria-label={`${m.name} on Twitter`}
                  className="text-sm font-bold text-gray-400 hover:text-brand"
                >
                  t
                </a>
                <a
                  href="#linkedin"
                  aria-label={`${m.name} on LinkedIn`}
                  className="text-sm font-bold text-gray-400 hover:text-brand"
                >
                  in
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
