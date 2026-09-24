import { TopBar } from './components/TopBar'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { InfoBoxes } from './components/InfoBoxes'
import { About } from './components/About'
import { Departments } from './components/Departments'
import { Services } from './components/Services'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />
      <Hero />
      <InfoBoxes />
      <About />
      <Departments />
      <Services />
      <CTA />
      <Footer />
    </div>
  )
}
