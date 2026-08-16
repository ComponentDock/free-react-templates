import { About } from './components/About'
import { Blog } from './components/Blog'
import { CallBackCta } from './components/CallBackCta'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Testimonials } from './components/Testimonials'
import { Treatments } from './components/Treatments'

/* Pearly — dental clinic landing page. Section order mirrors the
   recreated source design 1:1: header, hero, about, treatments,
   testimonials, blog, call-back CTA, footer. */
export function App() {
  return (
    <main className="bg-white font-sans">
      <Header />
      <Hero />
      <About />
      <Treatments />
      <Testimonials />
      <Blog />
      <CallBackCta />
      <Footer />
    </main>
  )
}
