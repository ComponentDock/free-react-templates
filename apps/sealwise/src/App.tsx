import {
  BackToTop,
  CookieStrip,
  MobileCallBar,
  Preloader,
  ScrollProgress,
  SkipLink,
} from './components/Chrome'
import { Areas } from './components/Areas'
import { Contact } from './components/Contact'
import { Emergency } from './components/Emergency'
import { Faq } from './components/Faq'
import { Finder } from './components/Finder'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { LicenceBar } from './components/LicenceBar'
import { Plans } from './components/Plans'
import { Process } from './components/Process'
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
        <Finder />
        <Emergency />
        <Plans />
        <WhyUs />
        <Process />
        <Areas />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <CookieStrip />
      <MobileCallBar />
    </>
  )
}
