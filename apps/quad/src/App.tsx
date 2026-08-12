import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { PopularCourses } from './components/PopularCourses'
import { Registration } from './components/Registration'
import { Trainers } from './components/Trainers'
import { Events } from './components/Events'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'

/* Section order 1:1 from the reference demo (index.html): header → hero →
   features → popular courses → registration → trainers → events →
   testimonials → footer. */
export function App() {
  useEffect(() => {
    document.title = 'Quad — Education Template'
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <PopularCourses />
        <Registration />
        <Trainers />
        <Events />
        <Testimonials />
      </main>
      {/* Footer renders its own <footer> contentinfo landmark. */}
      <Footer />
    </>
  )
}
