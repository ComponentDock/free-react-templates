import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Mission } from './components/Mission'
import { Programs } from './components/Programs'
import { Impact } from './components/Impact'
import { Stories } from './components/Stories'
import { GetInvolved } from './components/GetInvolved'
import { Faq } from './components/Faq'
import { Donate } from './components/Donate'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Uplift — Nonprofit Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <Programs />
        <Impact />
        <Stories />
        <GetInvolved />
        <Faq />
        <Donate />
      </main>
      <Footer />
    </div>
  )
}
