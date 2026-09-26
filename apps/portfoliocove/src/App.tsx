import { useEffect } from 'react'
import { Sidebar } from './components/Sidebar'
import { Breadcrumb } from './components/Breadcrumb'
import { PortfolioGrid } from './components/PortfolioGrid'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Plinth — Minimalist Portfolio Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Sidebar />
      <main className="ml-20 min-h-screen px-8 py-10">
        <Breadcrumb />
        <section id="portfolio">
          <PortfolioGrid />
        </section>
      </main>
      <Footer />
    </div>
  )
}
