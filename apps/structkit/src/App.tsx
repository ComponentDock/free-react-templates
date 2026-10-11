import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { BasicElements } from './components/BasicElements'
import { ButtonsShowcase } from './components/ButtonsShowcase'
import { InputsShowcase } from './components/InputsShowcase'
import { ControlsShowcase } from './components/ControlsShowcase'
import { MenusShowcase } from './components/MenusShowcase'
import { NavigationsShowcase } from './components/NavigationsShowcase'
import { PillsShowcase } from './components/PillsShowcase'
import { NotificationsShowcase } from './components/NotificationsShowcase'
import { TypographyShowcase } from './components/TypographyShowcase'
import { ImagesShowcase } from './components/ImagesShowcase'
import { JsComponentsShowcase } from './components/JsComponentsShowcase'
import { Carousel } from './components/Carousel'
import { ExamplesBand } from './components/ExamplesBand'
import { CardsShowcase } from './components/CardsShowcase'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Structkit — Free UI Kit Showcase'
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
        <MenusShowcase />
        <NavigationsShowcase />
        <PillsShowcase />
        <NotificationsShowcase />
        <TypographyShowcase />
        <ImagesShowcase />
        <JsComponentsShowcase />
        <Carousel />
        <ExamplesBand />
        <CardsShowcase />
      </main>
      <Footer />
    </div>
  )
}
