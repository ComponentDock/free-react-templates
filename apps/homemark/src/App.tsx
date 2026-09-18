import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { FeatureIcons } from './components/FeatureIcons'
import { Intro } from './components/Intro'
import { Gallery } from './components/Gallery'
import { Location } from './components/Location'
import { Features } from './components/Features'
import { CallToAction } from './components/CallToAction'
import { Footer } from './components/Footer'

/** Homestead — one-page real-estate landing.
 *  Section order matches the live preview DOM 1:1:
 *  header → hero → feature icons → intro → gallery → location → features → CTA → footer. */
export function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-navy">
      <Navbar />
      <main>
        <Hero />
        <FeatureIcons />
        <Intro />
        <Gallery />
        <Location />
        <Features />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}
