import { useEffect } from 'react'
import { About } from './components/About'
import { BibleStudy } from './components/BibleStudy'
import { Blog } from './components/Blog'
import { ContactInfo } from './components/ContactInfo'
import { Counter } from './components/Counter'
import { Events } from './components/Events'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Newsletter } from './components/Newsletter'
import { Sermons } from './components/Sermons'
import { Services } from './components/Services'
import { Testimonies } from './components/Testimonies'

export function App() {
  useEffect(() => {
    document.title = 'Sanctum — Church Website Template'
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BibleStudy />
        <About />
        <Services />
        <Newsletter />
        <Sermons />
        <Testimonies />
        <Counter />
        <Events />
        <Blog />
        <ContactInfo />
      </main>
      <Footer />
    </>
  )
}
