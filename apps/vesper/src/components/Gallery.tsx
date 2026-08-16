import { ZoomIn } from 'lucide-react'

const photos = [25, 26, 27, 28, 29, 30].map((n) => ({
  src: `https://picsum.photos/seed/vesper-${n}/600/600`,
  alt: `Gallery photo ${n - 24}`,
}))

export function Gallery() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-center font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
          Vesper Church Photo Gallery
        </h2>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo) => (
            <a
              key={photo.src}
              href="#gallery"
              aria-label={`View ${photo.alt}`}
              className="group relative block overflow-hidden rounded-lg"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/40 group-hover:opacity-100">
                <ZoomIn className="h-8 w-8 text-white" aria-hidden="true" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
