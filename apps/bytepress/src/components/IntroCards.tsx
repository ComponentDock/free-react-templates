const categories = [
  { label: 'technology', seed: 'bytepress-tech' },
  { label: 'videos', seed: 'bytepress-video' },
  { label: 'featured', seed: 'bytepress-feat' },
]

export function IntroCards() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {categories.map((cat) => (
            <a
              key={cat.label}
              href="#"
              className="group relative block h-64 overflow-hidden rounded"
            >
              <img
                src={`https://picsum.photos/seed/${cat.seed}/600/400`}
                alt={cat.label}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <span className="absolute bottom-4 left-4 text-sm font-semibold uppercase tracking-wider text-white">
                {cat.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
