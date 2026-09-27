import { Navbar } from './components/Navbar'
import { InfoBar } from './components/InfoBar'
import { Hero } from './components/Hero'
import { SearchForm } from './components/SearchForm'
import { HowItWorks } from './components/HowItWorks'
import { FeaturedProperties } from './components/FeaturedProperties'
import { VideoSection } from './components/VideoSection'
import { TopProperties } from './components/TopProperties'
import { Agents } from './components/Agents'
import { Blog } from './components/Blog'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

/** Terravault — one-page real-estate landing.
 *  Section order matches the Azenta layout 1:1:
 *  navbar → info bar → hero → search → how it works → featured properties →
 *  video → top properties → agents → blog → newsletter → footer. */
export function App() {
  return (
    <div className="min-h-screen bg-white font-body text-[#333333]">
      <Navbar />
      <InfoBar />
      <main>
        <Hero />
        <SearchForm />
        <HowItWorks />
        <FeaturedProperties />
        <VideoSection />
        <TopProperties />
        <Agents />
        <Blog />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
