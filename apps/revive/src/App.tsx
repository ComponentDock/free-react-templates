import { Header } from './components/Header'
import { PortfolioGrid } from './components/PortfolioGrid'
import { LoadMore } from './components/LoadMore'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-bg font-sans text-text">
      <Header />
      <PortfolioGrid />
      <LoadMore />
      <Footer />
    </div>
  )
}
