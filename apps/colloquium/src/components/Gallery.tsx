import { Search } from 'lucide-react'

export interface GalleryProps {
  className?: string
}

const images = [
  { seed: 'convention-gal-1', alt: 'Gallery image 1' },
  { seed: 'convention-gal-2', alt: 'Gallery image 2' },
  { seed: 'convention-gal-3', alt: 'Gallery image 3' },
  { seed: 'convention-gal-4', alt: 'Gallery image 4' },
  { seed: 'convention-gal-5', alt: 'Gallery image 5' },
  { seed: 'convention-gal-6', alt: 'Gallery image 6' },
  { seed: 'convention-gal-7', alt: 'Gallery image 7' },
  { seed: 'convention-gal-8', alt: 'Gallery image 8' },
]

export function Gallery({ className }: GalleryProps) {
  return (
    <section id="gallery" className={`bg-[#1a1a2e] py-20 md:py-28 ${className ?? ''}`}>
      <div className="mx-auto max-w-6xl px-6">
        <p
          className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-[#ff2d9b]"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Event Gallery
        </p>
        <h2
          className="mb-12 text-center text-3xl font-bold text-white md:text-4xl"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Our Event Gallery
        </h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {images.map((img) => (
            <div
              key={img.seed}
              className="group relative overflow-hidden rounded-lg"
              data-testid="gallery-item"
            >
              <img
                src={`https://picsum.photos/seed/${img.seed}/400/300`}
                alt={img.alt}
                className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-[#ff2d9b]/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Search size={28} className="text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
