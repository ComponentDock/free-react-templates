import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { HeroSlider } from './components/HeroSlider'
import { FeaturedCourse } from './components/FeaturedCourse'
import { CourseCards } from './components/CourseCards'
import { Milestones } from './components/Milestones'
import { WhyChooseUs } from './components/WhyChooseUs'
import { News } from './components/News'
import { JoinCta } from './components/JoinCta'
import { Footer } from './components/Footer'
import { useEffect } from 'react'

export function App() {
  useEffect(() => {
    document.title = 'LearnPeak — Online Education Courses'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-muted">
      <header>
        <TopBar />
        <Navbar />
      </header>
      <main>
        <HeroSlider />
        <FeaturedCourse />
        <CourseCards />
        <Milestones />
        <WhyChooseUs />
        <News />
        <JoinCta />
      </main>
      <Footer />
    </div>
  )
}
