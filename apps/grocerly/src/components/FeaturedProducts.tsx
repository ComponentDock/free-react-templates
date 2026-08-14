import { useState } from 'react'
import { Heart, RefreshCw, ShoppingCart } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { featuredProducts, productTabs } from '../data'
import { SectionTitle } from './SectionTitle'

/** Featured Product section: green-underlined title, filter tabs
 *  (All / Oranges / Fresh Meat / Vegetables / Fastfood) and an 8-card
 *  product grid with hover action icons (wishlist / compare / cart). */
export function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState<(typeof productTabs)[number]>('All')

  const visible =
    activeTab === 'All'
      ? featuredProducts
      : featuredProducts.filter((product) => product.category === activeTab)

  return (
    <section aria-label="Featured products" className="bg-white pb-10">
      <div className="mx-auto max-w-[1140px] px-4">
        <SectionTitle>Featured Product</SectionTitle>

        <ul className="mb-8 flex flex-wrap justify-center gap-2">
          {productTabs.map((tab) => (
            <li key={tab}>
              <button
                type="button"
                aria-pressed={activeTab === tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  'border border-line bg-white px-6 py-2 text-sm font-bold uppercase text-muted transition-colors',
                  activeTab === tab && 'border-brand bg-brand text-white',
                )}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((product) => (
            <li key={product.name} className="group">
              <div
                className="relative h-[270px] overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: `url(${product.image})` }}
              >
                <ul className="absolute inset-x-0 bottom-5 flex translate-y-[70px] justify-center gap-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  {[
                    { label: `Add ${product.name} to wishlist`, icon: Heart },
                    { label: `Compare ${product.name}`, icon: RefreshCw },
                    { label: `Add ${product.name} to cart`, icon: ShoppingCart },
                  ].map((action) => (
                    <li key={action.label}>
                      <a
                        href="#"
                        aria-label={action.label}
                        onClick={(event) => event.preventDefault()}
                        className="flex h-10 w-10 items-center justify-center bg-white text-ink transition-colors hover:bg-brand hover:text-white"
                      >
                        <action.icon aria-hidden="true" className="h-4 w-4" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-4 text-center">
                <h6 className="text-base font-bold text-ink">
                  <a href="#shop" onClick={(event) => event.preventDefault()}>
                    {product.name}
                  </a>
                </h6>
                <h5 className="mt-1 text-lg text-muted">{product.price}</h5>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
