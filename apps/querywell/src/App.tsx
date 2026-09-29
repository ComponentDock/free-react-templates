import { useEffect } from 'react'
import { HeroSearch } from './components/HeroSearch'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'QueryWell — Search Form Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-gray-900 font-sans text-white">
      <main className="flex flex-1 items-center justify-center">
        <HeroSearch />
      </main>
      <Footer />
    </div>
  )
}
