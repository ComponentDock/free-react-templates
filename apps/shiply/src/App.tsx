import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { OverlapStrip } from './components/OverlapStrip'
import { OfferSection } from './components/OfferSection'
import { ServicesCarousel } from './components/ServicesCarousel'
import { MoreServices } from './components/MoreServices'
import { VideoBand } from './components/VideoBand'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { CtaStrip } from './components/CtaStrip'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-body-grey">
      <Header />
      <main className="flex-1">
        <Hero />
        <OverlapStrip />
        <OfferSection />
        <ServicesCarousel />
        <MoreServices />
        <VideoBand />
        <Testimonials />
        <Blog />
        <CtaStrip />
      </main>
      <Footer />
    </div>
  )
}
