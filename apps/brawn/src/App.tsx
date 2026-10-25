import { SkipLink } from './components/Chrome'
import { Cta } from './components/Cta'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Programs } from './components/Programs'
import { Services } from './components/Services'
import { SplitBand } from './components/SplitBand'
import { Testimonials } from './components/Testimonials'
import { SPLIT_ABOUT, SPLIT_PROGRAM } from './content'

/**
 * One page in the reference's band order: header (in flow), 100vh hero, the
 * four diamonds, "Enjoy The Fitness" with the photo on the left, the blue
 * program band, "Be Fit & Healthy" with the photo on the right, the
 * testimonial carousel, the CTA strip and the dark footer.
 */
export function App() {
  return (
    <div className="min-h-screen bg-white">
      <SkipLink />
      <Header />
      <main id="main-content">
        <Hero />
        <Services />
        <SplitBand split={SPLIT_ABOUT} imageSide="left" />
        <Programs />
        <SplitBand split={SPLIT_PROGRAM} imageSide="right" />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </div>
  )
}
