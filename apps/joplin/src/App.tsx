import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Education } from './components/Education'
import { Expertise } from './components/Expertise'
import { Gallery } from './components/Gallery'
import { CtaBanner } from './components/CtaBanner'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Joplin — Personal Portfolio Template'
  }, [])

  return (
    <div className="font-poppins min-h-screen text-black">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Expertise />
        <Gallery />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
