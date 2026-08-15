import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Story } from './components/Story'
import { Journey } from './components/Journey'
import { Team } from './components/Team'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { CtaBand } from './components/CtaBand'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Trek — Nature Travel Template'
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Story />
        <Journey />
        <Team />
        <Testimonials />
        <Blog />
        <CtaBand />
      </main>
      <Footer />
    </>
  )
}
