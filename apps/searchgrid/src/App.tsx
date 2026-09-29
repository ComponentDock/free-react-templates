import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Searchgrid — Search Form Bar Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main className="flex-1" />
      <Footer />
    </div>
  )
}
