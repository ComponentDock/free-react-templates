import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Intro } from './components/Intro'
import { WhyChooseUs } from './components/WhyChooseUs'
import { AppointmentBand } from './components/AppointmentBand'
import { Services } from './components/Services'
import { Steps } from './components/Steps'
import { Stats } from './components/Stats'
import { Mechanics } from './components/Mechanics'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Fixly — Auto Repair Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Intro />
        <WhyChooseUs />
        <AppointmentBand />
        <Services />
        <Steps />
        <Stats />
        <Mechanics />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
