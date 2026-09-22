import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { About } from './components/About'
import { Departments } from './components/Departments'
import { Counters } from './components/Counters'
import { Team } from './components/Team'
import { BlogAppointment } from './components/BlogAppointment'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Vitala — Medical & Healthcare Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        <Departments />
        <Counters />
        <Team />
        <BlogAppointment />
      </main>
      <Footer />
    </div>
  )
}
