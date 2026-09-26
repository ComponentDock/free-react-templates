import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Portfolio } from './components/Portfolio'
import { Services } from './components/Services'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
