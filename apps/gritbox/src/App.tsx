import { Navbar } from './components/Navbar'
import { HeroSlider } from './components/HeroSlider'
import { PopularProgram } from './components/PopularProgram'
import { TheClub } from './components/TheClub'
import { FeaturedTrainer } from './components/FeaturedTrainer'
import { CrossfitExercises } from './components/CrossfitExercises'
import { Testimonies } from './components/Testimonies'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSlider />
      <PopularProgram />
      <TheClub />
      <FeaturedTrainer />
      <CrossfitExercises />
      <Testimonies />
      <Footer />
    </div>
  )
}
