import { useEffect } from 'react'
import { JourneyBar } from './components/JourneyBar'
import { Footer } from './components/JourneyBar'

export function App() {
  useEffect(() => {
    document.title = 'JourneyBar — Travel Search Form'
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-900">
      {/* Hero background */}
      <section className="relative flex min-h-[500px] items-center justify-center bg-gradient-to-br from-amber-700 via-amber-600 to-amber-800">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 mx-auto w-full max-w-4xl px-4 py-16">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold text-white drop-shadow-lg">
              Find Your Perfect Journey
            </h1>
            <p className="mt-3 text-lg text-amber-100">
              Search hotels, cars, and flights all in one place
            </p>
          </div>
          <JourneyBar />
        </div>
      </section>
      <Footer />
    </div>
  )
}
