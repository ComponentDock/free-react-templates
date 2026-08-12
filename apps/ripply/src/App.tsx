import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { ChooseUs } from './components/ChooseUs'
import { Satisfaction } from './components/Satisfaction'
import { Video } from './components/Video'
import { Install } from './components/Install'
import { Screenshots } from './components/Screenshots'
import { Pricing } from './components/Pricing'
import { Team } from './components/Team'
import { Faq } from './components/Faq'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

/* Section order 1:1 from the reference demo (drimo/index.html): header →
   hero → features → choose us → satisfaction → video → install →
   screenshots → pricing → team → FAQ → blog → footer. */
export function App() {
  useEffect(() => {
    document.title = 'Ripply — App Landing Page Template'
  }, [])

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Features />
        <ChooseUs />
        <Satisfaction />
        <Video />
        <Install />
        <Screenshots />
        <Pricing />
        <Team />
        <Faq />
        <Blog />
      </main>
      {/* Footer renders its own <footer> contentinfo landmark. */}
      <Footer />
    </>
  )
}
