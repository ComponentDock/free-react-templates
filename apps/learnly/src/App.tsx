import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Benefits } from './components/Benefits'
import { Counters } from './components/Counters'
import { Courses } from './components/Courses'
import { Categories } from './components/Categories'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Pricing } from './components/Pricing'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Counters />
        <Courses />
        <Categories />
        <Testimonials />
        <Blog />
        <Pricing />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
