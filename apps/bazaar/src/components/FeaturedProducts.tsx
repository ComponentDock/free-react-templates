const featured = [
  {
    title: 'Fashion for men',
    image: 'https://picsum.photos/seed/bazaar-feat1/800/600',
    span: 'col-span-1 row-span-2',
  },
  {
    title: 'New Arrival Dress',
    image: 'https://picsum.photos/seed/bazaar-feat2/400/300',
    span: 'col-span-1',
  },
  {
    title: 'Sale 20% off',
    image: 'https://picsum.photos/seed/bazaar-feat3/400/300',
    span: 'col-span-1',
  },
  {
    title: 'Shoes for men',
    image: 'https://picsum.photos/seed/bazaar-feat4/800/300',
    span: 'col-span-2',
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-16" aria-label="Featured products">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {featured.map((item) => (
            <a
              key={item.title}
              href="#shop"
              className={`group relative flex items-end overflow-hidden rounded bg-cover bg-center transition-transform hover:scale-[1.02] ${item.span === 'col-span-1 row-span-2' ? 'min-h-[400px] md:min-h-[600px]' : 'min-h-[200px] md:min-h-[290px]'} ${item.span === 'col-span-2' ? 'md:col-span-2' : ''}`}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <h2 className="relative z-10 p-6 text-2xl font-bold text-white md:text-3xl">
                {item.title.split(' ').map((word, i) => (
                  <span key={i} className="block">
                    {word}
                  </span>
                ))}
              </h2>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
