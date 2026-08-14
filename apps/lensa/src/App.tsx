import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { Header } from './components/Header'
import { OffCanvasMenu } from './components/OffCanvasMenu'
import { Sidebar } from './components/Sidebar'
import { HeroSlider } from './components/HeroSlider'
import { CopyrightBar } from './components/CopyrightBar'

/** Lensa — photography studio landing: off-canvas menu, top header bar,
 *  fixed sidebar intro, scrolling hero photo track and copyright bar.
 *  Opening the menu pushes the content right on desktop. */
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-paper font-sans text-ink">
      <OffCanvasMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <div
        className={cn('transition-transform duration-300', menuOpen && 'lg:translate-x-[614px]')}
      >
        <Header onMenuToggle={() => setMenuOpen((open) => !open)} />
        <Sidebar />
        <main className="lg:pl-[614px]">
          <HeroSlider />
        </main>
        <CopyrightBar />
      </div>
    </div>
  )
}
