import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { About } from './components/About'
import { Counter } from './components/Counter'
import { Sermons } from './components/Sermons'
import { Testimony } from './components/Testimony'
import { Blog } from './components/Blog'
import { Events } from './components/Events'
import { Gallery } from './components/Gallery'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-white font-poppins text-body-text">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Counter />
        <Sermons />
        <Testimony />
        <Blog />
        <Events />
        <Gallery />
      </main>
      <Footer />
    </div>
  )
}
