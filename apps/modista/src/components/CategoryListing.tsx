const categories = [
  {
    name: 'Men',
    image: 'https://picsum.photos/seed/modista-men/400/350',
    subcategories: ['Down Jackets', 'Hoodies', 'Suits', 'Jeans', 'Casual Pants', 'Sunglass'],
  },
  {
    name: 'Women',
    image: 'https://picsum.photos/seed/modista-women/400/350',
    subcategories: ['Down Jackets', 'Hoodies', 'Suits', 'Jeans', 'Casual Pants', 'Sunglass'],
  },
  {
    name: 'Accessories',
    image: 'https://picsum.photos/seed/modista-acc/400/350',
    subcategories: ['Down Jackets', 'Hoodies', 'Suits', 'Jeans', 'Casual Pants', 'Sunglass'],
  },
] as const

export function CategoryListing() {
  return (
    <section className="mx-auto max-w-[1140px] px-4 py-12" aria-label="Product categories">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {categories.map((category) => (
          <div key={category.name} className="flex flex-col">
            <h3 className="mb-4 font-heading text-lg font-bold uppercase tracking-wide text-text-heading">
              {category.name}
            </h3>
            <ul className="mb-4 space-y-2">
              {category.subcategories.map((sub) => (
                <li key={sub}>
                  <a
                    href={`#${sub.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-sm text-text-secondary hover:text-brand-red transition-colors"
                  >
                    {sub}
                  </a>
                </li>
              ))}
            </ul>
            <img
              src={category.image}
              alt={`${category.name} category`}
              className="h-[200px] w-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
