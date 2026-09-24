import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { StatsBar } from './components/StatsBar'
import { StatsSection } from './components/StatsSection'
import { Episodes } from './components/Episodes'
import { Guests } from './components/Guests'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-dark-bg font-sans">
      <Navbar />
      <Hero />
      <StatsBar />
      <StatsSection />
      <Episodes />
      <Guests />
      <Newsletter />
      <Footer />
    </div>
  )
}
