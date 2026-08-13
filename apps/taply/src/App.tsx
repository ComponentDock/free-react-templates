import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { ClientLogos } from './components/ClientLogos'
import { Features } from './components/Features'
import { Discover } from './components/Discover'
import { FeatureBlocks } from './components/FeatureBlocks'
import { LaunchApp } from './components/LaunchApp'
import { UiSteps } from './components/UiSteps'
import { Testimonials } from './components/Testimonials'
import { Screenshots } from './components/Screenshots'
import { Pricing } from './components/Pricing'
import { Faq } from './components/Faq'
import { DownloadCta } from './components/DownloadCta'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

/** Taply — one-page mobile app landing.
 *  Section order matches the live preview DOM 1:1. */
export function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <ClientLogos />
        <Features />
        <Discover />
        <FeatureBlocks />
        <LaunchApp />
        <UiSteps />
        <Testimonials />
        <Screenshots />
        <Pricing />
        <Faq />
        <DownloadCta />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
