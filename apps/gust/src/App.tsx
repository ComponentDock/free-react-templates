import { useEffect } from 'react'
import { WeatherDropdown } from './components/WeatherDropdown'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Gust — Weather Dropdown Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-body-bg text-gray-600 transition-colors">
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-28">
        <WeatherDropdown />
      </main>
      <Footer />
    </div>
  )
}
