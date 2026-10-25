import {
  BackToTop,
  CookieStrip,
  MobileBar,
  Preloader,
  ScrollProgress,
  SkipLink,
} from './components/Chrome'
import { Contact } from './components/Contact'
import { Deliverables } from './components/Deliverables'
import { Disciplines } from './components/Disciplines'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Process } from './components/Process'
import { Testimonials } from './components/Testimonials'
import { Work } from './components/Work'

export function App() {
  return (
    <div id="top">
      <Preloader />
      <SkipLink />
      <ScrollProgress />
      <Header />
      <main id="main-content">
        <Hero />
        <Work />
        <Disciplines />
        <Process />
        <Deliverables />
        <Testimonials />
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
