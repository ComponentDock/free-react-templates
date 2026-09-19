const products = [
  { title: 'Cotton Knit Poncho', price: 89, color: '#ede4d3', seed: 'drape-poncho' },
  { title: 'Leather Biker Jacket', price: 249, color: '#1a1a1a', seed: 'drape-biker' },
  {
    title: 'Suede Bomber Jacket',
    price: 189,
    comparePrice: 220,
    color: '#b08050',
    seed: 'drape-bomber',
    sale: true,
  },
  { title: 'Graphic Cotton Tee', price: 39, color: '#f5f5f5', seed: 'drape-tee' },
  { title: 'Tailored Three-Piece Suit', price: 429, color: '#2f4a7a', seed: 'drape-suit' },
  { title: 'Canvas Tote Bag', price: 45, color: '#cbb798', seed: 'drape-tote' },
  { title: 'Everyday Backpack', price: 120, color: '#22304a', seed: 'drape-backpack' },
  { title: 'Bifold Leather Wallet', price: 59, color: '#6b4a2f', seed: 'drape-wallet' },
]

export function NewArrivals() {
  return (
    <section className="py-16 px-5">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-sm text-warm-500 tracking-wide uppercase">Just landed</span>
            <h2 className="text-2xl sm:text-3xl font-bold mt-1">New arrivals</h2>
          </div>
          <a
            href="#shop"
            className="text-sm font-medium border border-warm-900 px-5 py-2 hover:bg-warm-900 hover:text-white transition-colors"
          >
            View all
          </a>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((p) => (
            <div key={p.title} className="group">
              <div className="relative aspect-[3/4] overflow-hidden bg-warm-100 mb-3">
                <img
                  src={`https://picsum.photos/seed/${p.seed}/800/1067`}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {p.sale && (
                  <span className="absolute top-3 left-3 bg-terra-400 text-white text-xs font-semibold px-2 py-1">
                    Sale
                  </span>
                )}
              </div>
              <h3 className="text-sm font-medium">{p.title}</h3>
              <div className="flex items-center gap-2 mt-1 text-sm">
                <span className={p.sale ? 'text-terra-400 font-semibold' : ''}>${p.price}.00</span>
                {p.comparePrice && (
                  <span className="line-through text-warm-400">${p.comparePrice}.00</span>
                )}
              </div>
              <div className="mt-2 flex gap-1.5">
                <span
                  className="h-4 w-4 rounded-full border border-warm-200"
                  style={{ backgroundColor: p.color }}
                  title={p.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
