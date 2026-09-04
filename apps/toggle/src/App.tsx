import { useEffect } from 'react'
import { DemoSection } from './components/DemoSection'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Toggle — Day/Night Switch Toggle Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 transition-colors dark:bg-gray-950 dark:text-white">
      <main className="flex-1">
        <DemoSection />
      </main>
      <Footer />
    </div>
  )
}
