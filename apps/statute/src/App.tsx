import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { About } from './components/About'
import { Counter } from './components/Counter'
import { About2 } from './components/About2'
import { Testimonials } from './components/Testimonials'
import { Steps } from './components/Steps'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'
import { FooterBottom } from './components/FooterBottom'

export function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-800 transition-colors">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <Counter />
        <About2 />
        <Testimonials />
        <Steps />
        <Blog />
      </main>
      <Footer />
      <FooterBottom />
    </div>
  )
}
