import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { FeaturesDark } from './components/FeaturesDark'
import { FeaturesLight } from './components/FeaturesLight'
import { FeaturesLast } from './components/FeaturesLast'
import { CTACover } from './components/CTACover'
import { TopCourses } from './components/TopCourses'
import { Testimonial } from './components/Testimonial'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Learnova — Online Education Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-body text-body-gray">
      <Navbar />
      <main>
        <Hero />
        <FeaturesDark />
        <FeaturesLight />
        <FeaturesLast />
        <CTACover />
        <TopCourses />
        <Testimonial />
      </main>
      <Footer />
    </div>
  )
}
