import { useState, useCallback } from 'react'
import { Header } from './components/Header'
import { BlogGrid } from './components/BlogGrid'
import { CartSidebar, type CartItem } from './components/CartSidebar'
import { Footer } from './components/Footer'

const INITIAL_ITEMS: CartItem[] = [
  { id: '1', name: 'Shoe Adidas', price: 50, image: 'https://picsum.photos/seed/shoe1/80/80' },
  {
    id: '2',
    name: 'Frankly Overall Bag',
    price: 50,
    image: 'https://picsum.photos/seed/bag1/80/80',
  },
  {
    id: '3',
    name: 'Watch Classic Button-down',
    price: 50,
    image: 'https://picsum.photos/seed/watch1/80/80',
  },
]

export function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [items, setItems] = useState<CartItem[]>(INITIAL_ITEMS)

  const toggleSidebar = useCallback(() => setSidebarOpen((prev) => !prev), [])
  const closeSidebar = useCallback(() => setSidebarOpen(false), [])

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }, [])

  const total = items.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="min-h-screen bg-page-bg">
      <Header itemCount={items.length} total={total} onToggleSidebar={toggleSidebar} />
      <main>
        <BlogGrid />
      </main>
      <Footer />
      <CartSidebar
        isOpen={sidebarOpen}
        items={items}
        onClose={closeSidebar}
        onRemove={removeItem}
      />
    </div>
  )
}
