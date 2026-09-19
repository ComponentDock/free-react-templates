const images = [
  { src: 'https://picsum.photos/seed/treklore-insta1/400/400', alt: 'Treklore Instagram post 1' },
  { src: 'https://picsum.photos/seed/treklore-insta2/400/400', alt: 'Treklore Instagram post 2' },
  { src: 'https://picsum.photos/seed/treklore-insta3/400/400', alt: 'Treklore Instagram post 3' },
  { src: 'https://picsum.photos/seed/treklore-insta4/400/400', alt: 'Treklore Instagram post 4' },
  { src: 'https://picsum.photos/seed/treklore-insta5/400/400', alt: 'Treklore Instagram post 5' },
  { src: 'https://picsum.photos/seed/treklore-insta6/400/400', alt: 'Treklore Instagram post 6' },
]

export function InstagramFeed() {
  return (
    <section aria-label="Instagram feed" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-widest text-brand-blue">
            follow our journey
          </span>
          <h2 className="mt-2 font-display text-4xl font-bold uppercase tracking-wide text-navy">
            @Treklore on Instagram
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
          {images.map((img) => (
            <a
              key={img.src}
              href="#"
              className="group relative aspect-square overflow-hidden"
              aria-label={img.alt}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-brand-blue/0 opacity-0 transition-all duration-300 group-hover:bg-brand-blue/70 group-hover:opacity-100">
                {/* Instagram icon inline */}
                <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
