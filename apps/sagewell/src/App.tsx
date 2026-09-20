import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Programs } from './components/Programs'
import { Events } from './components/Events'
import { AdmissionForm } from './components/AdmissionForm'
import { News } from './components/News'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Sagewell — Education Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-navy-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Programs />
        <Events />
        <AdmissionForm />
        <News />
      </main>
      <Footer />
    </div>
  )
}
