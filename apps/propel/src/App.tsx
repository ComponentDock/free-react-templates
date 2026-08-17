import { Blog } from './components/Blog'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { HalfContent } from './components/HalfContent'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Startup } from './components/Startup'

/* Propel — business/startup corporate one-pager. Section order mirrors the
   recreated source design 1:1: absolute transparent navbar over the photo
   hero (with video modal), startup media rows, numbered services, blog
   rows, contact form, half-content CTA panels, and the light footer. Brand
   palette: #0e49b5 blue over white/light-gray surfaces with Montserrat
   headings and Open Sans body. */
export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Startup />
        <Services />
        <Blog />
        <Contact />
        <HalfContent />
      </main>
      <Footer />
    </>
  )
}
