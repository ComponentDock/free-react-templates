import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Events } from './components/Events'
import { About } from './components/About'
import { Testimonials } from './components/Testimonials'
import { Faq } from './components/Faq'
import { VideoCta } from './components/VideoCta'
import { InstagramStrip } from './components/InstagramStrip'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="font-body">
      <Navbar />
      <main>
        <Hero />
        <Events />
        <About />
        <Testimonials />
        <Faq />
        <VideoCta />
        <InstagramStrip />
      </main>
      <Footer />
    </div>
  )
}
