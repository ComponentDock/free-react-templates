import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { FeaturesCta } from './components/FeaturesCta'
import { Services } from './components/Services'
import { About } from './components/About'
import { Work } from './components/Work'
import { Stats } from './components/Stats'
import { Review } from './components/Review'
import { CtaBand } from './components/CtaBand'
import { Team } from './components/Team'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Maven — Creative Agency Template'
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturesCta />
        <Services />
        <About />
        <Work />
        <Stats />
        <Review />
        <CtaBand />
        <Team />
        <Blog />
      </main>
      <Footer />
    </>
  )
}
