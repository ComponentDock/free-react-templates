import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Categories } from './components/Categories'
import { Counter } from './components/Counter'
import { AboutAuthors } from './components/AboutAuthors'
import { BooksNewRelease } from './components/BooksNewRelease'
import { Testimonials } from './components/Testimonials'
import { Packages } from './components/Packages'
import { Contact } from './components/Contact'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export default function App() {
  useEffect(() => {
    document.title = 'Pressline — Publishing Company Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-surface font-sans text-ink transition-colors dark:bg-gray-950 dark:text-gray-100">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Categories />
        <Counter />
        <AboutAuthors />
        <BooksNewRelease />
        <Testimonials />
        <Packages />
        <Contact />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
