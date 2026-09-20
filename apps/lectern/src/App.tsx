import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Counter } from './components/Counter'
import { Services } from './components/Services'
import { Enrollment } from './components/Enrollment'
import { Courses } from './components/Courses'
import { Gallery } from './components/Gallery'
import { Blog } from './components/Blog'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    document.title = 'Lectern — University Template'
    document.documentElement.classList.toggle('dark', dark)
    return () => {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-navy dark:text-white">
      <Header />
      <Navbar dark={dark} onToggleDark={() => setDark((d) => !d)} />
      <main className="flex-1">
        <Hero />
        <Counter />
        <Services />
        <Enrollment />
        <Courses />
        <Gallery />
        <Blog />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
