import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { HeroSlider } from './components/HeroSlider'
import { FeaturedDishes } from './components/FeaturedDishes'
import { Welcome } from './components/Welcome'
import { Counter } from './components/Counter'
import { Services } from './components/Services'
import { MenuSection } from './components/MenuSection'
import { Chefs } from './components/Chefs'
import { Reservation } from './components/Reservation'
import { Testimonials } from './components/Testimonials'
import { BlogPosts } from './components/BlogPosts'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Forno — Restaurant Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <TopBar />
      <Navbar />
      <main>
        <HeroSlider />
        <FeaturedDishes />
        <Welcome />
        <Counter />
        <Services />
        <MenuSection />
        <Chefs />
        <Reservation />
        <Testimonials />
        <BlogPosts />
      </main>
      <Footer />
    </div>
  )
}
