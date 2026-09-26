import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { ModelGallery } from './components/ModelGallery'
import { Testimonials } from './components/Testimonials'
import { Cta } from './components/Cta'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <ModelGallery />
        <Testimonials />
        <Cta />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
