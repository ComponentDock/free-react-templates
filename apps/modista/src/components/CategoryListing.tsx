const categories = [
  {
    name: 'Men',
    image: 'https://picsum.photos/seed/modista-men/400/500',
    links: ['Down Jackets', 'Hoodies', 'Suits', 'Jeans', 'Casual Pants', 'Sunglass'],
  },
  {
    name: 'Women',
    image: 'https://picsum.photos/seed/modista-women/400/500',
    links: ['Down Jackets', 'Hoodies', 'Suits', 'Jeans', 'Casual Pants', 'Sunglass'],
  },
  {
    name: 'Accessories',
    image: 'https://picsum.photos/seed/modista-acc/400/500',
    links: ['Down Jackets', 'Hoodies', 'Suits', 'Jeans', 'Casual Pants', 'Sunglass'],
  },
] as const

export function CategoryListing() {
  return (
    <section className="mx-auto max-w-[1140px] px-4 py-10" aria-label="Category listing">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {categories.map((cat) => (
          <div key={cat.name} className="flex gap-4">
            <ul className="flex-1 space-y-2">
              <li>
                <h3 className="mb-2 font-heading text-lg font-bold uppercase tracking-wide text-text-heading">
                  {cat.name}
                </h3>
              </li>
              {cat.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-text-secondary transition-colors hover:text-brand-red"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            <img
              src={cat.image}
              alt={`${cat.name} category`}
              className="h-[200px] w-[150px] object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
