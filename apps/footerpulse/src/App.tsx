import { useEffect } from 'react'
import { ContactCards } from './components/ContactCards'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'FooterPulse — Footer Template'
  }, [])

  return (
    <div className="min-h-screen font-['Poppins',sans-serif]">
      <main className="flex h-[70vh] items-center justify-center bg-section-bg">
        <h1 className="text-2xl font-light text-gray-500">Footer #10</h1>
      </main>
      <ContactCards />
      <Footer />
    </div>
  )
}
