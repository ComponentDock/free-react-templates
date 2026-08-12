import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { PopularCourses } from './components/PopularCourses'
import { Video } from './components/Video'
import { OtherFeatures } from './components/OtherFeatures'
import { Registration } from './components/Registration'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

/* Section order 1:1 from the reference demo (index.html): header → hero →
   features → popular courses → video → other features → registration →
   testimonials → blog → footer. */
export function App() {
  useEffect(() => {
    document.title = 'Corona — Education Website Template'
  }, [])

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Features />
        <PopularCourses />
        <Video />
        <OtherFeatures />
        <Registration />
        <Testimonials />
        <Blog />
      </main>
      {/* Footer renders its own <footer> contentinfo landmark. */}
      <Footer />
    </>
  )
}
