import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { DonationStats } from './components/DonationStats'
import { MajorCauses } from './components/MajorCauses'
import { MakeDonation } from './components/MakeDonation'
import { ClientsLogos } from './components/ClientsLogos'
import { SupportCampaign } from './components/SupportCampaign'
import { ExperienceDonation } from './components/ExperienceDonation'
import { AboutNewsletter } from './components/AboutNewsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Carewell — Nonprofit & Charity Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-roboto text-text-primary">
      <Navbar />
      <main>
        <Hero />
        <DonationStats />
        <MajorCauses />
        <MakeDonation />
        <ClientsLogos />
        <SupportCampaign />
        <ExperienceDonation />
        <AboutNewsletter />
      </main>
      <Footer />
    </div>
  )
}
