import { Blog } from './components/Blog'
import { Campaign } from './components/Campaign'
import { DonateCta } from './components/DonateCta'
import { Footer } from './components/Footer'
import { FundRaised } from './components/FundRaised'
import { HeroSlider } from './components/HeroSlider'
import { Navbar } from './components/Navbar'
import { Newsletter } from './components/Newsletter'
import { Services } from './components/Services'
import { Statistics } from './components/Statistics'
import { Testimonials } from './components/Testimonials'
import { TopBar } from './components/TopBar'
import { Volunteers } from './components/Volunteers'

/* Meadow — environment & wildlife charity one-pager. Section order mirrors the
   recreated source design 1:1: dark top info bar, green navbar, photo hero
   slider, services, campaign gallery, donate CTA, green statistics band,
   volunteers, testimonials, fund-raised banner, blog, newsletter band, dark
   four-widget footer. */
export function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <HeroSlider />
        <Services />
        <Campaign />
        <DonateCta />
        <Statistics />
        <Volunteers />
        <Testimonials />
        <FundRaised />
        <Blog />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
