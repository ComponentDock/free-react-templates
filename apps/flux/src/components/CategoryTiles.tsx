const categories = [
  { label: 'Agency', image: 'https://picsum.photos/seed/flux-cat1/960/400' },
  { label: 'What We Do?', image: 'https://picsum.photos/seed/flux-cat2/960/400' },
]

export function CategoryTiles() {
  return (
    <section id="about" className="flex flex-col md:flex-row">
      {categories.map((cat) => (
        <div
          key={cat.label}
          className="group relative flex h-64 flex-1 items-center justify-center overflow-hidden bg-gray-200 md:h-80"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${cat.image})` }}
          />
          <div className="absolute inset-0 bg-black/30 transition-colors duration-500 group-hover:bg-black/50" />
          <a
            href="#"
            className="relative z-10 text-lg font-semibold text-white transition-colors hover:text-brand-orange"
          >
            {cat.label}
          </a>
        </div>
      ))}
    </section>
  )
}
