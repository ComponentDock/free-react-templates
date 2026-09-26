import { useEffect } from 'react'
import { Sidebar } from './components/Sidebar'
import { PortfolioGrid } from './components/PortfolioGrid'
import { About } from './components/About'
import { Pricing } from './components/Pricing'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'ShotLab — Photography Portfolio Template'
  }, [])

  return (
    <div className="min-h-screen bg-dark font-sans text-body">
      <Sidebar />
      <main className="lg:ml-72">
        <PortfolioGrid />
        <About />
        <Pricing />
        <Contact />
      </main>
      <div className="lg:ml-72">
        <Footer />
      </div>
    </div>
  )
}
