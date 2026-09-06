import { useEffect } from 'react'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Cornerstone — Footer Template'
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 font-['Poppins',sans-serif]">
      <main className="flex h-[70vh] items-center justify-center bg-gray-200">
        <h1 className="text-2xl font-light text-gray-500">Footer #8</h1>
      </main>
      <Footer />
    </div>
  )
}
