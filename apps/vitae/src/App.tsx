import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { About } from './components/About'
import { Portfolio } from './components/Portfolio'
import { Testimonials } from './components/Testimonials'
import { Clients } from './components/Clients'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

/* Vitae — personal CV one-pager.
   Section order matches the reference preview 1:1: three-part sticky
   header → light hero with portrait → services cards → about split →
   portfolio grid → dark testimonials band → clients row → underline
   contact form → light footer. */
export function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Testimonials />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
