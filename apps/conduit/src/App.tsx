import { BackToTop, CookieStrip, Preloader, ScrollProgress, SkipLink, StickyCallBar } from './components/Chrome'
import { Areas } from './components/Areas'
import { Compare } from './components/Compare'
import { Contact } from './components/Contact'
import { Emergency } from './components/Emergency'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { LicenceBar } from './components/LicenceBar'
import { Process } from './components/Process'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { WhyUs } from './components/WhyUs'

export function App() {
  return (
    <>
      <Preloader />
      <SkipLink />
      <ScrollProgress />
      <LicenceBar />
      <Header />
      <main id="main-content">
        <Hero />
        <Emergency />
        <Compare />
        <Process />
        <Services />
        <WhyUs />
        <Areas />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <StickyCallBar />
      <CookieStrip />
    </>
  )
}
