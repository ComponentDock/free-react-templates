import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { LogosStrip } from './components/LogosStrip'
import { SplitSection } from './components/SplitSection'
import { ProductiveSection } from './components/ProductiveSection'
import { StatsBand } from './components/StatsBand'
import { Features } from './components/Features'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="font-sans text-gray-900">
      <Navbar />
      <Hero />
      <LogosStrip />
      <SplitSection />
      <ProductiveSection />
      <StatsBand />
      <Features />
      <Footer />
    </div>
  )
}
