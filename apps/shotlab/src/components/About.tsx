const teamMembers = [
  {
    name: 'John Carter',
    role: 'Photographer',
    image: 'https://picsum.photos/seed/shotlab-team-1/200/200',
  },
  {
    name: 'Jessica Williams',
    role: 'Creative Director',
    image: 'https://picsum.photos/seed/shotlab-team-2/200/200',
  },
  {
    name: 'Mike Smith',
    role: 'Designer',
    image: 'https://picsum.photos/seed/shotlab-team-3/200/200',
  },
]

export function About() {
  return (
    <section
      id="about"
      className="relative bg-dark py-20 text-white"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/shotlab-about-bg/1600/900)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-16">
        <div className="mb-16 max-w-2xl">
          <h2 className="mb-4 font-display text-3xl lg:text-4xl">
            Hello I'm <span className="text-brand-400">John Carter</span> Welcome to my personal
            website
          </h2>
          <p className="text-muted">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
            the Semantics, a large language ocean.
          </p>
        </div>

        {/* Team members */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="mx-auto mb-4 h-24 w-24 rounded-full object-cover"
              />
              <h4 className="text-sm font-semibold uppercase tracking-wider">{member.name}</h4>
              <p className="text-xs text-subtle">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
