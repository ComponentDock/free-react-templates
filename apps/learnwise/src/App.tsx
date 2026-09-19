import { useEffect } from 'react'
import { TopHeader } from './components/TopHeader'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { CoolFacts } from './components/CoolFacts'
import { PopularCourses } from './components/PopularCourses'
import { BestTutors } from './components/BestTutors'
import { RegisterNow } from './components/RegisterNow'
import { UpcomingEvents } from './components/UpcomingEvents'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Learnwise — Education & Courses'
  }, [])

  return (
    <div className="min-h-screen bg-white font-body text-gray-900">
      <TopHeader />
      <Navbar />
      <main>
        <Hero />
        <CoolFacts />
        <PopularCourses />
        <BestTutors />
        <RegisterNow />
        <UpcomingEvents />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
