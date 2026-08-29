import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { CalendarDashboard } from './components/CalendarDashboard'
import { Features } from './components/Features'
import { Footer } from './components/Footer'

export default function App() {
  const [isDark, setIsDark] = useState(false)

  const toggleDark = () => {
    setIsDark((prev) => {
      const next = !prev
      document.documentElement.classList.toggle('dark', next)
      return next
    })
  }

  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Navbar isDark={isDark} onToggleDark={toggleDark} />
      <Hero />
      <CalendarDashboard />
      <Features />
      <Footer />
    </div>
  )
}
