import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { FeaturedCourses } from './components/FeaturedCourses'
import { LearnNewSkills } from './components/LearnNewSkills'
import { Topics } from './components/Topics'
import { LearnerOutcomes } from './components/LearnerOutcomes'
import { Team } from './components/Team'
import { CtaBanner } from './components/CtaBanner'
import { Footer } from './components/Footer'

/* Edify — an online learning platform landing page. Section order mirrors
   the source template 1:1: header → hero → services → featured courses →
   learn new skills → explore top subjects → learner outcomes → community
   experts → CTA → footer. */

export function App() {
  useEffect(() => {
    document.title = 'Edify — Online Learning Platform'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-body transition-colors dark:bg-gray-950">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <FeaturedCourses />
        <LearnNewSkills />
        <Topics />
        <LearnerOutcomes />
        <Team />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  )
}
