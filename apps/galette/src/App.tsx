import { useEffect } from 'react'
import { SelectionSection } from './components/SelectionSection'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Galette — Item Selection Checkbox Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 transition-colors dark:bg-gray-950 dark:text-white">
      <main className="flex-1">
        <SelectionSection />
      </main>
      <Footer />
    </div>
  )
}
