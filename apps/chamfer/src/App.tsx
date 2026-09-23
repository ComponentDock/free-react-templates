import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { HeroSlider } from './components/HeroSlider'
import { OurInfo } from './components/OurInfo'
import { ProServices } from './components/ProServices'
import { ServiceCards } from './components/ServiceCards'
import { GalleryGrid } from './components/GalleryGrid'
import { TeamGrid } from './components/TeamGrid'
import { TestimonialSection } from './components/TestimonialSection'
import { BrandCarousel } from './components/BrandCarousel'
import { CtaBanner } from './components/CtaBanner'
import { BlogPosts } from './components/BlogPosts'
import { Footer } from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'

export function App() {
  useEffect(() => {
    document.title = 'Chamfer — Interior Design Studio'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-light-bg text-body-text transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <HeroSlider />
        <OurInfo />
        <ProServices />
        <ServiceCards />
        <GalleryGrid />
        <TeamGrid />
        <TestimonialSection />
        <BrandCarousel />
        <CtaBanner />
        <BlogPosts />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
