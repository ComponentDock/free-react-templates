import { useEffect } from 'react'
import { FlightSearchForm } from './components/FlightSearchForm'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'QueryBar — Flight Search'
  }, [])

  return (
    <div className="flex min-h-screen flex-col font-body">
      <main
        className="flex min-h-[80vh] flex-1 items-center justify-center bg-cover bg-center px-4 py-20"
        style={{
          backgroundImage: 'url(https://picsum.photos/seed/querybar-ocean/1920/1080)',
        }}
      >
        <FlightSearchForm />
      </main>
      <Footer />
    </div>
  )
}
