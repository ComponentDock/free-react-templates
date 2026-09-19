import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Courses } from './components/Courses'
import { About } from './components/About'
import { Testimonials } from './components/Testimonials'
import { Philosophy } from './components/Philosophy'
import { News } from './components/News'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Courses />
        <About />
        <Testimonials />
        <Philosophy />
        <News />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
