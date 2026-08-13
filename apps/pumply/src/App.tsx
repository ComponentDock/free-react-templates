import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Classes } from './components/Classes'
import { Schedule } from './components/Schedule'
import { Trainers } from './components/Trainers'
import { Services } from './components/Services'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-page font-sans text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Classes />
        <Schedule />
        <Trainers />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
