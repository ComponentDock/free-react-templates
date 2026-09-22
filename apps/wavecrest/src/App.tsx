import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { SearchBox } from './components/SearchBox'
import { Intro } from './components/Intro'
import { RoomFeatures } from './components/RoomFeatures'
import { Gallery } from './components/Gallery'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SearchBox />
        <Intro />
        <RoomFeatures />
        <Gallery />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
