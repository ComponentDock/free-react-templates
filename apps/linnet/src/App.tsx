import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { WhyChooseUs } from './components/WhyChooseUs'
import { Services } from './components/Services'
import { Skills } from './components/Skills'
import { Portfolio } from './components/Portfolio'
import { Team } from './components/Team'
import { Pricing } from './components/Pricing'
import { Blog } from './components/Blog'
import { Stats } from './components/Stats'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Linnet — Business Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <Services />
        <Skills />
        <Portfolio />
        <Team />
        <Pricing />
        <Blog />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
