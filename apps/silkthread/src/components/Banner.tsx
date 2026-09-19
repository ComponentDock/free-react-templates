const banners = [
  {
    title: 'Clothing Collections 2030',
    image: 'https://picsum.photos/seed/silkthread-banner1/600/400',
  },
  {
    title: 'Accessories',
    image: 'https://picsum.photos/seed/silkthread-banner2/600/400',
  },
  {
    title: 'Shoes Spring 2030',
    image: 'https://picsum.photos/seed/silkthread-banner3/600/400',
  },
]

export function Banner() {
  return (
    <section className="spad" aria-label="Category banners">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {banners.map((banner) => (
            <div key={banner.title} className="group relative overflow-hidden rounded-sm">
              <img
                src={banner.image}
                alt={banner.title}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-6">
                <div>
                  <h2 className="mb-3 text-2xl font-bold text-white">{banner.title}</h2>
                  <a
                    href="#products"
                    className="text-sm font-bold uppercase tracking-wider text-white underline underline-offset-4 hover:text-brand"
                  >
                    Shop now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
