import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Stats } from './components/Stats'
import { Menu } from './components/Menu'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="flex min-h-screen flex-col bg-charcoal text-white transition-colors dark:bg-ink-dark">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Stats />
        <Menu />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
