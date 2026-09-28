const team = [
  { name: 'Marco Rossi', role: 'Head Chef', image: 'https://picsum.photos/seed/chef1/400/400' },
  { name: 'Aiko Tanaka', role: 'Pastry Chef', image: 'https://picsum.photos/seed/chef2/400/400' },
  { name: 'Liam Chen', role: 'Sous Chef', image: 'https://picsum.photos/seed/chef3/400/400' },
  { name: 'Sofia Müller', role: 'Sommelier', image: 'https://picsum.photos/seed/chef4/400/400' },
]

export function Chefs() {
  return (
    <section id="chefs" className="bg-paper py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-semibold uppercase tracking-wide text-ink sm:text-4xl">
            Meet Our Chefs
          </h2>
          <p className="mx-auto max-w-2xl font-light text-mist">
            Our talented culinary team brings passion, creativity, and years of experience to every
            dish served.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <article key={member.name} className="group relative overflow-hidden rounded-sm">
              <img
                src={member.image}
                alt={member.name}
                className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {/* Red overlay on hover */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-brand/0 opacity-0 transition-all duration-300 group-hover:bg-brand/70 group-hover:opacity-100">
                <h3 className="mb-1 text-lg font-semibold text-white">{member.name}</h3>
                <p className="text-sm font-light text-white/80">{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
