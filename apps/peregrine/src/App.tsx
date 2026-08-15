import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { SearchPanel } from './components/SearchPanel'
import { Destinations } from './components/Destinations'
import { Services } from './components/Services'
import { About } from './components/About'
import { Hotels } from './components/Hotels'
import { TravelTips } from './components/TravelTips'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Subscribe } from './components/Subscribe'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Peregrine — Travel Template'
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <SearchPanel />
        <Destinations />
        <Services />
        <About />
        <Hotels />
        <TravelTips />
        <Testimonials />
        <Blog />
        <Subscribe />
      </main>
      <Footer />
    </>
  )
}
