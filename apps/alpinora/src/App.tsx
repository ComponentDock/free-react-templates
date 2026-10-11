import { useEffect } from 'react'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Faq } from './components/Faq'
import { Features } from './components/Features'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { LogoStrip } from './components/LogoStrip'
import { Projects } from './components/Projects'
import { VideoCta } from './components/VideoCta'

export function App() {
  useEffect(() => {
    document.title = 'Alpinora — Travel Template'
  }, [])

  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Features />
        <Gallery />
        <Faq />
        <VideoCta />
        <LogoStrip />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
