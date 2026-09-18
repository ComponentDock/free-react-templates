interface Category {
  id: number
  count: number
  name: string
  price: string
  image: string
  cols: string
}

const categories: Category[] = [
  {
    id: 1,
    count: 25,
    name: 'Villa In New York',
    price: 'From $28,000',
    image: 'https://picsum.photos/seed/dwellix-cat1/800/500',
    cols: 'sm:col-span-2',
  },
  {
    id: 2,
    count: 25,
    name: 'Home In LA',
    price: 'From $10,000',
    image: 'https://picsum.photos/seed/dwellix-cat2/400/500',
    cols: 'sm:col-span-1',
  },
  {
    id: 3,
    count: 25,
    name: 'Home In Landport',
    price: 'From $16,000',
    image: 'https://picsum.photos/seed/dwellix-cat3/400/500',
    cols: 'sm:col-span-1',
  },
  {
    id: 4,
    count: 25,
    name: 'Home In Springfield',
    price: 'From $12,000',
    image: 'https://picsum.photos/seed/dwellix-cat4/400/500',
    cols: 'sm:col-span-1',
  },
  {
    id: 5,
    count: 25,
    name: 'Villa In Sydney',
    price: 'From $36,000',
    image: 'https://picsum.photos/seed/dwellix-cat5/800/500',
    cols: 'sm:col-span-2',
  },
]

export function PropertyCategories() {
  return (
    <section className="bg-body-bg py-16">
      <div className="mx-auto max-w-6xl px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-heading">
            Categories By <span className="text-brand">Property</span>
          </h2>
          <p className="mt-2 text-body-text">
            We have over 8 years of experience and knowledge on how to sell more.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {categories.map((cat) => (
            <div key={cat.id} className={`group relative overflow-hidden rounded-lg ${cat.cols}`}>
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              </div>

              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="mb-1 text-sm font-medium text-brand">{cat.count} Properties</span>
                <a href="#" className="text-lg font-bold text-white hover:underline">
                  {cat.name}
                </a>
                <p className="text-sm text-white/80">{cat.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
