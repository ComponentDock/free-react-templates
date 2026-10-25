import { BackToTop, CookieStrip, Preloader, ScrollProgress, SkipLink } from './components/Chrome'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Products } from './components/Products'
import { Quiz } from './components/Quiz'
import { Service } from './components/Service'
import { Testimonials } from './components/Testimonials'
import { WhyUs } from './components/WhyUs'
import { useScrollState } from './lib/useScrollState'

/**
 * One page in the reference's band order: sticky header, cream hero, the
 * three-question quiz, the four-product catalogue, the argument, the service
 * table, the reviews carousel, the sage closing band — then the footer with the
 * cookie strip and the back-to-top disc over it.
 */
export function App() {
  const { y, progress } = useScrollState()

  return (
    <div id="top" className="min-h-screen bg-white text-ink-700 dark:bg-gray-950 dark:text-gray-200">
      <Preloader />
      <SkipLink />
      <ScrollProgress progress={progress} />
      <Header lifted={y > 50} />

      <main id="main-content">
        <Hero />
        <Quiz />
        <Products />
        <WhyUs />
        <Service />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <CookieStrip />
      <BackToTop y={y} />
    </div>
  )
}
