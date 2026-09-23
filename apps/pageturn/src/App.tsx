import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Partners } from './components/Partners'
import { About } from './components/About'
import { Stats } from './components/Stats'
import { Chapter } from './components/Chapter'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { MyBooks } from './components/MyBooks'
import { AuthorBio } from './components/AuthorBio'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'PageTurn — Author Landing Page'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Partners />
        <About />
        <Stats />
        <Chapter />
        <Services />
        <Testimonials />
        <MyBooks />
        <AuthorBio />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
