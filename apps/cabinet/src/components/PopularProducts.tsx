import { useState } from 'react'
import { ProductCard } from './ProductCard'

const tabs = ['Sofas', 'Tables', 'Chairs', 'Beds', 'Lighting', 'Decor'] as const

type TabName = (typeof tabs)[number]

interface Product {
  name: string
  price: number
  imageSeed: string
  swatchColor: string
  onSale?: boolean
  originalPrice?: number
}

const products: Record<TabName, Product[]> = {
  Sofas: [
    {
      name: 'Halland Velvet 3-Seat Sofa',
      price: 1290,
      imageSeed: 'cabinet-velvet-sofa',
      swatchColor: '#2f5d50',
    },
    {
      name: 'Bramley Tufted Sofa',
      price: 980,
      imageSeed: 'cabinet-tufted-sofa',
      swatchColor: '#c9c3b8',
    },
    {
      name: 'Ardal Leather Sofa',
      price: 1690,
      imageSeed: 'cabinet-leather-sofa',
      swatchColor: '#b07a4e',
    },
  ],
  Tables: [
    {
      name: 'Thornby Oak Dining Table',
      price: 890,
      imageSeed: 'cabinet-oak-table',
      swatchColor: '#c8a06a',
    },
    {
      name: 'Halden Dining Set',
      price: 1450,
      imageSeed: 'cabinet-dining-set',
      swatchColor: '#6b4a2f',
    },
    {
      name: 'Wrenford Round Table',
      price: 610,
      imageSeed: 'cabinet-round-table',
      swatchColor: '#efe6d8',
      onSale: true,
      originalPrice: 720,
    },
  ],
  Chairs: [
    {
      name: 'Kettle Swivel Chair',
      price: 420,
      imageSeed: 'cabinet-swivel-chair',
      swatchColor: '#e6ddd0',
    },
    {
      name: 'Marlow Accent Chair',
      price: 365,
      imageSeed: 'cabinet-accent-chair',
      swatchColor: '#efe6d8',
      onSale: true,
      originalPrice: 420,
    },
    {
      name: 'Dunmore Lounge Chair',
      price: 540,
      imageSeed: 'cabinet-lounge-chair',
      swatchColor: '#5a6472',
    },
  ],
  Beds: [
    {
      name: 'Brenton Upholstered Bed',
      price: 1150,
      imageSeed: 'cabinet-upholstered-bed',
      swatchColor: '#c9c3b8',
    },
    { name: 'Selby King Bed', price: 1320, imageSeed: 'cabinet-king-bed', swatchColor: '#e6ddd0' },
    {
      name: 'Ashcombe Oak Bed Frame',
      price: 860,
      imageSeed: 'cabinet-oak-bed',
      swatchColor: '#c8a06a',
    },
  ],
  Lighting: [
    {
      name: 'Norbury Tripod Floor Lamp',
      price: 215,
      imageSeed: 'cabinet-tripod-lamp',
      swatchColor: '#c8a06a',
    },
    {
      name: 'Orrell Globe Table Lamp',
      price: 145,
      imageSeed: 'cabinet-globe-lamp',
      swatchColor: '#c9a227',
      onSale: true,
      originalPrice: 175,
    },
    {
      name: 'Pendle Ceramic Lamp',
      price: 128,
      imageSeed: 'cabinet-ceramic-lamp',
      swatchColor: '#efe6d8',
    },
  ],
  Decor: [
    {
      name: 'Mirfield Glass Vase',
      price: 64,
      imageSeed: 'cabinet-glass-vase',
      swatchColor: '#3a3a3c',
    },
    {
      name: 'Ledbury Stone Vase',
      price: 78,
      imageSeed: 'cabinet-stone-vase',
      swatchColor: '#5a6472',
      onSale: true,
      originalPrice: 92,
    },
    {
      name: 'Ashby Clear Glass Vase',
      price: 52,
      imageSeed: 'cabinet-clear-vase',
      swatchColor: '#c9c3b8',
    },
  ],
}

export function PopularProducts() {
  const [activeTab, setActiveTab] = useState<TabName>('Sofas')

  return (
    <section id="shop" className="py-16">
      <div className="mx-auto max-w-[1300px] px-5 lg:px-10">
        <div className="mb-8">
          <h2 className="mb-2 text-3xl font-bold uppercase text-navy">Popular products</h2>
          <p className="text-sm text-ink/70">
            The pieces our customers come back for, across every room in the house.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Popular products"
          className="mb-8 flex gap-4 border-b border-border"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={activeTab === tab}
              aria-controls={`panel-${tab}`}
              id={`tab-${tab}`}
              className={`border-b-2 px-4 py-2 text-sm font-medium uppercase tracking-wide transition-colors ${
                activeTab === tab
                  ? 'border-brand text-brand'
                  : 'border-transparent text-ink/60 hover:text-ink'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div role="tabpanel" id={`panel-${activeTab}`} aria-labelledby={`tab-${activeTab}`}>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {products[activeTab].map((product) => (
              <ProductCard
                key={product.name}
                name={product.name}
                price={product.price}
                imageSeed={product.imageSeed}
                swatchColor={product.swatchColor}
                onSale={product.onSale}
                originalPrice={product.originalPrice}
              />
            ))}
          </div>
          <div className="mt-6">
            <a
              href="#"
              className="inline-block border border-navy px-6 py-2 text-sm font-medium uppercase tracking-wide text-navy hover:bg-navy hover:text-white"
            >
              View all
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
