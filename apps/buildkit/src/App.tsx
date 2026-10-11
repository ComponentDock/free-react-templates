import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { BasicElements } from './components/BasicElements'
import { ButtonsShowcase } from './components/ButtonsShowcase'
import { InputsShowcase } from './components/InputsShowcase'
import { ControlsShowcase } from './components/ControlsShowcase'
import { SlidersShowcase } from './components/SlidersShowcase'
import { ProgressShowcase } from './components/ProgressShowcase'
import { PaginationsShowcase } from './components/PaginationsShowcase'
import { MenusShowcase } from './components/MenusShowcase'
import { NavigationsShowcase } from './components/NavigationsShowcase'
import { TabsBadgesShowcase } from './components/TabsBadgesShowcase'
import { NotificationsShowcase } from './components/NotificationsShowcase'
import { TypographyShowcase } from './components/TypographyShowcase'
import { ImagesShowcase } from './components/ImagesShowcase'
import { JsComponentsShowcase } from './components/JsComponentsShowcase'
import { CarouselBand } from './components/CarouselBand'
import { ExamplesIntro } from './components/ExamplesIntro'
import { SignupBand } from './components/SignupBand'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Buildkit — Component UI Kit Showcase'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <BasicElements />
        <ButtonsShowcase />
        <InputsShowcase />
        <ControlsShowcase />
        <SlidersShowcase />
        <ProgressShowcase />
        <PaginationsShowcase />
        <MenusShowcase />
        <NavigationsShowcase />
        <TabsBadgesShowcase />
        <NotificationsShowcase />
        <TypographyShowcase />
        <ImagesShowcase />
        <JsComponentsShowcase />
        <CarouselBand />
        <ExamplesIntro />
        <SignupBand />
      </main>
      <Footer />
    </div>
  )
}
