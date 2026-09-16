import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { GetQuote } from './components/GetQuote'
import { WhoWeAre } from './components/WhoWeAre'
import { Services } from './components/Services'
import { Projects } from './components/Projects'
import { WorkWithUs } from './components/WorkWithUs'
import { Team } from './components/Team'
import { Counter } from './components/Counter'
import { Testimonials } from './components/Testimonials'
import { LatestNews } from './components/LatestNews'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Hammerly — Construction Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <GetQuote />
        <WhoWeAre />
        <Services />
        <Projects />
        <WorkWithUs />
        <Team />
        <Counter />
        <Testimonials />
        <LatestNews />
      </main>
      <Footer />
    </div>
  )
}
