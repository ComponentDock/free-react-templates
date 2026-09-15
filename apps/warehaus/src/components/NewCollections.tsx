const COLLECTIONS = [
  {
    title: "New Women's Clothing Summer Collection 2019",
    image: 'https://picsum.photos/seed/warehaus-women/800/600',
    link: '#shop',
  },
  {
    title: "New Men's Clothing Summer Collection 2019",
    image: 'https://picsum.photos/seed/warehaus-men/800/600',
    link: '#shop',
  },
]

export function NewCollections() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {COLLECTIONS.map((collection) => (
            <a
              key={collection.title}
              href={collection.link}
              className="group relative block overflow-hidden bg-gray-100"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/40" />
              <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                <h2 className="max-w-xs text-2xl font-bold leading-snug text-white">
                  {collection.title}
                </h2>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
