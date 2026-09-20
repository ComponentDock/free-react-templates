import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { ImageSplit } from './components/ImageSplit'
import { Speakers } from './components/Speakers'
import { Features } from './components/Features'
import { Sponsors } from './components/Sponsors'
import { Events } from './components/Events'
import { QuickContact } from './components/QuickContact'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <Hero />
      <About />
      <ImageSplit seed1="huddle-split-1" seed2="huddle-split-2" />
      <Speakers />
      <Features />
      <Sponsors />
      <Events />
      <QuickContact />
      <Footer />
    </div>
  )
}
