import { useEffect } from 'react'
import { SearchForm } from './components/SearchForm'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Waypoint — Hotel Search Form Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-gray-900 font-body">
      <main
        className="flex flex-1 items-center justify-center bg-cover bg-center bg-no-repeat px-4 py-16"
        style={{
          backgroundImage: "url('https://picsum.photos/seed/waypoint-travel/1920/1080')",
        }}
      >
        <SearchForm />
      </main>
      <Footer />
    </div>
  )
}
