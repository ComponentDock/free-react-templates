import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Partners } from './components/Partners'
import { AboutBook } from './components/AboutBook'
import { Stats } from './components/Stats'
import { Chapters } from './components/Chapters'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { AuthorBio } from './components/AuthorBio'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Quill — Author & Book Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Partners />
        <AboutBook />
        <Stats />
        <Chapters />
        <Services />
        <Testimonials />
        <AuthorBio />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
