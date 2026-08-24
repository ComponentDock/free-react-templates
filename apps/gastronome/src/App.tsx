import { Navbar } from './components/Navbar'
import { HeroSlider } from './components/HeroSlider'
import { Welcome } from './components/Welcome'
import { Intro } from './components/Intro'
import { OurMenu } from './components/OurMenu'
import { Events } from './components/Events'
import { Booking } from './components/Booking'
import { Reviews } from './components/Reviews'
import { Video } from './components/Video'
import { Blog } from './components/Blog'
import { Signup } from './components/Signup'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-text-dark">
      <Navbar />
      <main className="flex-1">
        <HeroSlider />
        <Welcome />
        <Intro />
        <OurMenu />
        <Events />
        <Booking />
        <Reviews />
        <Video />
        <Blog />
        <Signup />
      </main>
      <Footer />
    </div>
  )
}
