import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Categories } from './components/Categories'
import { CvUploadCta } from './components/CvUploadCta'
import { FeaturedJobs } from './components/FeaturedJobs'
import { HowItWorks } from './components/HowItWorks'
import { Testimonial } from './components/Testimonial'
import { CompanyStats } from './components/CompanyStats'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <CvUploadCta />
        <FeaturedJobs />
        <HowItWorks />
        <Testimonial />
        <CompanyStats />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
