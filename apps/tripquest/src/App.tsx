import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Destinations } from './components/Destinations'
import { Packages } from './components/Packages'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { CustomCta } from './components/CustomCta'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="font-body">
      <Navbar />
      <main>
        <Hero />
        <Destinations />
        <Packages />
        <Services />
        <Testimonials />
        <CustomCta />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
