const galleryItems = [
  { title: 'Autumn Leaf', count: 5, category: 'Nature', seed: 'photonic-gal1' },
  { title: 'Sea Creatures', count: 5, category: 'Nature', seed: 'photonic-gal2' },
  { title: 'Enjoying Deep Sea', count: 5, category: 'Nature', seed: 'photonic-gal3' },
  { title: 'Beautiful Beach', count: 5, category: 'Nature', seed: 'photonic-gal4' },
  { title: 'Laughter is Science', count: 5, category: 'Nature', seed: 'photonic-gal5' },
  { title: 'Golden Hour', count: 5, category: 'Nature', seed: 'photonic-gal6' },
]

export function Gallery() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900">My Photography</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <div key={item.title} className="group relative overflow-hidden rounded-lg">
              <img
                src={`https://picsum.photos/seed/${item.seed}/600/400`}
                alt={item.title}
                className="h-64 w-full object-cover transition duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 opacity-0 transition duration-300 group-hover:opacity-100">
                <h3 className="mb-1 text-lg font-bold text-white">{item.title}</h3>
                <p className="text-sm text-white/80">
                  {item.count} photos / {item.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
