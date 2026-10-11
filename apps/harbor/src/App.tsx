import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { DomainSearch } from './components/DomainSearch'
import { Services } from './components/Services'
import { Pricing } from './components/Pricing'
import { Achievement } from './components/Achievement'
import { WorkBand } from './components/WorkBand'
import { ChoosePlan } from './components/ChoosePlan'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Harbor — Web Hosting Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-[#111]">
      <header className="absolute left-0 top-0 z-20 w-full">
        <TopBar />
        <Navbar />
      </header>
      <main>
        <Hero />
        <DomainSearch />
        <Services />
        <Pricing />
        <Achievement />
        <WorkBand />
        <ChoosePlan />
      </main>
      <Footer />
    </div>
  )
}
