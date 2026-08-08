import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { SocialProof } from './components/SocialProof'
import { Contact } from './components/Contact'
import { Faq } from './components/Faq'
import { CtaBand } from './components/CtaBand'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Cortex — AI Agent Platform Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <SocialProof />
        <Contact />
        <Faq />
        <CtaBand />
      </main>
      <Footer />
    </div>
  )
}
