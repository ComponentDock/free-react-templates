const images = Array.from({ length: 6 }).map((_, i) => ({
  src: `https://picsum.photos/seed/silkthread-ig${i + 1}/400/400`,
  alt: `Instagram post ${i + 1}`,
}))

export function Instagram() {
  return (
    <section className="spad" aria-label="Instagram feed">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-8 lg:grid-cols-12">
          {/* Image grid — 6 columns */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-3 sm:grid-cols-6">
              {images.map((img) => (
                <a
                  key={img.alt}
                  href="#"
                  className="group relative block aspect-square overflow-hidden"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="text-lg font-bold text-white">Instagram</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-4 lg:pl-8">
            <h2 className="mb-4 text-4xl font-bold text-ink">Instagram</h2>
            <p className="mb-4 text-body">
              Follow us on Instagram for the latest trends, new arrivals, and exclusive offers in
              men's fashion.
            </p>
            <h3 className="text-xl font-bold text-brand">#SilkThread</h3>
          </div>
        </div>
      </div>
    </section>
  )
}
