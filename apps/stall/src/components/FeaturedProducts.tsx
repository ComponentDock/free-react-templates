import { ShoppingCart, Eye } from 'lucide-react'

const featured = [
  {
    id: 1,
    title: 'Designer Handbag',
    desc: 'Luxurious leather handbag with gold accents. Perfect for any occasion.',
    image: 'stall-featured-1',
    originalPrice: 299,
    salePrice: 199,
    number: '01',
  },
  {
    id: 2,
    title: 'Premium Sneakers',
    desc: 'Limited edition sneakers with superior comfort and style.',
    image: 'stall-featured-2',
    originalPrice: 249,
    salePrice: 179,
    number: '02',
  },
]

export function FeaturedProducts() {
  return (
    <section id="special" className="bg-light-bg py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-black uppercase tracking-wide text-heading">
          Featured Products
        </h2>
        <div className="mx-auto mt-2 h-1 w-16 bg-brand" />
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {featured.map((p) => (
            <div key={p.id} className="flex flex-col gap-6 bg-white p-6 shadow-sm md:flex-row">
              <div className="relative flex-shrink-0">
                <img
                  src={`https://picsum.photos/seed/${p.image}/300/300`}
                  alt={p.title}
                  className="h-64 w-64 object-cover"
                  width={300}
                  height={300}
                />
                <span className="absolute left-2 top-2 bg-brand px-3 py-1 text-xs font-bold text-white">
                  {p.number}
                </span>
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-bold text-heading">{p.title}</h3>
                <p className="mt-2 text-sm text-body">{p.desc}</p>
                <div className="mt-4 flex items-center gap-3">
                  <span className="text-sm text-gray-400 line-through">${p.originalPrice}</span>
                  <span className="text-lg font-bold text-brand">${p.salePrice}</span>
                </div>
                <div className="mt-4 flex gap-2">
                  <button className="flex items-center gap-1 rounded-none bg-gray-900 px-4 py-2 text-xs font-bold uppercase text-white transition-colors hover:bg-brand">
                    <Eye className="h-3 w-3" />
                    View Details
                  </button>
                  <button className="flex items-center gap-1 rounded-none border border-gray-300 px-4 py-2 text-xs font-bold uppercase text-gray-700 transition-colors hover:border-brand hover:text-brand">
                    <ShoppingCart className="h-3 w-3" />
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
