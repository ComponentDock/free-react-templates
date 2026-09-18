import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { ContactCta } from './components/ContactCta'
import { Stats } from './components/Stats'
import { Team } from './components/Team'
import { Testimonial } from './components/Testimonial'
import { LatestNews } from './components/LatestNews'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-800">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <Projects />
        <ContactCta />
        <Stats />
        <Team />
        <Testimonial />
        <LatestNews />
      </main>
      <Footer />
    </div>
  )
}
