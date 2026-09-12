import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { SpecialDishes } from './components/SpecialDishes'
import { OurMenu } from './components/OurMenu'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <SpecialDishes />
        <OurMenu />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
