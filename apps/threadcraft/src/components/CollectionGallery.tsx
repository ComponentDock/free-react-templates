const images = [
  { src: 'https://picsum.photos/seed/col1/400/400', label: 'Summer Dresses' },
  { src: 'https://picsum.photos/seed/col2/400/400', label: 'Denim Collection' },
  { src: 'https://picsum.photos/seed/col3/400/400', label: 'Active Wear' },
  { src: 'https://picsum.photos/seed/col4/400/400', label: 'Outerwear' },
  { src: 'https://picsum.photos/seed/col5/400/400', label: 'Footwear' },
  { src: 'https://picsum.photos/seed/col6/400/400', label: 'Accessories' },
]

export function CollectionGallery() {
  return (
    <section className="bg-section-bg">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-extrabold text-text-dark text-center mb-8">Our Collection</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img) => (
            <div key={img.src} className="relative group overflow-hidden rounded-lg">
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end p-4">
                <span className="text-white font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  {img.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
