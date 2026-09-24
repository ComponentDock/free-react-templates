import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { InfoBoxes } from './components/InfoBoxes'
import { CtaBanner } from './components/CtaBanner'
import { Services } from './components/Services'
import { Departments } from './components/Departments'
import { FaqNews } from './components/FaqNews'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Vitaheal — Medical Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-ink-700">
      <Header />
      <main>
        <Hero />
        <InfoBoxes />
        <CtaBanner />
        <Services />
        <Departments />
        <FaqNews />
      </main>
      <Footer />
    </div>
  )
}
