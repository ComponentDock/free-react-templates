import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Ministries } from './components/Ministries'
import { Counter } from './components/Counter'
import { Sermons } from './components/Sermons'
import { Instagram } from './components/Instagram'
import { Testimonials } from './components/Testimonials'
import { Events } from './components/Events'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-body antialiased">
      <div data-section="navbar" className="relative">
        <Navbar />
      </div>
      <main>
        <div data-section="hero">
          <Hero />
        </div>
        <div data-section="ministries">
          <Ministries />
        </div>
        <div data-section="counter">
          <Counter />
        </div>
        <div data-section="sermons">
          <Sermons />
        </div>
        <div data-section="instagram">
          <Instagram />
        </div>
        <div data-section="testimonials">
          <Testimonials />
        </div>
        <div data-section="events">
          <Events />
        </div>
        <div data-section="blog">
          <Blog />
        </div>
      </main>
      <div data-section="footer">
        <Footer />
      </div>
    </div>
  )
}
