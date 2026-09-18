import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Works } from './components/Works'
import { Clients } from './components/Clients'
import { Stats } from './components/Stats'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-ink">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Works />
        <Clients />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
