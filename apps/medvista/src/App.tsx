import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { CtaBanner } from './components/CtaBanner'
import { Departments } from './components/Departments'
import { Doctors } from './components/Doctors'
import { Blog } from './components/Blog'
import { Testimonials } from './components/Testimonials'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Medvista — Medical & Healthcare Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-body">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <CtaBanner />
        <Departments />
        <Doctors />
        <Blog />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
