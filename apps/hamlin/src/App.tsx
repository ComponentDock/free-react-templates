import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { SearchForm } from './components/SearchForm'
import { RecentlyAdded } from './components/RecentlyAdded'
import { About } from './components/About'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-white font-rubik">
      <Navbar />
      <Hero />
      <SearchForm />
      <RecentlyAdded />
      <About />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  )
}
