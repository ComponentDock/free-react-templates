import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { HeroSlider } from './components/HeroSlider'
import { Welcome } from './components/Welcome'
import { Services } from './components/Services'
import { MenuSection } from './components/MenuSection'
import { Counter } from './components/Counter'
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
        <Welcome />
        <Services />
        <MenuSection />
        <Counter />
        <Chefs />
        <Reservation />
        <Testimonials />
        <BlogPosts />
      </main>
      <Footer />
    </div>
  )
}
