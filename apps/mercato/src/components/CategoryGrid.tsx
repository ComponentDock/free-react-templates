const categories = [
  {
    title: 'Sneaker for Sports',
    image: 'https://picsum.photos/seed/mercato-cat1/600/400',
    span: 'col-span-2 md:col-span-2',
  },
  {
    title: 'Running Gear',
    image: 'https://picsum.photos/seed/mercato-cat2/600/400',
    span: 'col-span-1',
  },
  {
    title: 'Casual Wear',
    image: 'https://picsum.photos/seed/mercato-cat3/600/400',
    span: 'col-span-1',
  },
  {
    title: 'Sneaker for Sports',
    image: 'https://picsum.photos/seed/mercato-cat4/600/400',
    span: 'col-span-2 md:col-span-2',
  },
  {
    title: 'Sneaker for Sports',
    image: 'https://picsum.photos/seed/mercato-cat5/600/800',
    span: 'col-span-2 md:col-span-1 md:row-span-2',
  },
]

export function CategoryGrid() {
  return (
    <section className="bg-bg-light py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {categories.map((cat, i) => (
            <div key={i} className={`group relative overflow-hidden rounded-xl ${cat.span}`}>
              <img
                src={cat.image}
                alt={cat.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute bottom-4 left-4 opacity-0 transition-opacity group-hover:opacity-100">
                <h6 className="text-sm font-semibold text-white">{cat.title}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
