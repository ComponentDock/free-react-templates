import { useState } from 'react'
import { INITIAL_CART_COUNT } from './data/site'
import { PageFooter } from './components/PageFooter'
import { ProductHero } from './components/ProductHero'
import { SiteHeader } from './components/SiteHeader'

/**
 * Overtone — one product screen: a dark wordmark bar, a rounded product
 * photograph with a floating spec strip, and the shop column beside it. The
 * Component Dock line sits outside the 100vh shell, so the hero's measurements
 * still hold.
 */
export function App() {
  const [cartCount, setCartCount] = useState(INITIAL_CART_COUNT)

  return (
    <>
      <div className="ot-root">
        <SiteHeader cartCount={cartCount} />

        <main className="ot-main">
          <ProductHero onAddToCart={() => setCartCount((count) => count + 1)} />
        </main>
      </div>

      <PageFooter />
    </>
  )
}
