import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { ErrorSection } from './components/ErrorSection'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Tears — Error Page Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 text-gray-900 transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <ErrorSection />
      </main>
      <Footer />
    </div>
  )
}
