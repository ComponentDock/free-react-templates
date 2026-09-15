import { Eye, ShoppingCart, Heart } from 'lucide-react'

interface Product {
  name: string
  price: number
  originalPrice?: number
  image: string
}

const PRODUCTS: Product[] = [
  {
    name: 'Bell Pepper',
    price: 80,
    originalPrice: 120,
    image: 'https://picsum.photos/seed/greenplate-bellpepper/300/300',
  },
  {
    name: 'Strawberry',
    price: 120,
    image: 'https://picsum.photos/seed/greenplate-strawberry/300/300',
  },
  {
    name: 'Green Beans',
    price: 120,
    image: 'https://picsum.photos/seed/greenplate-greenbeans/300/300',
  },
  {
    name: 'Purple Cabbage',
    price: 120,
    image: 'https://picsum.photos/seed/greenplate-cabbage/300/300',
  },
  {
    name: 'Tomato',
    price: 80,
    originalPrice: 120,
    image: 'https://picsum.photos/seed/greenplate-tomato/300/300',
  },
  { name: 'Broccoli', price: 120, image: 'https://picsum.photos/seed/greenplate-broccoli/300/300' },
  { name: 'Carrots', price: 120, image: 'https://picsum.photos/seed/greenplate-carrots/300/300' },
  { name: 'Fruit Juice', price: 120, image: 'https://picsum.photos/seed/greenplate-juice/300/300' },
]

function ProductCard({ product }: { product: Product }) {
  const hasSale = product.originalPrice !== undefined

  return (
    <div className="group bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {hasSale && (
          <span className="absolute top-2 left-2 bg-brand text-white text-xs font-bold px-2 py-1 rounded">
            30% OFF
          </span>
        )}
        <div className="absolute bottom-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            className="bg-white p-2 rounded-full shadow hover:bg-brand hover:text-white transition-colors"
            aria-label={`View ${product.name}`}
          >
            <Eye className="w-4 h-4" />
          </button>
          <button
            className="bg-white p-2 rounded-full shadow hover:bg-brand hover:text-white transition-colors"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
          <button
            className="bg-white p-2 rounded-full shadow hover:bg-brand hover:text-white transition-colors"
            aria-label={`Wishlist ${product.name}`}
          >
            <Heart className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-ink font-medium text-sm">{product.name}</h3>
        <div className="mt-1 flex items-center gap-2">
          {hasSale ? (
            <>
              <span className="text-brand font-semibold">${product.price}</span>
              <span className="text-mist text-sm line-through">${product.originalPrice}</span>
            </>
          ) : (
            <span className="text-ink font-semibold">${product.price}</span>
          )}
        </div>
      </div>
    </div>
  )
}

export function Products() {
  return (
    <section className="py-16 bg-paper" data-testid="products">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-ink text-center mb-10 font-serif">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
