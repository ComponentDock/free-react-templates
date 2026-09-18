import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const bestSellers = [
  {
    id: 1,
    name: 'Fujifilm X100T Camera',
    price: 520,
    originalPrice: 590,
    seed: 'shoplane-bs1',
    badge: 'sale' as const,
  },
  {
    id: 2,
    name: 'Samsung Curved Monitor',
    price: 610,
    seed: 'shoplane-bs2',
    badge: 'new' as const,
  },
  { id: 3, name: 'Blue Yeti Microphone', price: 120, seed: 'shoplane-bs3' },
  { id: 4, name: 'DYMO LabelWriter', price: 410, seed: 'shoplane-bs4', badge: 'sale' as const },
  { id: 5, name: 'Pryma Headphones', price: 180, seed: 'shoplane-bs5' },
]

function SlideCard({ item }: { item: (typeof bestSellers)[number] }) {
  return (
    <div className="min-w-[250px] flex-shrink-0 text-center">
      <div className="relative mb-3 overflow-hidden rounded bg-gray-50">
        <img
          src={`https://picsum.photos/seed/${item.seed}/300/300`}
          alt={item.name}
          className="h-56 w-full object-cover"
          loading="lazy"
        />
        {item.badge && (
          <span
            className={
              item.badge === 'sale'
                ? 'absolute left-2 top-2 rounded bg-green-500 px-2 py-0.5 text-xs font-bold uppercase text-white'
                : 'absolute left-2 top-2 rounded bg-coral-500 px-2 py-0.5 text-xs font-bold uppercase text-white'
            }
          >
            {item.badge}
          </span>
        )}
      </div>
      <h6 className="mb-1 text-sm font-medium text-gray-800">{item.name}</h6>
      <div className="text-sm text-gray-500">
        <span className="font-semibold text-gray-900">${item.price.toFixed(2)}</span>
        {item.originalPrice && (
          <span className="ml-1 text-gray-400 line-through">${item.originalPrice.toFixed(2)}</span>
        )}
      </div>
    </div>
  )
}

export function BestSellers() {
  const trackRef = useRef<HTMLDivElement>(null)

  function scrollLeft() {
    trackRef.current?.scrollBy({ left: -260, behavior: 'smooth' })
  }

  function scrollRight() {
    trackRef.current?.scrollBy({ left: 260, behavior: 'smooth' })
  }

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">Best Sellers</h2>

        <div className="relative">
          <button
            type="button"
            onClick={scrollLeft}
            aria-label="Previous"
            className="absolute -left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow transition-colors hover:bg-gray-50"
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>

          <div
            ref={trackRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none' }}
          >
            {bestSellers.map((item) => (
              <SlideCard key={item.id} item={item} />
            ))}
          </div>

          <button
            type="button"
            onClick={scrollRight}
            aria-label="Next"
            className="absolute -right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow transition-colors hover:bg-gray-50"
          >
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  )
}
