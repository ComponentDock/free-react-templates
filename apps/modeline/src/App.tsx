import { AboutSplit } from './components/AboutSplit'
import { AboutStatement } from './components/AboutStatement'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Newsletter } from './components/Newsletter'
import { Portfolio } from './components/Portfolio'
import { Preloader } from './components/Preloader'
import { Quote } from './components/Quote'
import { Shop } from './components/Shop'

export function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <Preloader />
      <Navbar />
      <main id="main-content">
        <Hero />
        <Quote />
        <Portfolio />
        <AboutStatement />
        <AboutSplit />
        <Shop />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
