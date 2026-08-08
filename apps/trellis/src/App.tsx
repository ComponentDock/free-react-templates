import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Portfolio } from './components/Portfolio'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Trellis — Architecture Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Portfolio />
      </main>
      <Footer />
    </div>
  )
}
