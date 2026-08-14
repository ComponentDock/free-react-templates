import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Skills } from './components/Skills'
import { CtaBand } from './components/CtaBand'
import { Counters } from './components/Counters'
import { NewsCarousel } from './components/NewsCarousel'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { BlogSection } from './components/BlogSection'
import { Footer } from './components/Footer'
import { ctaBackdrop, ctaBandCopy, qualityCtaCopy, servicesBackdrop } from './data'

/** Emblem — digital agency landing: transparent header over a photo hero,
 *  features, skills, two photo CTA bands, counters, news carousel, services
 *  grid, testimonials, blog and footer, in the reference order. */
export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-ink antialiased">
      <Header />
      <main>
        <Hero />
        <Features />
        <Skills />
        <CtaBand backdrop={ctaBackdrop} lead={ctaBandCopy.lead} heading={ctaBandCopy.heading} />
        <Counters />
        <NewsCarousel />
        <Services />
        <Testimonials />
        <CtaBand
          backdrop={servicesBackdrop}
          heading={qualityCtaCopy.heading}
          lead={qualityCtaCopy.lead}
          cta={{ label: qualityCtaCopy.cta, href: '#contact' }}
        />
        <BlogSection />
      </main>
      <Footer />
    </div>
  )
}
