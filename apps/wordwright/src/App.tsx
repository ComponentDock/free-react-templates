import { BackToTop } from './components/BackToTop'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { QuoteBand } from './components/QuoteBand'
import { Services } from './components/Services'
import { Stories } from './components/Stories'
import { Testimonials } from './components/Testimonials'

export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <QuoteBand />
        <Testimonials />
        <Stories />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
