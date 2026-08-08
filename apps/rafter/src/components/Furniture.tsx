const sofas = [
  { title: 'Green Butter Sofa', image: 'https://picsum.photos/seed/rafter-1/800/600' },
  { title: 'Green Butter Sofa', image: 'https://picsum.photos/seed/rafter-2/800/600' },
  { title: 'Green Butter Sofa', image: 'https://picsum.photos/seed/rafter-3/800/600' },
] as const

export function Furniture() {
  return (
    <section id="about" className="bg-paper py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-sm font-bold uppercase tracking-[0.3em] text-brand">
            Our furniture
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-ink dark:text-white sm:text-4xl">
            Most Popular Furnitures
          </h2>
          <p className="mt-4 text-mist dark:text-gray-400">
            Carefully crafted pieces designed to make every room feel like home.
          </p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {sofas.map((sofa, index) => (
            <article key={index} className="group">
              <img
                src={sofa.image}
                alt={sofa.title}
                className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="bg-white p-6 text-center dark:bg-gray-800">
                <h3 className="font-display text-lg font-bold text-ink dark:text-white">
                  {sofa.title}
                </h3>
                <p className="mt-2 text-sm text-mist dark:text-gray-400">
                  Hand-finished upholstery with solid hardwood frame.
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
