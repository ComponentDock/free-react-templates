import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Departments } from './components/Departments'
import { Doctors } from './components/Doctors'
import { AppointmentForm } from './components/AppointmentForm'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'
import { skipLabel } from './data'

export function App() {
  useEffect(() => {
    document.title = 'Medico — Medical / Health Care Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-heading">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
      >
        {skipLabel}
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Departments />
        <Doctors />
        <AppointmentForm />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
