import { useState } from 'react'
import { cn } from '@free-react-templates/ui'

const galleryItems = [
  { id: 1, caption: 'Fashion Editorial', seed: 'clareo-gal-1' },
  { id: 2, caption: 'Portrait Session', seed: 'clareo-gal-2' },
  { id: 3, caption: 'Street Photography', seed: 'clareo-gal-3' },
  { id: 4, caption: 'Commercial Shoot', seed: 'clareo-gal-4' },
  { id: 5, caption: 'Natural Light', seed: 'clareo-gal-5' },
  { id: 6, caption: 'Studio Work', seed: 'clareo-gal-6' },
  { id: 7, caption: 'Event Coverage', seed: 'clareo-gal-7' },
  { id: 8, caption: 'Creative Series', seed: 'clareo-gal-8' },
]

export default function Gallery() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="gallery" className="bg-black py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center font-display text-4xl font-bold text-white">Our Works</h2>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
          {galleryItems.map((item) => (
            <a
              key={item.id}
              href={`https://picsum.photos/seed/${item.seed}/800/600`}
              className="group relative block aspect-square overflow-hidden"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              aria-label={`View ${item.caption}`}
            >
              <img
                src={`https://picsum.photos/seed/${item.seed}/400/400`}
                alt={item.caption}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div
                className={cn(
                  'absolute inset-0 flex items-center justify-center bg-black/60 transition-opacity duration-300',
                  hoveredId === item.id ? 'opacity-100' : 'opacity-0',
                )}
              >
                <span className="text-lg font-bold text-white">{item.caption}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
