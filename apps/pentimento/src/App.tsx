import { Acquire } from './components/Acquire'
import { BackToTop, CookieStrip, MobileBar, Preloader, ScrollProgress, SkipLink } from './components/Chrome'
import { Contact } from './components/Contact'
import { Exhibitions } from './components/Exhibitions'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Statement } from './components/Statement'
import { Works } from './components/Works'

export function App() {
  return (
    <div id="top">
      <Preloader />
      <SkipLink />
      <ScrollProgress />
      <Header />
      <main id="main-content">
        <Hero />
        <Works />
        <Statement />
        <Exhibitions />
        <Acquire />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <CookieStrip />
      <MobileBar />
    </div>
  )
}
