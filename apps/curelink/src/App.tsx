import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Departments } from './components/Departments'
import { ServicesBg } from './components/ServicesBg'
import { Doctors } from './components/Doctors'
import { Counter } from './components/Counter'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Curelink — Health & Medical Landing Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Departments />
        <ServicesBg />
        <Doctors />
        <Counter />
        <Testimonials />
        <Blog />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
