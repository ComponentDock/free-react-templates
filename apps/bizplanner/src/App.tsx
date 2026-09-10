import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Projects } from './components/Projects'
import { ParallaxBanner } from './components/ParallaxBanner'
import { Team } from './components/Team'
import { Skills } from './components/Skills'
import { Clients } from './components/Clients'
import { Pricing } from './components/Pricing'
import { Blog } from './components/Blog'
import { Partners } from './components/Partners'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-smoke transition-colors dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Projects />
        <ParallaxBanner />
        <Team />
        <Skills />
        <Clients />
        <Pricing />
        <Blog />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
