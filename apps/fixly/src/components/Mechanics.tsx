const mechanics = [
  {
    name: 'Jason Smith',
    role: 'Auto Repair Expert',
    image: 'https://picsum.photos/seed/fixly-mech-1/400/400',
  },
  {
    name: 'Jeffrey Rockenson',
    role: 'Senior Mechanic',
    image: 'https://picsum.photos/seed/fixly-mech-2/400/400',
  },
] as const

export function Mechanics() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand">Our team</span>
          <h2 className="mt-2 font-display text-3xl font-black text-ink sm:text-4xl">
            Expert Mechanics
          </h2>
        </div>
        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
          {mechanics.map((mechanic) => (
            <article
              key={mechanic.name}
              className="overflow-hidden rounded-2xl border border-gray-100 bg-paper text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: `url('${mechanic.image}')` }}
                aria-hidden="true"
              />
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-ink">{mechanic.name}</h3>
                <span className="mt-1 block text-xs font-semibold uppercase tracking-wide text-brand">
                  {mechanic.role}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
