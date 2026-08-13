import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { ProcedureCategory } from './components/ProcedureCategory'
import { AboutMyself } from './components/AboutMyself'
import { Feedback } from './components/Feedback'
import { Services } from './components/Services'
import { Appointment } from './components/Appointment'
import { RecentBlogs } from './components/RecentBlogs'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Sana — Medical Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-ink-900">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <ProcedureCategory />
        <AboutMyself />
        <Feedback />
        <Services />
        <Appointment />
        <RecentBlogs />
      </main>
      <Footer />
    </div>
  )
}
