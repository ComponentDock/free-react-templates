import { useEffect } from 'react'
import { QuestBar } from './components/QuestBar'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'QuestBar — Search Form Component'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 text-gray-900 transition-colors dark:bg-gray-950 dark:text-white">
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-12">
        <h1 className="mb-8 text-3xl font-medium tracking-tight text-gray-800 dark:text-gray-200">
          QuestBar Search
        </h1>
        <QuestBar />
      </main>
      <Footer />
    </div>
  )
}
