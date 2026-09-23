import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { WorkingProcess } from './components/WorkingProcess'
import { Features } from './components/Features'
import { RemarkableWorks } from './components/RemarkableWorks'
import { Story } from './components/Story'
import { Newsletter } from './components/Newsletter'
import { ContactForm } from './components/ContactForm'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Kinetic — Creative Agency Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-smoke transition-colors dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <WorkingProcess />
        <Features />
        <RemarkableWorks />
        <Story />
        <Newsletter />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
