import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { ColorPalette } from './components/ColorPalette'
import { Typography } from './components/Typography'
import { Buttons } from './components/Buttons'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Kaleido — UI Kit Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ColorPalette />
        <Typography />
        <Buttons />
      </main>
      <Footer />
    </div>
  )
}
