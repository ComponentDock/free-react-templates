const GALLERY_IMAGES = [
  'https://picsum.photos/seed/tastory-g1/600/600',
  'https://picsum.photos/seed/tastory-g2/600/600',
  'https://picsum.photos/seed/tastory-g3/600/600',
  'https://picsum.photos/seed/tastory-g4/600/600',
  'https://picsum.photos/seed/tastory-g5/600/600',
  'https://picsum.photos/seed/tastory-g6/600/600',
]

export function Gallery() {
  return (
    <section id="gallery" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-heading text-4xl font-bold text-black">Gallery</h2>
          <p className="mx-auto max-w-2xl text-lg text-body-text">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {GALLERY_IMAGES.map((src, i) => (
            <a key={src} href={src} className="group overflow-hidden rounded">
              <img
                src={src}
                alt={`Gallery image ${i + 1}`}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
