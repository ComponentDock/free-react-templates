import { Tag } from 'lucide-react'

const products = Array.from({ length: 12 }, (_, i) => ({
  name: 'Black Lace Heels',
  price: '$189.00',
  image: `https://picsum.photos/seed/bh-rel${i + 1}/120/120`,
}))

export function RelatedProducts() {
  return (
    <section id="latest" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-ink">Related Searched Products</h2>
          <p className="mt-3 text-mist">Who are in extremely love with eco friendly system.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((p, i) => (
            <div key={i} className="flex items-center gap-4">
              <img
                src={p.image}
                alt={p.name}
                className="h-20 w-20 shrink-0 object-cover"
                loading="lazy"
              />
              <div>
                <a href="#" className="text-sm font-medium text-ink hover:text-brand">
                  {p.name}
                </a>
                <p className="mt-1 flex items-center gap-1 text-sm text-mist">
                  <Tag className="h-3 w-3" aria-hidden="true" />
                  {p.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
