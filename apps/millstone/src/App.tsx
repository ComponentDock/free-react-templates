import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { About } from './components/About'
import { Mission } from './components/Mission'
import { Team } from './components/Team'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen font-body text-body">
      <TopBar />
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Mission />
      <Team />
      <CTA />
      <Footer />
    </div>
  )
}
