import { useEffect } from 'react'
import { HeaderTop } from './components/HeaderTop'
import { Navbar } from './components/Navbar'
import { HeroSlider } from './components/HeroSlider'
import { TeamProfiles } from './components/TeamProfiles'
import { WeAreTrusted } from './components/WeAreTrusted'
import { OurServices } from './components/OurServices'
import { CompletedCases } from './components/CompletedCases'
import { RecentNews } from './components/RecentNews'
import { RequestCallback } from './components/RequestCallback'
import { Footer } from './components/Footer'
import { FooterBottom } from './components/FooterBottom'

export function App() {
  useEffect(() => {
    document.title = 'Insight — Consulting Company Landing Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-poppins text-navy-dark transition-colors dark:bg-gray-950 dark:text-white">
      <HeaderTop />
      <Navbar />
      <main className="flex-1">
        <HeroSlider />
        <TeamProfiles />
        <WeAreTrusted />
        <OurServices />
        <CompletedCases />
        <RecentNews />
        <RequestCallback />
      </main>
      <Footer />
      <FooterBottom />
    </div>
  )
}
