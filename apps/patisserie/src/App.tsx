import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { LatestCakes } from './components/LatestCakes'
import { VideoBand } from './components/VideoBand'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Instagram } from './components/Instagram'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-ink font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <LatestCakes />
        <VideoBand />
        <Testimonials />
        <Blog />
        <Instagram />
      </main>
      <Footer />
    </div>
  )
}
