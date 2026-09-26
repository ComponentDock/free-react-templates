import { useEffect } from 'react'
import { Sidebar } from './components/Sidebar'
import { PortfolioGrid } from './components/PortfolioGrid'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Lumiere — Photography Portfolio Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-body">
      <Sidebar />
      <main className="lg:ml-72">
        <PortfolioGrid />
      </main>
      <div className="lg:ml-72">
        <Footer />
      </div>
    </div>
  )
}
