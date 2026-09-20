import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { WelcomeSection } from './components/WelcomeSection'
import { CourseCategories } from './components/CourseCategories'
import { PopularCourses } from './components/PopularCourses'
import { RegistrationBanner } from './components/RegistrationBanner'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Uniwell — E-Learning Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-charcoal transition-colors dark:bg-gray-950 dark:text-white">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <WelcomeSection />
        <CourseCategories />
        <PopularCourses />
        <RegistrationBanner />
      </main>
      <Footer />
    </div>
  )
}
