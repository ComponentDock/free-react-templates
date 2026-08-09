import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { SocialRail } from './components/SocialRail'
import { Hero } from './components/Hero'
import { Intro } from './components/Intro'
import { Models } from './components/Models'
import { WeekModel } from './components/WeekModel'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Allure — Model Agency'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white transition-colors dark:bg-gray-950">
      <Navbar />
      <main className="flex-1">
        <SocialRail />
        <Hero />
        <Intro />
        <Models />
        <WeekModel />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
