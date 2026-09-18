import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { PopularDishes } from './components/PopularDishes'
import { History } from './components/History'
import { ExpectTheBest } from './components/ExpectTheBest'
import { PopularMenu } from './components/PopularMenu'
import { Team } from './components/Team'
import { Reservation } from './components/Reservation'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Ember — Restaurant Landing Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <PopularDishes />
        <History />
        <ExpectTheBest />
        <PopularMenu />
        <Team />
        <Reservation />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
