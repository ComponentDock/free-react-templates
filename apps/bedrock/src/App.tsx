import { useEffect } from 'react'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Bedrock — Footer Template'
  }, [])

  return (
    <div className="min-h-screen bg-hero-bg font-['Poppins',sans-serif]">
      <main className="flex h-[70vh] items-center justify-center">
        <h1 className="text-2xl font-light text-gray-500">Footer #01</h1>
      </main>
      <Footer />
    </div>
  )
}
