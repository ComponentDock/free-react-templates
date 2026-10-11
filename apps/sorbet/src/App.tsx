import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { FeatureCards } from './components/FeatureCards'
import { BasicElements } from './components/BasicElements'
import { ButtonsShowcase } from './components/ButtonsShowcase'
import { InputsShowcase } from './components/InputsShowcase'
import { ControlsShowcase } from './components/ControlsShowcase'
import { SlidersBadgesShowcase } from './components/SlidersBadgesShowcase'
import { ProgressPaginationShowcase } from './components/ProgressPaginationShowcase'
import { NavigationsShowcase } from './components/NavigationsShowcase'
import { PillsShowcase } from './components/PillsShowcase'
import { NotificationsShowcase } from './components/NotificationsShowcase'
import { TypographyShowcase } from './components/TypographyShowcase'
import { ImagesShowcase } from './components/ImagesShowcase'
import { JsComponentsShowcase } from './components/JsComponentsShowcase'
import { Carousel } from './components/Carousel'
import { ExamplesBand } from './components/ExamplesBand'
import { SignupBand } from './components/SignupBand'
import { CtaBand } from './components/CtaBand'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Sorbet — UI Kit Showcase'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <FeatureCards />
        <BasicElements />
        <ButtonsShowcase />
        <InputsShowcase />
        <ControlsShowcase />
        <SlidersBadgesShowcase />
        <ProgressPaginationShowcase />
        <NavigationsShowcase />
        <PillsShowcase />
        <NotificationsShowcase />
        <TypographyShowcase />
        <ImagesShowcase />
        <JsComponentsShowcase />
        <Carousel />
        <ExamplesBand />
        <SignupBand />
        <CtaBand />
      </main>
      <Footer />
    </div>
  )
}
