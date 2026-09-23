import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { FeatureStrip } from './components/FeatureStrip'
import { TrustSection } from './components/TrustSection'
import { PracticeAreas } from './components/PracticeAreas'
import { Attorneys } from './components/Attorneys'
import { Testimonials } from './components/Testimonials'
import { CtaBanner } from './components/CtaBanner'
import { ContactForm } from './components/ContactForm'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#666666]">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeatureStrip />
        <TrustSection />
        <PracticeAreas />
        <Attorneys />
        <Testimonials />
        <CtaBanner />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
