import { useEffect } from 'react'
import { Hero } from './components/Hero'
import { AlertsShowcase } from './components/AlertsShowcase'
import { BadgeShowcase } from './components/BadgeShowcase'
import { ButtonsShowcase } from './components/ButtonsShowcase'
import { CarouselShowcase } from './components/CarouselShowcase'
import { DropdownsShowcase } from './components/DropdownsShowcase'
import { FormsShowcase } from './components/FormsShowcase'
import { ModalShowcase } from './components/ModalShowcase'
import { NavbarShowcase } from './components/NavbarShowcase'
import { PaginationShowcase } from './components/PaginationShowcase'
import { TypographyShowcase } from './components/TypographyShowcase'
import { ImagesShowcase } from './components/ImagesShowcase'
import { PopoversShowcase } from './components/PopoversShowcase'
import { TooltipsShowcase } from './components/TooltipsShowcase'
import { ControlsShowcase } from './components/ControlsShowcase'
import { SlidersShowcase } from './components/SlidersShowcase'
import { TabsShowcase } from './components/TabsShowcase'
import { ProgressShowcase } from './components/ProgressShowcase'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Modkit — Component UI Kit Showcase'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans">
      <main>
        <Hero />
        <AlertsShowcase />
        <BadgeShowcase />
        <ButtonsShowcase />
        <CarouselShowcase />
        <DropdownsShowcase />
        <FormsShowcase />
        <ModalShowcase />
        <NavbarShowcase />
        <PaginationShowcase />
        <TypographyShowcase />
        <ImagesShowcase />
        <PopoversShowcase />
        <TooltipsShowcase />
        <ControlsShowcase />
        <SlidersShowcase />
        <TabsShowcase />
        <ProgressShowcase />
      </main>
      <Footer />
    </div>
  )
}
