import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { TrustBanner } from './components/TrustBanner'
import { FunFacts } from './components/FunFacts'
import { Courses } from './components/Courses'
import { AboutVideo } from './components/AboutVideo'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { FAQs } from './components/FAQs'
import { Contact } from './components/Contact'
import { Clients } from './components/Clients'
import { AdmissionCTA } from './components/AdmissionCTA'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-brand-body">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <TrustBanner />
        <FunFacts />
        <Courses />
        <AboutVideo />
        <Testimonials />
        <Blog />
        <FAQs />
        <Contact />
        <Clients />
        <AdmissionCTA />
      </main>
      <Footer />
    </div>
  )
}
