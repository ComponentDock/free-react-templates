import { useEffect } from 'react'
import { About } from './components/About'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'
import { Counters } from './components/Counters'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { HireMe } from './components/HireMe'
import { Navbar } from './components/Navbar'
import { Partners } from './components/Partners'
import { Projects } from './components/Projects'
import { Resume } from './components/Resume'
import { Services } from './components/Services'
import { skipLabel } from './data'

export function App() {
  useEffect(() => {
    document.title = 'Showcase — Personal Portfolio Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-heading">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
      >
        {skipLabel}
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Partners />
        <Resume />
        <Services />
        <Projects />
        <Counters />
        <Blog />
        <HireMe />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
