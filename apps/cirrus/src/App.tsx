import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Partners } from './components/Partners'
import { Services } from './components/Services'
import { Capabilities } from './components/Capabilities'
import { Stats } from './components/Stats'
import { IntroStrip } from './components/IntroStrip'
import { FaqSection } from './components/FaqSection'
import { Pricing } from './components/Pricing'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-muted transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Partners />
        <Services />
        <Capabilities />
        <Stats />
        <IntroStrip />
        <FaqSection />
        <Pricing />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
