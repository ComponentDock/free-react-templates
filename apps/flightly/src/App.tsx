import { useEffect } from 'react'
import { FlightSearchForm } from './components/FlightSearchForm'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Flightly — Flight Search Form Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 transition-colors dark:bg-gray-950 dark:text-white">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {/* Background image */}
        <img
          src="https://picsum.photos/seed/flightly-hero/1920/1080"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-4 py-20 sm:px-6">
          <h1 className="text-center text-4xl font-bold uppercase tracking-wider text-white drop-shadow-lg sm:text-5xl md:text-6xl">
            Search Flights
          </h1>
          <FlightSearchForm />
        </div>
      </section>
      <Footer />
    </div>
  )
}
