import { useEffect } from 'react'
import { SearchCard } from './components/SearchCard'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Travenzo — Travel Booking Search'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-gray-900 font-body">
      <main
        className="flex flex-1 items-center justify-center bg-cover bg-center px-4 py-20"
        style={{
          backgroundImage: 'url(https://picsum.photos/seed/travenzo-bg/1920/1080)',
        }}
      >
        <SearchCard />
      </main>
      <Footer />
    </div>
  )
}
