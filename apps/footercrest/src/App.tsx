import { useEffect } from 'react'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'FooterCrest — Footer Template'
  }, [])

  return (
    <div className="min-h-screen font-['Poppins',sans-serif]">
      <main className="flex h-[70vh] items-center justify-center bg-section-bg">
        <h1 className="text-2xl font-light text-gray-500">Footer #06</h1>
      </main>
      <Footer />
    </div>
  )
}
