const chefs = [
  {
    img: 'https://picsum.photos/seed/seared-chef1/400/500',
    name: 'Marco Rossi',
    role: 'Head Chef',
  },
  {
    img: 'https://picsum.photos/seed/seared-chef2/400/500',
    name: 'Elena Santos',
    role: 'Pastry Chef',
  },
  { img: 'https://picsum.photos/seed/seared-chef3/400/500', name: 'James Chen', role: 'Sous Chef' },
]

export function Chef() {
  return (
    <section
      className="relative py-20 bg-cover bg-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://picsum.photos/seed/seared-chef-bg/1920/800)',
      }}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2
          className="mb-12 text-center text-3xl font-bold text-white sm:text-4xl"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Master Chef
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {chefs.map((c) => (
            <div key={c.name} className="text-center">
              <img
                src={c.img}
                alt={c.name}
                className="mx-auto mb-4 h-64 w-full rounded-lg object-cover"
              />
              <h4 className="text-lg font-bold text-white">{c.name}</h4>
              <p className="text-sm text-white/70">{c.role}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#why"
            className="inline-block rounded border-2 border-brand bg-brand px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-brand-light hover:border-brand-light"
          >
            Meet Our Chef
          </a>
        </div>
      </div>
    </section>
  )
}
