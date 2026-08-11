import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { HeroSlider } from './components/HeroSlider'
import { About } from './components/About'
import { Counter } from './components/Counter'
import { Services } from './components/Services'
import { MenuSection } from './components/MenuSection'
import { Reservation } from './components/Reservation'
import { Chefs } from './components/Chefs'
import { Testimony } from './components/Testimony'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="font-sans">
      <TopBar />
      <Navbar />
      <main>
        <HeroSlider />
        <About />
        <Counter />
        <Services />
        <MenuSection />
        <Reservation />
        <Chefs />
        <Testimony />
      </main>
      <Footer />
    </div>
  )
}
