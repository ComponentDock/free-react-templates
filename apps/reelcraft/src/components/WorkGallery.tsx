import { Play } from 'lucide-react'

const items = [
  {
    title: 'Brand Film',
    image: 'https://picsum.photos/seed/reelcraft-work1/800/600',
    span: 'col-span-2 row-span-2',
  },
  {
    title: 'Music Video',
    image: 'https://picsum.photos/seed/reelcraft-work2/400/300',
    span: 'col-span-1 row-span-1',
  },
  {
    title: 'Commercial',
    image: 'https://picsum.photos/seed/reelcraft-work3/400/300',
    span: 'col-span-1 row-span-1',
  },
  {
    title: 'Documentary',
    image: 'https://picsum.photos/seed/reelcraft-work4/400/300',
    span: 'col-span-1 row-span-1',
  },
  {
    title: 'Event Highlight',
    image: 'https://picsum.photos/seed/reelcraft-work5/400/300',
    span: 'col-span-1 row-span-1',
  },
] as const

export function WorkGallery() {
  return (
    <section id="portfolio" className="bg-surface-dark py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className={`group relative overflow-hidden ${item.span}`}>
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/50 bg-black/30 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Play className="h-6 w-6 ml-1" aria-hidden="true" />
                </div>
              </div>
              {/* Title overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex h-full items-end p-4">
                  <span className="font-display text-lg font-bold text-white">{item.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
