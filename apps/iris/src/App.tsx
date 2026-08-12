import { useEffect } from 'react'
import { Feedback } from './components/Feedback'
import { FeatureRows } from './components/FeatureRows'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { InstagramStrip } from './components/InstagramStrip'
import { Services } from './components/Services'

export function App() {
  useEffect(() => {
    document.title = 'Iris — Photography Template'
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <FeatureRows />
        <Services />
        <Feedback />
        <InstagramStrip />
      </main>
      <Footer />
    </div>
  )
}
