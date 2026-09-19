const hashtags = ['#vow', '#vowinstagram', '#vowgirl']
const galleryImages = ['vow-gal-1', 'vow-gal-2', 'vow-gal-3', 'vow-gal-4', 'vow-gal-5', 'vow-gal-6']

export function Gallery() {
  return (
    <section className="relative" aria-label="Gallery">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://picsum.photos/seed/vow-gal-bg/1920/400)',
        }}
      />
      <div className="gallery-overlay py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <ul className="mb-4 flex justify-center gap-6">
            {hashtags.map((tag) => (
              <li key={tag}>
                <a
                  href="#"
                  className="text-lg font-semibold text-white/80 transition-colors hover:text-white"
                >
                  {tag}
                </a>
              </li>
            ))}
          </ul>
          <p className="mb-6 text-sm text-white/70">
            Share your style with our community. Tag us for a chance to be featured.
          </p>
          <a href="#" className="btn-brand">
            Submit
          </a>
        </div>
      </div>
      <div className="grid grid-cols-6">
        {galleryImages.map((img) => (
          <div key={img} className="aspect-square overflow-hidden">
            <img
              src={`https://picsum.photos/seed/${img}/300/300`}
              alt="Gallery item"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
