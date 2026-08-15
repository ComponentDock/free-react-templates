import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { FeaturedClasses } from './components/FeaturedClasses'
import { Schedule } from './components/Schedule'
import { Testimonials } from './components/Testimonials'
import { Cta } from './components/Cta'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedClasses />
        <Schedule />
        <Testimonials />
        <Cta />
        <Blog />
      </main>
      <Footer />
    </>
  )
}
