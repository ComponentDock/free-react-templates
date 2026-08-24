import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Process } from './components/Process'
import { Clients } from './components/Clients'
import { Features } from './components/Features'
import { Team } from './components/Team'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen font-poppins">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Clients />
        <Features />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
