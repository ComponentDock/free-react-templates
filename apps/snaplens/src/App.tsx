import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Portfolio from './components/Portfolio'
import Milestones from './components/Milestones'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen font-sans text-ink-700">
      <Navbar />
      <Hero />
      <Intro />
      <Portfolio />
      <Milestones />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}
