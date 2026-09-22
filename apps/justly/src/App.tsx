import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { TrainingCategories } from './components/TrainingCategories'
import { Services } from './components/Services'
import { Gallery } from './components/Gallery'
import { Pricing } from './components/Pricing'
import { About } from './components/About'
import { Blog } from './components/Blog'
import { Video } from './components/Video'
import { ContactInfo } from './components/ContactInfo'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-surface text-text font-body">
      <Navbar />
      <main>
        <Hero />
        <TrainingCategories />
        <Services />
        <Gallery />
        <Pricing />
        <About />
        <Blog />
        <Video />
        <ContactInfo />
      </main>
      <Footer />
    </div>
  )
}
