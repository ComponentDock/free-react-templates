const CONSULTANTS = [
  {
    name: 'Andy Florence',
    role: 'Chief Surgeon',
    image: 'https://picsum.photos/seed/doc1/300/300',
  },
  { name: 'Andy Florence', role: 'Cardiologist', image: 'https://picsum.photos/seed/doc2/300/300' },
  { name: 'Andy Florence', role: 'Neurologist', image: 'https://picsum.photos/seed/doc3/300/300' },
  { name: 'Andy Florence', role: 'Pediatrician', image: 'https://picsum.photos/seed/doc4/300/300' },
]

export function Team() {
  return (
    <section id="doctors" className="bg-paper py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center text-3xl font-bold text-ink">Our Consultants</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CONSULTANTS.map((c, i) => (
            <div
              key={`${c.name}-${i}`}
              className="rounded-lg bg-white p-6 text-center shadow transition-shadow hover:shadow-md"
            >
              <img
                src={c.image}
                alt={c.name}
                className="mx-auto h-24 w-24 rounded-full object-cover"
                loading="lazy"
              />
              <h4 className="mt-4 text-lg font-bold text-ink">{c.name}</h4>
              <p className="mt-1 text-sm text-brand">{c.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
