import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { SearchTabs } from './components/SearchTabs'
import { Services } from './components/Services'
import { JobListings } from './components/JobListings'
import { StatsCounter } from './components/StatsCounter'
import { Testimonials } from './components/Testimonials'
import { BlogGrid } from './components/BlogGrid'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen font-[var(--font-worksans)]">
      <Navbar />
      <Hero />
      <SearchTabs />
      <Services />
      <JobListings />
      <StatsCounter />
      <Testimonials />
      <BlogGrid />
      <Newsletter />
      <Footer />
    </div>
  )
}
