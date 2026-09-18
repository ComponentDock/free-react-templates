const chefs = [
  {
    name: 'Adam Billiard',
    role: 'Chef Master',
    image: 'https://picsum.photos/seed/ember-chef1/400/400',
  },
  {
    name: 'Fred Macyard',
    role: 'Chef Master',
    image: 'https://picsum.photos/seed/ember-chef2/400/400',
  },
  {
    name: 'Justin Stuard',
    role: 'Chef Master',
    image: 'https://picsum.photos/seed/ember-chef3/400/400',
  },
  {
    name: 'Lisa Montgomery',
    role: 'Pastry Chef',
    image: 'https://picsum.photos/seed/ember-chef4/400/400',
  },
] as const

export function Team() {
  return (
    <section id="chefs" className="bg-paper py-20 transition-colors dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            Team Member
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink dark:text-white">
            Our Experience Chefs
          </h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {chefs.map((chef) => (
            <article key={chef.name} className="group text-center">
              <div className="relative mx-auto h-64 w-64 overflow-hidden rounded-full">
                <img
                  src={chef.image}
                  alt={chef.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-6 font-display text-lg font-bold text-ink dark:text-white">
                {chef.name}
              </h3>
              <p className="mt-1 text-sm text-brand">{chef.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
