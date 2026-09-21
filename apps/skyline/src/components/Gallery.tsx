import { Eye } from 'lucide-react'

const images = [
  { seed: 'skyline-gal-1', alt: 'Restaurant interior with warm lighting' },
  { seed: 'skyline-gal-2', alt: 'Plated gourmet dish' },
  { seed: 'skyline-gal-3', alt: 'Elegant table setting' },
  { seed: 'skyline-gal-4', alt: 'Chef preparing a dish' },
] as const

export function Gallery() {
  return (
    <section id="gallery" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-12 text-center font-display text-4xl font-bold text-ink">Gallery</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {images.map((image, index) => (
            <div
              key={image.seed}
              className={`relative overflow-hidden rounded ${
                index % 3 === 0 ? 'sm:row-span-2' : ''
              }`}
            >
              <img
                src={`https://picsum.photos/seed/${image.seed}/600/${index % 3 === 0 ? 800 : 400}`}
                alt={image.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 hover:bg-black/40">
                <Eye
                  className="h-8 w-8 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
