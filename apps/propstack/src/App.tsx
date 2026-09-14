import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { Properties } from './components/Properties'
import { Agents } from './components/Agents'
import { About } from './components/About'
import { News } from './components/News'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen font-body">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Properties />
        <Agents />
        <About />
        <News />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
