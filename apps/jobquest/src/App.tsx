import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Statistics } from './components/Statistics'
import { JobListings } from './components/JobListings'
import { CompanyLogos } from './components/CompanyLogos'
import { Testimonials } from './components/Testimonials'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Statistics />
        <JobListings />
        <CompanyLogos />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
