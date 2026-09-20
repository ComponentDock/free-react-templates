import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Courses } from './components/Courses'
import { CtaSection } from './components/CtaSection'
import { WhyUs } from './components/WhyUs'
import { ContactCta } from './components/ContactCta'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="font-[var(--font-montserrat)]">
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <CtaSection />
      <WhyUs />
      <ContactCta />
      <Footer />
    </div>
  )
}
