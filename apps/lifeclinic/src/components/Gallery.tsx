import { galleryTitle, gallerySeeMore, galleryImages } from '../data'

export function Gallery() {
  return (
    <section id="gallery" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-heading">{galleryTitle}</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {galleryImages.map((img) => (
            <div key={img.seed} className="group relative overflow-hidden rounded-lg">
              <img
                src={`https://picsum.photos/seed/${img.seed}/400/300`}
                alt={img.alt}
                loading="lazy"
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-navy/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <a
                  href="#"
                  className="rounded bg-cta px-6 py-2 text-sm font-bold text-white transition-colors hover:bg-cta-hover"
                >
                  {gallerySeeMore}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
