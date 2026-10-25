import { BackToTop, CookieStrip, Preloader, ScrollProgress, SkipLink } from './components/Chrome'
import { Compare } from './components/Compare'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Owner } from './components/Owner'
import { Portfolio } from './components/Portfolio'
import { Process } from './components/Process'
import { Testimonials } from './components/Testimonials'

export function App() {
  return (
    <>
      <Preloader />
      <SkipLink />
      <ScrollProgress />
      <Header />
      <main id="main-content">
        <Hero />
        <Portfolio />
        <Compare />
        <Process />
        <Owner />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <CookieStrip />
    </>
  )
}
