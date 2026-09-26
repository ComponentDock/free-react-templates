const images = Array.from({ length: 16 }, (_, i) => ({
  seed: `shuttercraft-gallery-${i + 1}`,
  alt: `Gallery photo ${i + 1}`,
}))

export function Gallery() {
  return (
    <section id="gallery" className="bg-gallery py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-3xl font-semibold text-white">My Recent Photos</h2>
          <p className="mx-auto max-w-xl text-white/70">
            A curated selection of moments captured through the viewfinder, each telling its own
            unique story.
          </p>
        </div>
        <div className="columns-1 gap-3 sm:columns-2 md:columns-3 lg:columns-4">
          {images.map((img) => (
            <img
              key={img.seed}
              src={`https://picsum.photos/seed/${img.seed}/400/300`}
              alt={img.alt}
              loading="lazy"
              className="mb-3 w-full rounded-md transition-transform hover:scale-[1.02]"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
