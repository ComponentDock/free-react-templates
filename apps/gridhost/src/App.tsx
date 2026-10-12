import { useEffect } from 'react'
import { BackToTop } from './components/BackToTop'
import { Blog } from './components/Blog'
import { DomainSearch } from './components/DomainSearch'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { HeroSlider } from './components/HeroSlider'
import { PartnerLogos } from './components/PartnerLogos'
import { Pricing } from './components/Pricing'
import { Services } from './components/Services'
import { StoryBand } from './components/StoryBand'
import { Support } from './components/Support'
import { Testimonials } from './components/Testimonials'

/**
 * Gridhost — web-hosting marketing page. Section order: the header that floats
 * over the hero → the navy three-slide hero with its cyan dot rail → the warm
 * half-wash services band → the domain search over the tinted price strip → the
 * story split → the partner grid → the pink plan card with its Monthly/Yearly
 * tabs → the testimonial carousel → the support photo band → three blog cards →
 * the navy footer, with the back-to-top circle over the page.
 */
export function App() {
  useEffect(() => {
    document.title = 'Gridhost — Web Hosting Template'
  }, [])

  return (
    <div className="min-h-screen bg-surface font-body">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-[8px] focus:left-[8px] focus:z-[2100] focus:bg-brand focus:px-4 focus:py-2 focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <Header />

      <main id="main">
        <HeroSlider />
        <Services />
        <DomainSearch />
        <StoryBand />
        <PartnerLogos />
        <Pricing />
        <Testimonials />
        <Support />
        <Blog />
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}
