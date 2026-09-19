import { useState } from 'react'
import { Sidebar } from './components/Sidebar'
import { SearchOverlay } from './components/SearchOverlay'
import { ProductGrid } from './components/ProductGrid'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <Sidebar onSearchOpen={() => setSearchOpen(true)} />
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <main className="flex-1 pt-16 md:pt-0">
        <ProductGrid />
        <Newsletter />
        <Footer />
      </main>
    </div>
  )
}
