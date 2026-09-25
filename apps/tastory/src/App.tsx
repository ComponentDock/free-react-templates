import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Offers } from './components/Offers'
import { Menu } from './components/Menu'
import { News } from './components/News'
import { Gallery } from './components/Gallery'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-body-text">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Offers />
        <Menu />
        <News />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
