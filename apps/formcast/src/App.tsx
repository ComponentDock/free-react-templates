import { useEffect } from 'react'
import { ContactCard } from './components/ContactCard'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'FormCast — Contact Form Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col font-sans" data-testid="map-background">
      {/* Map-like gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100" />

      <main className="flex flex-1 items-center justify-center px-4 py-12">
        <ContactCard />
      </main>
      <Footer />
    </div>
  )
}
