import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Stats } from './components/Stats'
import { Media } from './components/Media'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Stats />
      <Media />
      <Footer />
    </div>
  )
}
