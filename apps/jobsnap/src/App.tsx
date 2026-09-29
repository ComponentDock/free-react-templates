import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { SearchBar } from './components/SearchBar'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <main>
        <Hero />
        <SearchBar />
      </main>
      <Footer />
    </div>
  )
}
