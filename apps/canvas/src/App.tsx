import { BlogCarousel } from './components/BlogCarousel'
import { ClientLogos } from './components/ClientLogos'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { PortfolioMosaic } from './components/PortfolioMosaic'
import { Services } from './components/Services'

/* Canvas — single-page recreation of ColorLib "Approach"
   (https://colorlib.com/wp/template/approach/). Section order 1:1 with the
   source: navbar → black hero → portfolio mosaic (overlapping the hero) →
   services → indigo blog band → client logos → white footer. Body text is
   Source Serif Pro (font-serif on the root); all headings are Poppins. */
export function App() {
  return (
    <div className="font-serif text-body">
      <Navbar />
      <main>
        <Hero />
        <PortfolioMosaic />
        <Services />
        <BlogCarousel />
        <ClientLogos />
      </main>
      <Footer />
    </div>
  )
}
