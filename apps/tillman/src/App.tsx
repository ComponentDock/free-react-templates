import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Stats } from './components/Stats'
import { WhyChooseUs } from './components/WhyChooseUs'
import { Video } from './components/Video'
import { Tips } from './components/Tips'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Tillman — Agriculture & Farm Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Stats />
        <WhyChooseUs />
        <Video />
        <Tips />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
