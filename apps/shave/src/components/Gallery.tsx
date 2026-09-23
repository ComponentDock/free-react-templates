const images = [
  { seed: 'shave-g1', label: 'Upper Cutting' },
  { seed: 'shave-g2', label: 'Classic Trim' },
  { seed: 'shave-g3', label: 'Beard Design' },
  { seed: 'shave-g4', label: 'Hot Towel Shave' },
  { seed: 'shave-g5', label: 'Style Consultation' },
  { seed: 'shave-g6', label: 'Premium Grooming' },
]

export function Gallery() {
  return (
    <section id="gallery" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Gallery</h2>
          <p className="mt-2 text-gray-500">A glimpse of our finest work.</p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {images.map((img) => (
            <div key={img.seed} className="group relative overflow-hidden rounded-lg">
              <img
                src={`https://picsum.photos/seed/${img.seed}/400/300`}
                alt={img.label}
                className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h4 className="text-lg font-semibold text-white">{img.label}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
