const spaces = [
  {
    image: 'https://picsum.photos/seed/workhive-space1/600/400',
    title: 'Modern Open Space',
  },
  {
    image: 'https://picsum.photos/seed/workhive-space2/600/400',
    title: 'Private Studio',
  },
  {
    image: 'https://picsum.photos/seed/workhive-space3/600/400',
    title: 'Collaborative Hub',
  },
] as const

export function Spaces() {
  return (
    <section id="spaces" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {spaces.map((space) => (
            <div key={space.title} className="group relative overflow-hidden rounded-lg">
              <img
                src={space.image}
                alt={space.title}
                className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="mb-2 text-xl font-bold text-white">Spaces that you'd love</h3>
                <p className="mb-4 text-sm text-gray-200">Starting from $500</p>
                <a
                  href="#"
                  className="rounded border border-white px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-ink"
                >
                  Explore More Spaces
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
