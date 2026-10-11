import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { CtaBand } from './components/CtaBand'
import { Packages } from './components/Packages'
import { PopularPlaces } from './components/PopularPlaces'
import { Team } from './components/Team'
import { NewsletterBand } from './components/NewsletterBand'
import { Testimonials } from './components/Testimonials'
import { BlogRow } from './components/BlogRow'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="font-[family-name:var(--font-body)]">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <CtaBand />
        <Packages />
        <PopularPlaces />
        <Team />
        <NewsletterBand />
        <Testimonials />
        <BlogRow />
      </main>
      <Footer />
    </div>
  )
}
