import { Search } from 'lucide-react'

const images = [
  { seed: 'pepperoni-gallery-1', alt: 'Pizza gallery image 1' },
  { seed: 'pepperoni-gallery-2', alt: 'Pizza gallery image 2' },
  { seed: 'pepperoni-gallery-3', alt: 'Pizza gallery image 3' },
  { seed: 'pepperoni-gallery-4', alt: 'Pizza gallery image 4' },
] as const

export function Gallery() {
  return (
    <section className="py-0">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {images.map(({ seed, alt }) => (
          <a
            key={seed}
            href="#gallery"
            className="group relative block h-48 overflow-hidden sm:h-64"
            aria-label={`View ${alt}`}
          >
            <img
              src={`https://picsum.photos/seed/${seed}/400/400`}
              alt={alt}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/40">
              <Search
                className="h-8 w-8 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
