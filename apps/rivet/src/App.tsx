import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { BannerCTA } from './components/BannerCTA'
import { Services } from './components/Services'
import { RecentWorks } from './components/RecentWorks'
import { CompanyNews } from './components/CompanyNews'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <BannerCTA />
        <Services />
        <RecentWorks />
        <CompanyNews />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
