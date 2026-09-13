import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { SpecialOffers } from './components/SpecialOffers'
import { About } from './components/About'
import { Training } from './components/Training'
import { Team } from './components/Team'
import { BlogCategories } from './components/BlogCategories'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { BlogPosts } from './components/BlogPosts'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <SpecialOffers />
        <About />
        <Training />
        <Team />
        <BlogCategories />
        <Services />
        <Testimonials />
        <BlogPosts />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
