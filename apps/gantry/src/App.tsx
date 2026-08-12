import { useEffect } from 'react'
import { Header } from './components/Header'
import { HeroSlider } from './components/HeroSlider'
import { Services } from './components/Services'
import { WhyChooseUs } from './components/WhyChooseUs'
import { QuoteForm } from './components/QuoteForm'
import { Projects } from './components/Projects'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Gantry — Construction Template'
  }, [])

  return (
    <>
      <Header />
      <main>
        <HeroSlider />
        <Services />
        <WhyChooseUs />
        <QuoteForm />
        <Projects />
        <Testimonials />
        <Blog />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
