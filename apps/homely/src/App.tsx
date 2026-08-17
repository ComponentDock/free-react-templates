import { About } from './components/About'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { WhyChooseUs } from './components/WhyChooseUs'

/* Homely — online home loan one-pager. Section order mirrors the recreated
   source design 1:1: transparent header over the hero, split hero with the
   floating calculator card, services, mint about band with the 99% badge,
   "Why choose us" band, "3 easy steps" about band, dark testimonial
   carousel, latest news, mint four-widget footer. Brand palette: green
   #10c98f accent over white/mint/soft surfaces with dark green #0f4332
   headings and a dark-green testimonial band. */
export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About id="about" variant="guide" />
        <WhyChooseUs />
        <About variant="steps" />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </>
  )
}
