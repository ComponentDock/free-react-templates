import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { TopCategories } from './components/TopCategories'
import { CategoryList } from './components/CategoryList'
import { Services } from './components/Services'
import { FeaturedJobs } from './components/FeaturedJobs'
import { Testimonials } from './components/Testimonials'
import { Candidates } from './components/Candidates'
import { Blog } from './components/Blog'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

/* Vocare — single-page job board: transparent navbar → gradient hero
   (stats + tabbed search) → overlapping category strip → top categories
   → services band → featured jobs → testimonials → latest candidates →
   blog → newsletter → white footer. Blue #206dfb brand, #207dff →
   #a16ae8 gradient, #fdab44 orange accents, Source Sans Pro type. */
export function App() {
  useEffect(() => {
    document.title = 'Vocare — Job Board'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-body">
      <Navbar />
      <main>
        <Hero />
        <TopCategories />
        <CategoryList />
        <Services />
        <FeaturedJobs />
        <Testimonials />
        <Candidates />
        <Blog />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
