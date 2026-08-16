import { useEffect, useMemo, useState } from 'react'
import { type Product } from './data'
import { Topbar } from './components/Topbar'
import { Header } from './components/Header'
import { HeroSlider } from './components/HeroSlider'
import { ProductGrid } from './components/ProductGrid'
import { Banner } from './components/Banner'
import { Footer } from './components/Footer'
import { CartDrawer, type CartItem } from './components/CartDrawer'
import { QuickViewModal } from './components/QuickViewModal'
import { SearchModal } from './components/SearchModal'

export function App() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [cartOpen, setCartOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [quickView, setQuickView] = useState<Product | null>(null)

  useEffect(() => {
    document.title = 'Mannequin — Fashion Store Template'
  }, [])

  const cartCount = useMemo(() => cart.reduce((sum, item) => sum + item.quantity, 0), [cart])
  const cartTotal = useMemo(
    () => cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
    [cart],
  )

  const addToCart = (product: Product) => {
    setCart((items) => {
      const existing = items.find((item) => item.product.id === product.id)
      if (existing) {
        return items.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }
      return [...items, { product, quantity: 1 }]
    })
  }

  return (
    <div className="min-h-screen bg-white font-sans text-body">
      <Topbar />
      <Header
        cartCount={cartCount}
        onSearchClick={() => setSearchOpen(true)}
        onCartClick={() => setCartOpen(true)}
      />
      <main>
        <HeroSlider />
        <ProductGrid onAddToCart={addToCart} onQuickView={setQuickView} />
        <Banner />
      </main>
      <Footer />

      {cartOpen && <CartDrawer items={cart} total={cartTotal} onClose={() => setCartOpen(false)} />}
      {searchOpen && <SearchModal onClose={() => setSearchOpen(false)} />}
      {quickView && (
        <QuickViewModal
          product={quickView}
          onAddToCart={addToCart}
          onClose={() => setQuickView(null)}
        />
      )}
    </div>
  )
}
