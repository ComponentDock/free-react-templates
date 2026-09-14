import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { About } from './components/About'
import { Industries } from './components/Industries'
import { FAQ } from './components/FAQ'
import { Portfolio } from './components/Portfolio'
import { Team } from './components/Team'
import { Blog } from './components/Blog'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-barlow text-ink">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <Industries />
        <FAQ />
        <Portfolio />
        <Team />
        <Blog />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
