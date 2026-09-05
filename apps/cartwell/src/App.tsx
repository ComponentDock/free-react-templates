import { useEffect } from 'react'
import { CartDropdown } from './components/CartDropdown'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Cartwell — Cart Dropdown Menu'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-bg-page text-text-body">
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-28">
        <h1 className="mb-8 text-2xl font-semibold text-text-body sm:text-3xl">
          Cart Dropdown Menu
        </h1>
        <CartDropdown />
      </main>
      <Footer />
    </div>
  )
}
