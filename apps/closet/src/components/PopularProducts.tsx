import { useState } from 'react'
import { Star } from 'lucide-react'

const categories = ['Women', 'Men', 'Kids', 'Home Deco'] as const
type Category = (typeof categories)[number]

const products: Record<
  Category,
  Array<{ id: number; name: string; price: string; rating: number; image: string }>
> = {
  Women: [
    {
      id: 1,
      name: 'Floral Summer Dress',
      price: '29.99',
      rating: 5,
      image: 'https://picsum.photos/seed/closet-w1/300/300',
    },
    {
      id: 2,
      name: 'Casual Blouse',
      price: '19.99',
      rating: 4,
      image: 'https://picsum.photos/seed/closet-w2/300/300',
    },
    {
      id: 3,
      name: 'High Waist Jeans',
      price: '34.99',
      rating: 4,
      image: 'https://picsum.photos/seed/closet-w3/300/300',
    },
    {
      id: 4,
      name: 'Knit Cardigan',
      price: '24.99',
      rating: 5,
      image: 'https://picsum.photos/seed/closet-w4/300/300',
    },
  ],
  Men: [
    {
      id: 5,
      name: 'Oxford Shirt',
      price: '22.99',
      rating: 4,
      image: 'https://picsum.photos/seed/closet-m1/300/300',
    },
    {
      id: 6,
      name: 'Chino Pants',
      price: '27.99',
      rating: 5,
      image: 'https://picsum.photos/seed/closet-m2/300/300',
    },
    {
      id: 7,
      name: 'Polo Tee',
      price: '15.99',
      rating: 4,
      image: 'https://picsum.photos/seed/closet-m3/300/300',
    },
    {
      id: 8,
      name: 'Denim Jacket',
      price: '39.99',
      rating: 5,
      image: 'https://picsum.photos/seed/closet-m4/300/300',
    },
  ],
  Kids: [
    {
      id: 9,
      name: 'Play Dress',
      price: '12.99',
      rating: 5,
      image: 'https://picsum.photos/seed/closet-k1/300/300',
    },
    {
      id: 10,
      name: 'Rainbow T-Shirt',
      price: '9.99',
      rating: 4,
      image: 'https://picsum.photos/seed/closet-k2/300/300',
    },
    {
      id: 11,
      name: 'Soft Shorts',
      price: '11.99',
      rating: 4,
      image: 'https://picsum.photos/seed/closet-k3/300/300',
    },
    {
      id: 12,
      name: 'Cozy Hoodie',
      price: '14.99',
      rating: 5,
      image: 'https://picsum.photos/seed/closet-k4/300/300',
    },
  ],
  'Home Deco': [
    {
      id: 13,
      name: 'Linen Cushion',
      price: '18.99',
      rating: 5,
      image: 'https://picsum.photos/seed/closet-h1/300/300',
    },
    {
      id: 14,
      name: 'Woven Throw',
      price: '29.99',
      rating: 4,
      image: 'https://picsum.photos/seed/closet-h2/300/300',
    },
    {
      id: 15,
      name: 'Ceramic Vase',
      price: '16.99',
      rating: 5,
      image: 'https://picsum.photos/seed/closet-h3/300/300',
    },
    {
      id: 16,
      name: 'Table Runner',
      price: '12.99',
      rating: 4,
      image: 'https://picsum.photos/seed/closet-h4/300/300',
    },
  ],
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={12}
          className={i < count ? 'fill-brand text-brand' : 'text-mist'}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

export function PopularProducts() {
  const [activeTab, setActiveTab] = useState<Category>('Women')

  return (
    <section className="bg-paper py-16" aria-label="Popular products">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-display text-3xl font-bold italic text-ink md:text-4xl">
          Popular on Closet
        </h2>

        {/* Category tabs */}
        <div className="mt-6 flex items-center justify-center gap-4">
          {categories.map((cat, idx) => (
            <div key={cat} className="flex items-center gap-4">
              <button
                type="button"
                className={`text-sm font-medium transition-colors ${
                  activeTab === cat ? 'text-brand' : 'text-body hover:text-ink'
                }`}
                onClick={() => setActiveTab(cat)}
              >
                {cat}
              </button>
              {idx < categories.length - 1 && (
                <span className="text-mist" aria-hidden="true">
                  /
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Product grid */}
        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
          {products[activeTab].map((product) => (
            <div key={product.id} className="group">
              <div className="overflow-hidden rounded bg-slate">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-48 w-full object-cover transition-transform group-hover:scale-105 md:h-64"
                />
              </div>
              <div className="mt-3">
                <p className="text-sm font-medium text-ink">{product.name}</p>
                <div className="mt-1 flex items-center gap-2">
                  <Stars count={product.rating} />
                  <span className="text-sm font-bold text-brand">${product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
