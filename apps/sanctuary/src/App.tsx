import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { About } from './components/About'
import { Events } from './components/Events'
import { Ministries } from './components/Ministries'
import { Sermons } from './components/Sermons'
import { Stories } from './components/Stories'
import { CtaBanner } from './components/CtaBanner'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Sanctuary — Church Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Events />
        <Ministries />
        <Sermons />
        <Stories />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  )
}
