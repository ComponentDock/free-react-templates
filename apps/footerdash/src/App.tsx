import { useEffect } from 'react'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'FooterDash — Footer Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-['Poppins',sans-serif]">
      <main className="flex h-[60vh] items-center justify-center">
        <h1 className="text-2xl font-light text-gray-400">Footer #18</h1>
      </main>
      <Footer />
    </div>
  )
}
