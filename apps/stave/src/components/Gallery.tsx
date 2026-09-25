const galleryImages = [
  { id: 1, cols: 5 },
  { id: 2, cols: 7 },
  { id: 3, cols: 4 },
  { id: 4, cols: 4 },
  { id: 5, cols: 4 },
] as const

export function Gallery() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-10 text-center font-heading text-3xl font-bold text-heading">
          Image Galleries
        </h2>
        <div className="grid grid-cols-4 gap-2">
          {galleryImages.map((img, i) => (
            <div
              key={img.id}
              className="overflow-hidden rounded"
              style={{ gridColumn: `span ${img.cols}` }}
            >
              <img
                src={`https://picsum.photos/seed/stave-gallery-${img.id}/600/400`}
                alt={`Gallery image ${i + 1}`}
                className="h-64 w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
