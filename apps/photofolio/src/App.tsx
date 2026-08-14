import { useEffect } from 'react'
import { Header } from './components/Header'
import { HeroWall } from './components/HeroWall'
import { Intro } from './components/Intro'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Photofolio — Photography Portfolio Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink">
      <Header />
      <main className="flex-1">
        <HeroWall />
        <Intro />
      </main>
      <Footer />
    </div>
  )
}
