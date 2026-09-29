import { useEffect } from 'react'
import { SearchTabs } from './components/SearchTabs'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Seekwell — Travel Search'
  }, [])

  return (
    <div
      className="flex min-h-screen flex-col bg-cover bg-center bg-no-repeat font-body"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/seekwell-beach/1920/1080)' }}
    >
      <main className="flex flex-1 items-center justify-center px-4 py-20">
        <SearchTabs />
      </main>
      <Footer />
    </div>
  )
}
