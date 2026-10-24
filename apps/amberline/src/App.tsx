import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Wordmarks } from './components/Wordmarks'
import { IntroCta } from './components/IntroCta'
import { Services } from './components/Services'
import { VideoCta } from './components/VideoCta'
import { Counters } from './components/Counters'
import { Team } from './components/Team'
import { Gallery } from './components/Gallery'
import { Pricing } from './components/Pricing'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Appointment } from './components/Appointment'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-page">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-brand focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to main content
      </a>
      <TopBar />
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Wordmarks />
        <IntroCta />
        <Services />
        <VideoCta />
        <Counters />
        <Team />
        <Gallery />
        <Pricing />
        <Testimonials />
        <Blog />
        <Appointment />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
