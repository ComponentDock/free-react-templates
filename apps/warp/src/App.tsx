import { useEffect } from 'react'
import { ToggleShowcase } from './components/ToggleShowcase'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Warp — Teleport Toggle Switch UI Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 transition-colors dark:bg-gray-950 dark:text-white">
      <main className="flex-1">
        <ToggleShowcase />
      </main>
      <Footer />
    </div>
  )
}
