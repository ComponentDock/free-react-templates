import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { PortfolioGrid } from './components/PortfolioGrid'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Lattice — Portfolio Gallery Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-poppins text-gray-900">
      <Navbar />
      <main>
        <PortfolioGrid />
      </main>
      <Footer />
    </div>
  )
}
