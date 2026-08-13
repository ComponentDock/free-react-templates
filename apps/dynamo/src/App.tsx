import { Header } from './components/Header'
import { HeroSlider } from './components/HeroSlider'
import { Services } from './components/Services'
import { Features } from './components/Features'
import { Clients } from './components/Clients'
import { Testimonials } from './components/Testimonials'
import { CtaBand } from './components/CtaBand'
import { VideoSection } from './components/VideoSection'
import { Footer } from './components/Footer'

export function App() {
  return (
    <main>
      <Header />
      <HeroSlider />
      <Services />
      <Features />
      <Clients />
      <Testimonials />
      <CtaBand />
      <VideoSection />
      <Footer />
    </main>
  )
}
