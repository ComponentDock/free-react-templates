import { useEffect } from 'react'
import { ToggleShowcase } from './components/ToggleShowcase'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Toggly — Switch Toggle'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-[#fafafa] text-gray-900 transition-colors dark:bg-gray-950 dark:text-white">
      <main className="flex-1">
        <ToggleShowcase />
      </main>
      <Footer />
    </div>
  )
}
