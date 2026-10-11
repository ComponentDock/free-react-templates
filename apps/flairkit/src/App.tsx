import { useEffect } from 'react'
import { Hero } from './components/Hero'
import { ButtonsShowcase } from './components/ButtonsShowcase'
import { InputsShowcase } from './components/InputsShowcase'
import { ControlsShowcase } from './components/ControlsShowcase'
import { SliderBadgePagerProgress } from './components/SliderBadgePagerProgress'
import { NavbarShowcase } from './components/NavbarShowcase'
import { TabsShowcase } from './components/TabsShowcase'
import { AlertsShowcase } from './components/AlertsShowcase'
import { TypographyShowcase } from './components/TypographyShowcase'
import { ImagesShowcase } from './components/ImagesShowcase'
import { JsComponentsShowcase } from './components/JsComponentsShowcase'
import { CarouselShowcase } from './components/CarouselShowcase'
import { CardsShowcase } from './components/CardsShowcase'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Flairkit — UI Kit Showcase'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans">
      <main>
        <Hero />
        <ButtonsShowcase />
        <InputsShowcase />
        <ControlsShowcase />
        <SliderBadgePagerProgress />
        <NavbarShowcase />
        <TabsShowcase />
        <AlertsShowcase />
        <TypographyShowcase />
        <ImagesShowcase />
        <JsComponentsShowcase />
        <CarouselShowcase />
        <CardsShowcase />
      </main>
      <Footer />
    </div>
  )
}
