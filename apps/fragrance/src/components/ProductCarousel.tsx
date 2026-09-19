const slides = [
  { name: 'Wireless Headphone', category: 'Accessories Item', seed: 'frag-prod-1' },
  { name: 'Leather Watch', category: 'Accessories Item', seed: 'frag-prod-2' },
  { name: 'Canvas Sneakers', category: 'Footwear', seed: 'frag-prod-3' },
]

export function ProductCarousel() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {slides.map((slide) => (
            <div key={slide.seed} className="group relative overflow-hidden rounded-lg">
              <img
                src={`https://picsum.photos/seed/${slide.seed}/600/400`}
                alt={slide.name}
                className="h-[300px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-brand/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="font-heading text-lg font-semibold text-white">{slide.name}</span>
                <span className="mt-1 text-sm text-white/80">{slide.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
