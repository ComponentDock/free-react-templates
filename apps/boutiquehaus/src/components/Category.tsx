const categories = [
  {
    title: 'Product for Women',
    image: 'https://picsum.photos/seed/boutiquehaus-cat1/600/400',
    span: 'col-span-1',
  },
  {
    title: 'Product for Couple',
    image: 'https://picsum.photos/seed/boutiquehaus-cat2/600/400',
    span: 'col-span-1',
  },
  {
    title: 'Shop Now',
    image: 'https://picsum.photos/seed/boutiquehaus-cat3/1200/400',
    span: 'col-span-1 md:col-span-2',
  },
  {
    title: 'Product For Men',
    image: 'https://picsum.photos/seed/boutiquehaus-cat4/600/800',
    span: 'col-span-1 md:col-span-1',
  },
] as const

export function Category() {
  return (
    <section id="category" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-ink">Shop for Different Categories</h2>
          <p className="mt-3 text-mist">Who are in extremely love with eco friendly system.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* Left column: 2 stacked cards + 1 wide */}
          <div className="flex flex-col gap-4 md:col-span-2 md:grid md:grid-cols-2">
            {categories.slice(0, 2).map((cat) => (
              <a key={cat.title} href="#" className="group relative overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-xl font-bold uppercase tracking-wide text-white">
                    {cat.title}
                  </h3>
                </div>
              </a>
            ))}
            {/* Wide bottom card */}
            <a href="#" className="group relative col-span-2 overflow-hidden">
              <img
                src={categories[2].image}
                alt={categories[2].title}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-xl font-bold uppercase tracking-wide text-white">
                  {categories[2].title}
                </h3>
              </div>
            </a>
          </div>

          {/* Right column: tall card */}
          <a href="#" className="group relative overflow-hidden">
            <img
              src={categories[3].image}
              alt={categories[3].title}
              className="h-full min-h-[536px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-xl font-bold uppercase tracking-wide text-white">
                {categories[3].title}
              </h3>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
