import { BackToTop, CookieStrip, Preloader, ScrollProgress, SkipLink } from './components/Chrome'
import { Areas } from './components/Areas'
import { Contact } from './components/Contact'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero, LicenceBar } from './components/Hero'
import { Industries } from './components/Industries'
import { Process } from './components/Process'
import { Scope } from './components/Scope'
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
        <Scope />
        <Industries />
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
    </>
  )
}
