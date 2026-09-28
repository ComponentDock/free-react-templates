import { useState, useRef, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const specialties = [
  {
    img: 'https://picsum.photos/seed/seared-spec1/400/300',
    title: 'Grilled Egg With Garlic',
    text: 'Deliciously seasoned egg with roasted garlic and herbs.',
  },
  {
    img: 'https://picsum.photos/seed/seared-spec2/400/300',
    title: 'Tropical Fruit Salad',
    text: 'Fresh tropical fruits tossed in a light citrus dressing.',
  },
  {
    img: 'https://picsum.photos/seed/seared-spec3/400/300',
    title: 'Italian Pizza Margherita',
    text: 'Classic pizza with San Marzano tomatoes and fresh mozzarella.',
  },
  {
    img: 'https://picsum.photos/seed/seared-spec4/400/300',
    title: 'Grilled Beef Tenderloin',
    text: 'Perfectly seared tenderloin with rosemary butter.',
  },
  {
    img: 'https://picsum.photos/seed/seared-spec5/400/300',
    title: 'Lobster Thermidor',
    text: 'Rich lobster in creamy brandy sauce with gruyere.',
  },
  {
    img: 'https://picsum.photos/seed/seared-spec6/400/300',
    title: 'Chocolate Lava Cake',
    text: 'Warm chocolate cake with a molten center and vanilla ice cream.',
  },
]

export function Specialties() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = useCallback(() => {
    const el = scrollRef.current!
    setCanScrollLeft(el.scrollLeft > 0)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10)
  }, [])

  const scroll = useCallback((dir: 'left' | 'right') => {
    const el = scrollRef.current!
    const amount = el.clientWidth * 0.7
    el.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' })
  }, [])

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2
          className="mb-12 text-center text-3xl font-bold text-ink sm:text-4xl"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Our Specialties
        </h2>

        <div className="relative">
          {canScrollLeft && (
            <button
              type="button"
              onClick={() => scroll('left')}
              className="absolute -left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md transition hover:bg-brand hover:text-white"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
          )}

          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="scrollbar-hide flex gap-6 overflow-x-auto pb-4"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {specialties.map((s) => (
              <div
                key={s.title}
                className="min-w-[280px] flex-shrink-0 overflow-hidden rounded-2xl bg-white shadow-sm"
                style={{ scrollSnapAlign: 'start' }}
              >
                <img src={s.img} alt={s.title} className="h-48 w-full object-cover" />
                <div className="p-5">
                  <h4 className="mb-2 text-base font-bold text-ink">{s.title}</h4>
                  <p className="text-sm leading-relaxed text-body">{s.text}</p>
                </div>
              </div>
            ))}
          </div>

          {canScrollRight && (
            <button
              type="button"
              onClick={() => scroll('right')}
              className="absolute -right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md transition hover:bg-brand hover:text-white"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
