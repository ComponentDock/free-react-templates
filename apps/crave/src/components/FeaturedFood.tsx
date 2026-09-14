import { Star } from 'lucide-react'

const featuredItems = [
  {
    name: 'Mountain Mike Pizza',
    desc: 'Wood-fired perfection',
    price: 35,
    rating: 5,
    img: 'https://picsum.photos/seed/crave-feat1/400/300',
  },
  {
    name: 'Patatas Bravas',
    desc: 'Spiced crispy potatoes',
    price: 30,
    rating: 5,
    img: 'https://picsum.photos/seed/crave-feat2/400/300',
  },
  {
    name: 'Pulled Sandwich',
    desc: 'Slow-cooked tender meat',
    price: 20,
    rating: 5,
    img: 'https://picsum.photos/seed/crave-feat3/400/300',
  },
  {
    name: 'Gourmet Burger',
    desc: 'Angus beef classic',
    price: 28,
    rating: 5,
    img: 'https://picsum.photos/seed/crave-feat4/400/300',
  },
]

export function FeaturedFood() {
  return (
    <section className="py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h4 className="mb-3 font-heading text-2xl font-semibold text-brand">Featured Food</h4>
        <h2 className="mb-12 font-heading text-3xl font-bold text-heading sm:text-4xl lg:text-5xl">
          Fresh taste and great price
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredItems.map((item) => (
            <div
              key={item.name}
              className="group overflow-hidden rounded-lg bg-cream transition-shadow hover:shadow-xl"
            >
              <img
                src={item.img}
                alt={item.name}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <h3 className="mb-1 font-heading text-lg font-bold text-heading">{item.name}</h3>
                <p className="mb-3 text-sm text-gray-500">{item.desc}</p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="font-sans text-lg font-bold text-brand">${item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
