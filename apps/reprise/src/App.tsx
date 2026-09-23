import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { PortfolioGrid } from './components/PortfolioGrid'
import { LoadMore } from './components/LoadMore'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-warm-gray font-sans text-charcoal">
      <Navbar />
      <main>
        <Hero />
        <PortfolioGrid />
        <LoadMore />
      </main>
      <Footer />
    </div>
  )
}
