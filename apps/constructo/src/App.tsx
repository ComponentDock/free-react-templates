import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { About } from './components/About'
import { WhatWeOffer } from './components/WhatWeOffer'
import { WhyChooseUs } from './components/WhyChooseUs'
import { Gallery } from './components/Gallery'
import { Team } from './components/Team'
import { Stats } from './components/Stats'
import { Testimonials } from './components/Testimonials'
import { Projects } from './components/Projects'
import { Blog } from './components/Blog'
import { Partners } from './components/Partners'
import { CtaBanner } from './components/CtaBanner'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Constructo — Construction Company Landing Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-paper text-body transition-colors dark:bg-gray-950 dark:text-white">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <About />
        <WhatWeOffer />
        <WhyChooseUs />
        <Gallery />
        <Team />
        <Stats />
        <Testimonials />
        <Projects />
        <Blog />
        <Partners />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  )
}
