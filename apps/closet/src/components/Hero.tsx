import { useState, useCallback, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const slides = [
  {
    heading: 'New Arrivals',
    subheading: 'Summer Wear',
    description: 'Cool Clothing with Brown Stripes',
    price: '3.99',
    rating: 4,
    inStock: true,
    image: 'https://picsum.photos/seed/closet-hero1/1920/900',
    products: [
      { id: 1, name: 'Striped Jumpsuit', image: 'https://picsum.photos/seed/closet-p1/300/400' },
      { id: 2, name: 'Brown Stripe Set', image: 'https://picsum.photos/seed/closet-p2/300/400' },
      { id: 3, name: 'Casual Tee', image: 'https://picsum.photos/seed/closet-p3/300/400' },
    ],
  },
  {
    heading: 'New Arrivals',
    subheading: 'Winter Collection',
    description: 'Cozy Knits and Warm Layers',
    price: '5.99',
    rating: 5,
    inStock: true,
    image: 'https://picsum.photos/seed/closet-hero2/1920/900',
    products: [
      { id: 4, name: 'Wool Sweater', image: 'https://picsum.photos/seed/closet-p4/300/400' },
      { id: 5, name: 'Knit Cardigan', image: 'https://picsum.photos/seed/closet-p5/300/400' },
      { id: 6, name: 'Warm Hoodie', image: 'https://picsum.photos/seed/closet-p6/300/400' },
    ],
  },
  {
    heading: 'New Arrivals',
    subheading: 'Spring Trends',
    description: 'Fresh Styles for the Season',
    price: '4.49',
    rating: 4,
    inStock: true,
    image: 'https://picsum.photos/seed/closet-hero3/1920/900',
    products: [
      { id: 7, name: 'Floral Dress', image: 'https://picsum.photos/seed/closet-p7/300/400' },
      { id: 8, name: 'Linen Blouse', image: 'https://picsum.photos/seed/closet-p8/300/400' },
      { id: 9, name: 'Canvas Sneakers', image: 'https://picsum.photos/seed/closet-p9/300/400' },
    ],
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={14}
          className={i < count ? 'fill-brand text-brand' : 'text-mist'}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

export function Hero() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  const slide = slides[current]!

  return (
    <section
      className="relative min-h-[500px] bg-cover bg-center md:min-h-[600px]"
      style={{ backgroundImage: `url(${slide.image})` }}
      aria-label="Hero slider"
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-16 text-center">
        {/* Heading */}
        <h1 className="font-display text-5xl font-bold italic text-white drop-shadow-md md:text-7xl">
          {slide.heading}
        </h1>
        <h2 className="font-display text-4xl font-bold italic text-white/90 drop-shadow-md md:text-6xl">
          {slide.subheading}
        </h2>

        {/* Product carousel */}
        <div className="mt-10 flex items-center gap-4">
          <button
            type="button"
            onClick={prevSlide}
            className="flex h-10 w-10 items-center justify-center rounded bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/40"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex gap-4">
            {slide.products.map((product, idx) => (
              <div
                key={product.id}
                className={`relative rounded bg-white shadow-lg transition-all ${
                  idx === 1 ? 'z-10 scale-105' : 'hidden sm:block'
                }`}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-52 w-40 object-cover sm:h-64 sm:w-48"
                />
                {idx === 1 && (
                  <>
                    <div className="absolute -right-2 -top-2 flex h-14 w-14 items-center justify-center rounded-full bg-brand text-center text-white shadow">
                      <span className="text-[10px] leading-tight">
                        from
                        <br />
                        <span className="text-lg font-bold">${slide.price}</span>
                      </span>
                    </div>
                    <div className="p-3">
                      <p className="text-sm font-semibold text-ink">{slide.description}</p>
                      <p className="text-xs text-brand">In Stock</p>
                      <div className="mt-1 flex items-center gap-2">
                        <Stars count={slide.rating} />
                        <span className="text-sm font-bold text-ink">${slide.price}</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            className="flex h-10 w-10 items-center justify-center rounded bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/40"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
