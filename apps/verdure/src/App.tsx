import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Stats } from './components/Stats'
import { Services } from './components/Services'
import { Projects } from './components/Projects'
import { Assessment } from './components/Assessment'
import { Testimonials } from './components/Testimonials'
import { QuoteForm } from './components/QuoteForm'
import { Blog } from './components/Blog'
import { Pricing } from './components/Pricing'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Services />
        <Projects />
        <Assessment />
        <Testimonials />
        <QuoteForm />
        <Blog />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}
