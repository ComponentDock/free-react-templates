import { Tag } from 'lucide-react'

const relatedProducts = [
  { name: 'Black lace Heels', price: '$189.00', image: 'shopcraft-rel-1' },
  { name: 'Leather Backpack', price: '$189.00', image: 'shopcraft-rel-2' },
  { name: 'Running Shoes', price: '$189.00', image: 'shopcraft-rel-3' },
  { name: 'Designer Watch', price: '$189.00', image: 'shopcraft-rel-4' },
  { name: 'Silk Scarf', price: '$189.00', image: 'shopcraft-rel-5' },
  { name: 'Denim Jacket', price: '$189.00', image: 'shopcraft-rel-6' },
  { name: 'Sunglasses', price: '$189.00', image: 'shopcraft-rel-7' },
  { name: 'Canvas Tote', price: '$189.00', image: 'shopcraft-rel-8' },
]

export function RelatedProducts() {
  return (
    <section id="latest" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-black text-heading">Related Searched Products</h2>
          <p className="mt-2 text-body">Who are in extremely love with eco friendly system.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {relatedProducts.map((product) => (
            <div key={product.name} className="flex gap-4">
              <img
                src={`https://picsum.photos/seed/${product.image}/100/100`}
                alt={product.name}
                className="h-20 w-20 flex-shrink-0 object-cover"
                width={100}
                height={100}
              />
              <div>
                <a href="#" className="text-sm font-semibold text-heading hover:text-brand">
                  {product.name}
                </a>
                <div className="mt-1 flex items-center gap-1 text-sm text-body">
                  <Tag className="h-3 w-3" />
                  {product.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
