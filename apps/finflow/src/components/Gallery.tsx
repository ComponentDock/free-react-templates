import { Search } from 'lucide-react'

const images = Array.from({ length: 12 }, (_, i) => ({
  seed: `finflow-gallery-${i + 1}`,
  alt: `Financial service gallery image ${i + 1}`,
}))

export function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-white py-20 transition-colors dark:bg-gray-950 lg:py-[120px]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            Gallery
          </span>
          <h2 className="mt-4 text-3xl font-bold uppercase text-ink dark:text-white sm:text-4xl">
            Gallery
          </h2>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((img) => (
            <div key={img.seed} className="group relative overflow-hidden rounded-xl">
              <img
                src={`https://picsum.photos/seed/${img.seed}/400/400`}
                alt={img.alt}
                loading="lazy"
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-brand/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Search className="h-8 w-8 text-white" aria-hidden="true" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
