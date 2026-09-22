import { ArrowUpRight } from 'lucide-react'

interface GalleryItem {
  seed: string
  title: string
  category: string
}

const galleryItems: GalleryItem[] = [
  { seed: 'fitcore-gallery-1', title: 'Strength Zone', category: 'Fitness, Body' },
  { seed: 'fitcore-gallery-2', title: 'Cardio Studio', category: 'Cardio, Endurance' },
  { seed: 'fitcore-gallery-3', title: 'Free Weights', category: 'Strength, Power' },
  { seed: 'fitcore-gallery-4', title: 'Group Classes', category: 'Classes, Community' },
  { seed: 'fitcore-gallery-5', title: 'Recovery Area', category: 'Wellness, Recovery' },
]

function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <div className="group relative overflow-hidden">
      <img
        src={`https://picsum.photos/seed/${item.seed}/400/300`}
        alt={item.title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/60 group-hover:opacity-100">
        <ArrowUpRight className="mb-3 h-6 w-6 text-white" />
        <h3 className="font-display text-xl font-bold text-white">{item.title}</h3>
        <p className="text-sm text-gray-300">{item.category}</p>
      </div>
    </div>
  )
}

export function Gallery() {
  const [largeItem, ...smallItems] = galleryItems

  return (
    <section id="gallery" className="py-0">
      <div className="grid md:grid-cols-2">
        {/* Left: large image */}
        {largeItem && (
          <div className="group relative overflow-hidden">
            <img
              src={`https://picsum.photos/seed/${largeItem.seed}/800/600`}
              alt={largeItem.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/60 group-hover:opacity-100">
              <ArrowUpRight className="mb-3 h-6 w-6 text-white" />
              <h3 className="font-display text-2xl font-bold text-white">{largeItem.title}</h3>
              <p className="text-sm text-gray-300">{largeItem.category}</p>
            </div>
          </div>
        )}

        {/* Right: 2x2 grid */}
        <div className="grid grid-cols-2">
          {smallItems.map((item) => (
            <GalleryCard key={item.seed} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
