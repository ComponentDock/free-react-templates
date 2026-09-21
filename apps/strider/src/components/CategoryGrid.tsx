const categories = [
  {
    title: "Men's Collection",
    image: 'https://picsum.photos/seed/strider-men/500/400',
    span: 'col-span-2 row-span-2',
  },
  {
    title: "Women's Collection",
    image: 'https://picsum.photos/seed/strider-women/400/300',
    span: 'col-span-1',
  },
  {
    title: 'Sports Wear',
    image: 'https://picsum.photos/seed/strider-sports/400/300',
    span: 'col-span-1',
  },
  {
    title: 'Casual Wear',
    image: 'https://picsum.photos/seed/strider-casual/400/300',
    span: 'col-span-1',
  },
  {
    title: 'Accessories',
    image: 'https://picsum.photos/seed/strider-acc/500/300',
    span: 'col-span-2',
  },
]

export function CategoryGrid() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className={`group relative overflow-hidden rounded-xl ${cat.span}`}
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h3
                  className="text-lg font-semibold text-white"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {cat.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
