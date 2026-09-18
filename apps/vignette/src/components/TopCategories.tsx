const categories = [
  {
    image: 'https://picsum.photos/seed/vignette-cat1/800/500',
    label: 'On Accessories',
    title: 'Sale 30%',
    cta: 'SHOP NOW',
    href: '#shop',
  },
  {
    image: 'https://picsum.photos/seed/vignette-cat2/800/500',
    label: 'In Bags excepting the new collection',
    title: 'Designer Bags',
    cta: 'SHOP NOW',
    href: '#shop',
  },
] as const

export function TopCategories() {
  return (
    <section aria-label="Top categories" className="flex flex-col md:flex-row">
      {categories.map((cat) => (
        <div
          key={cat.title}
          className="group relative flex min-h-[300px] flex-1 items-center justify-center overflow-hidden"
        >
          <img
            src={cat.image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/50" />
          <div className="relative z-10 text-center text-white">
            <p className="text-sm font-semibold uppercase tracking-wider text-white/80">
              {cat.label}
            </p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">{cat.title}</h2>
            <a
              href={cat.href}
              className="mt-6 inline-block rounded bg-brand px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
            >
              {cat.cta}
            </a>
          </div>
        </div>
      ))}
    </section>
  )
}
