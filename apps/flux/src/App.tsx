import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { CategoryTiles } from './components/CategoryTiles'
import { Newsletter } from './components/Newsletter'
import { Portfolio } from './components/Portfolio'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <CategoryTiles />
      <Newsletter />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}
