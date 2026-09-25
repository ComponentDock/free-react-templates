import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Partners } from './components/Partners'
import { About } from './components/About'
import { Counter } from './components/Counter'
import { Chapter } from './components/Chapter'
import { Testimonials } from './components/Testimonials'
import { MyBooks } from './components/MyBooks'
import { AuthorBio } from './components/AuthorBio'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Penman — Author & Book Landing Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Partners />
        <About />
        <Counter />
        <Chapter />
        <Testimonials />
        <MyBooks />
        <AuthorBio />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
