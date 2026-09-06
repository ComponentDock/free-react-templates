import { useEffect } from 'react'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Topaz — Footer Template'
  }, [])

  return (
    <div className="min-h-screen font-['Nunito_Sans',sans-serif]">
      <main className="flex h-[70vh] items-center justify-center bg-gray-50 py-48">
        <h1 className="text-2xl font-light text-gray-500">Footer #14</h1>
      </main>
      <Footer />
    </div>
  )
}
