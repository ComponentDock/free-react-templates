import { About } from './components/About'
import { Articles } from './components/Articles'
import { Contact } from './components/Contact'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { PhotoTrio } from './components/PhotoTrio'
import { Pricing } from './components/Pricing'
import { Services } from './components/Services'
import { Staff } from './components/Staff'
import { Testimonials } from './components/Testimonials'
import { TopBar } from './components/TopBar'
import { WhyBand } from './components/WhyBand'

export function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <TopBar />
      <Navbar />
      <main id="main-content">
        <Hero />
        <PhotoTrio />
        <Services />
        <About />
        <Staff />
        <Pricing />
        <Faq />
        <WhyBand />
        <Testimonials />
        <Articles />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
