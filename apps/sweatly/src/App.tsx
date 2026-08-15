import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { FeatureCarousel } from './components/FeatureCarousel'
import { Banner } from './components/Banner'
import { Classes } from './components/Classes'
import { Schedule } from './components/Schedule'
import { Trainers } from './components/Trainers'
import { Services } from './components/Services'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Sweatly — Fitness Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink">
      <Header />
      <main className="flex-1">
        <Hero />
        <FeatureCarousel />
        <Banner
          image="https://picsum.photos/seed/sweatly-banner-1/1600/600"
          heading="Get The Result You Want"
          lead="Consistency beats intensity. Train with us and watch the small daily wins turn into real, lasting results."
        />
        <Classes />
        <Banner
          image="https://picsum.photos/seed/sweatly-banner-2/1600/600"
          heading="Every Step Counts"
          lead="Show up, put in the work, and let every rep, mile, and minute move you closer to your goal."
        />
        <Schedule />
        <Banner
          image="https://picsum.photos/seed/sweatly-banner-3/1600/600"
          heading="Your Fitness Partner Where Ever You Are"
          lead="Train in the club, at home, or on the road — your plan and your coaches go where you go."
        />
        <Trainers />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
