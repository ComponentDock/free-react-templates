import { About } from './components/About'
import { BackToTop } from './components/BackToTop'
import { Contact } from './components/Contact'
import { Episodes } from './components/Episodes'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { MobileCta } from './components/MobileCta'
import { Newsletter } from './components/Newsletter'
import { Reviews } from './components/Reviews'
import { ScrollProgress } from './components/ScrollProgress'
import { Sponsors } from './components/Sponsors'

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-gray-950 text-white">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Episodes />
        <About />
        <Sponsors />
        <Reviews />
        <Newsletter />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <MobileCta />
      <BackToTop />
    </div>
  )
}
