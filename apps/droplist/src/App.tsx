import { useEffect } from 'react'
import { Dropdown } from './components/Dropdown'
import { Footer } from './components/Footer'
import type { Category } from './components/Dropdown'

const categories: Category[] = [
  {
    name: 'Electronics',
    items: ['Phones', 'Laptops', 'Tablets', 'Accessories'],
  },
  {
    name: 'Clothing',
    items: ['Men', 'Women', 'Kids', 'Shoes'],
  },
  {
    name: 'Home & Garden',
    items: ['Furniture', 'Lighting', 'Kitchen', 'Outdoor'],
  },
  {
    name: 'Sports',
    items: ['Running', 'Swimming', 'Cycling', 'Team Sports'],
  },
]

export function App() {
  useEffect(() => {
    document.title = 'Droplist — Dropdown Navigation Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-surface text-text transition-colors dark:bg-gray-950 dark:text-white">
      <main className="flex flex-1 flex-col items-center px-4 py-16">
        <h1 className="mb-8 text-3xl font-bold tracking-tight text-text dark:text-white">
          Dropdown
        </h1>
        <p className="mb-8 max-w-md text-center text-text-muted">
          A multi-section category dropdown with sub-category navigation.
        </p>
        <Dropdown categories={categories} />
      </main>
      <Footer />
    </div>
  )
}
