import { useEffect } from 'react'
import { CheckboxShowcase } from './components/CheckboxShowcase'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Checkly — Checkbox Showcase Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 transition-colors dark:bg-gray-950 dark:text-white">
      <main className="flex-1">
        <CheckboxShowcase />
      </main>
      <Footer />
    </div>
  )
}
