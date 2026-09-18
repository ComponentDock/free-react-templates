import { useState, useCallback } from 'react'
import { Sidebar } from './components/Sidebar'
import { HeroSlider } from './components/HeroSlider'
import { SlideCounter } from './components/SlideCounter'
import { SearchOverlay } from './components/SearchOverlay'
import { Preloader } from './components/Preloader'
import { Footer } from './components/Footer'

export function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [searchOpen, setSearchOpen] = useState(false)
  const [preloaderDone, setPreloaderDone] = useState(false)

  const totalSlides = 2

  const handleNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }, [totalSlides])

  const handlePrev = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }, [totalSlides])

  return (
    <div className="font-sans text-snap-primary">
      <Preloader onComplete={() => setPreloaderDone(true)} />
      {preloaderDone && (
        <>
          <Sidebar onSearchOpen={() => setSearchOpen(true)} />
          <main className="ml-0 lg:ml-[455px]">
            <HeroSlider currentSlide={currentSlide} onNext={handleNext} onPrev={handlePrev} />
          </main>
          <SlideCounter current={currentSlide + 1} total={totalSlides} />
          <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
          <Footer />
        </>
      )}
    </div>
  )
}
