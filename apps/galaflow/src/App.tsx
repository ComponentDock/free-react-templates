import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { NewEra } from './components/NewEra'
import { Subscribe } from './components/Subscribe'
import { ProgramSchedule } from './components/ProgramSchedule'
import { Speakers } from './components/Speakers'
import { BookSeat } from './components/BookSeat'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <Hero />
      <About />
      <NewEra />
      <Subscribe />
      <ProgramSchedule />
      <Speakers />
      <BookSeat />
      <Footer />
    </div>
  )
}
