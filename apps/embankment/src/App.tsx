import { TopMenu } from './components/TopMenu'
import { Navbar } from './components/Navbar'
import { HeroBanner } from './components/HeroBanner'
import { Services } from './components/Services'
import { Projects } from './components/Projects'
import { Team } from './components/Team'
import { Counter } from './components/Counter'
import { Features } from './components/Features'
import { Testimonials } from './components/Testimonials'
import { ClientLogos } from './components/ClientLogos'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen">
      <TopMenu />
      <Navbar />
      <HeroBanner />
      <Services />
      <Projects />
      <Team />
      <Counter />
      <Features />
      <Testimonials />
      <ClientLogos />
      <Footer />
    </div>
  )
}
