import { Search } from 'lucide-react'

const images = [
  { seed: 'optic-gallery-1', alt: 'Portrait photography' },
  { seed: 'optic-gallery-2', alt: 'Wedding photography' },
  { seed: 'optic-gallery-3', alt: 'Event photography' },
  { seed: 'optic-gallery-4', alt: 'Landscape photography' },
  { seed: 'optic-gallery-5', alt: 'Street photography' },
  { seed: 'optic-gallery-6', alt: 'Nature photography' },
  { seed: 'optic-gallery-7', alt: 'Architecture photography' },
  { seed: 'optic-gallery-8', alt: 'Travel photography' },
  { seed: 'optic-gallery-9', alt: 'Fashion photography' },
  { seed: 'optic-gallery-10', alt: 'Editorial photography' },
]

export function Gallery() {
  return (
    <section id="gallery" className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Photography</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img) => (
            <div key={img.seed} className="relative group overflow-hidden rounded-lg">
              <img
                src={`https://picsum.photos/seed/${img.seed}/600/600`}
                alt={img.alt}
                className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Search className="w-8 h-8 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
