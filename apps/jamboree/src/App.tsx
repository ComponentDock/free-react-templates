import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Facilities } from './components/Facilities'
import { Speakers } from './components/Speakers'
import { Calendar } from './components/Calendar'
import { Events } from './components/Events'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Jamboree — Conference Event Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-mist transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Facilities />
        <Speakers />
        <Calendar />
        <Events />
      </main>
      <Footer />
    </div>
  )
}
