import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Consultation } from './components/Consultation'
import { ChooseUs } from './components/ChooseUs'
import { Services } from './components/Services'
import { Team } from './components/Team'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Vitalis — Medical & Cosmetic Surgery Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Consultation />
        <ChooseUs />
        <Services />
        <Team />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
