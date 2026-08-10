import { useEffect } from 'react'
import { HeaderTop } from './components/HeaderTop'
import { Navbar } from './components/Navbar'
import { FeaturedGrid } from './components/FeaturedGrid'
import { EditorPicks } from './components/EditorPicks'
import { TravelNews } from './components/TravelNews'
import { FashionNews } from './components/FashionNews'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Glossy — Megazine Template'
  }, [])

  return (
    <div className="bg-white font-sans text-body">
      <header>
        <HeaderTop />
        <Navbar />
      </header>
      <main>
        <FeaturedGrid />
        <EditorPicks />
        <TravelNews />
        <FashionNews />
      </main>
      <Footer />
    </div>
  )
}
